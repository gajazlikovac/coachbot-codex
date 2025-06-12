'use client';

import { useCallback, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { HeapTrackEvent } from '@/lib/models/analytic.models';
import { Instruction, ModerationRule, ModerationTemplate, Severity } from '@/lib/models/instruction.models';
import { heapAnalytics } from '@/lib/services/HeapAnalytics';
import { filterArray, upsertArrayItem } from '@/lib/utils/array.utils';
import {
  createModerationRule,
  createModerationTemplate,
  deleteModerationRule,
  deleteModerationTemplate,
  updateModerationRule,
  updateModerationTemplate,
} from '@/server/actions/instructionsActions';
import ConfigurationManager from '@/shared/ConfigurationManager';
import CustomizableDropdown from '@/shared/CustomizableDropdown';
import Dropdown, { DropdownOption } from '@/shared/Dropdown';
import { Input } from '@/shared/Input';
import InstructionInput from '@/shared/InstructionInput';

const severityOptions: DropdownOption<Severity>[] = Object.values(Severity).map((value: Severity, id: number) => ({
  id,
  value,
  label: value,
}));
const instructionComponentsConfig = [
  {
    labelKey: 'Instructions.ModerationRules.instructions.triggers',
    placeholderKey: 'Instructions.ModerationRules.instructions.triggersPlaceholder',
    propKey: 'triggers' as keyof Instruction,
  },
  {
    labelKey: 'Instructions.ModerationRules.instructions.purpose',
    placeholderKey: 'Instructions.ModerationRules.instructions.purposePlaceholder',
    propKey: 'purpose' as keyof Instruction,
  },
  {
    labelKey: 'Instructions.ModerationRules.instructions.whenToUse',
    placeholderKey: 'Instructions.ModerationRules.instructions.whenToUsePlaceholder',
    propKey: 'when_to_use' as keyof Instruction,
  },
  {
    labelKey: 'Instructions.ModerationRules.instructions.whenToDetect',
    placeholderKey: 'Instructions.ModerationRules.instructions.whenToDetectPlaceholder',
    propKey: 'what_to_detect' as keyof Instruction,
  },
];

export default function ModerationInstructions({ moderations$ }: { moderations$: Promise<ModerationRule[]> }) {
  const t = useTranslations();
  const [selectedRule, setSelectedRule] = useState<ModerationRule>();
  const [selectedTemplates, setSelectedTemplates] = useState<ModerationTemplate[]>([]);

  const handleTemplatesSelection = useCallback((templates: ModerationTemplate[], setValue: any) => {
    setSelectedTemplates(templates);
    setValue('response_template', templates.length ? templates.reverse()[0]?.response_template : '');
  }, []);

  const handleTemplatesUpdates = useCallback(
    (templates: ModerationTemplate, deletedId?: string) => {
      const ModerationTemplate = deletedId
        ? filterArray(selectedRule?.ModerationTemplate || [], deletedId)
        : upsertArrayItem(selectedRule?.ModerationTemplate || [], templates);
      setSelectedRule({ ...selectedRule, ModerationTemplate } as ModerationRule);
    },
    [selectedRule?.ModerationTemplate]
  );

  const handleRuleSelection = useCallback((rule: ModerationRule) => {
    setSelectedRule(rule);
    setSelectedTemplates([]);
  }, []);

  const onModerationSubmit = useCallback(
    async (rule: ModerationRule) => {
      heapAnalytics.trackEvent(HeapTrackEvent.save_moderation, { _value: rule.name } as any);

      return updateModerationRule(rule, false, selectedTemplates);
    },
    [selectedTemplates]
  );

  const templateOptions = useMemo(() => {
    return (
      selectedRule?.ModerationTemplate?.map((template: ModerationTemplate) => ({
        ...template,
        name: template.category,
      })) || []
    );
  }, [selectedRule?.ModerationTemplate]);

  return (
    <>
      <ConfigurationManager<ModerationRule>
        selected={selectedRule}
        items$={moderations$}
        optonLabelProp="name"
        translationKey="Instructions.ModerationRules"
        tooltipKey="Instructions.ModerationRules.customRuleTooltip"
        titleKey="Instructions.ModerationRules.instructionTitle"
        onCreate={createModerationRule}
        onEdit={async (id: string, name: string) => updateModerationRule({ id, name } as ModerationRule, true)}
        onDelete={deleteModerationRule}
        onSubmit={onModerationSubmit}
        onSelectedChanged={handleRuleSelection}
      >
        {({ register, errors, setValue, showSave, isFormDisabled }) => {
          return (
            <>
              <div className="flex flex-col gap-y-5">
                {instructionComponentsConfig.map(({ labelKey, propKey, placeholderKey }, index) => (
                  <div key={`config-${index}`} className="flex flex-col gap-y-2.5">
                    <Input
                      className="gap-y-2"
                      id={`${propKey}-input`}
                      labelKey={labelKey}
                      placeholderKey={placeholderKey}
                      labelClassName="ms-5 text-sm text-storm-gray"
                      inputClassName="bg-transparent"
                      initialValue={selectedRule?.instructions?.[propKey] || ''}
                      {...register(`instructions.${propKey}`)}
                    />
                    {errors?.instructions?.[propKey]?.message && (
                      <p className="text-sm text-salmon">{t(errors.instructions[propKey]?.message)}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-y-5 border-b border-storm-gray pb-5">
                <h4 className="ps-5 text-sm font-bold uppercase text-main">
                  {t('Instructions.ModerationRules.settingsTitle')}
                </h4>

                <p className="-mb-3 ps-5 text-sm font-medium text-storm-gray">
                  {t('Instructions.ModerationRules.settings.severityLabel')}
                </p>
                <Dropdown
                  listClassName="rounded-xl"
                  position={'bottom end'}
                  optionClassName="capitalize"
                  options={severityOptions}
                  selectedOption={selectedRule?.severity as Severity}
                  onSelectedChange={({ value }) => setValue('severity', value)}
                />
                {errors?.severity?.message && <p className="text-sm text-salmon">{t(errors.severity.message)}</p>}
                <p className="-mb-3 ps-5 text-sm font-medium text-storm-gray">
                  {t('Instructions.ModerationRules.settings.categoriesLabel')}
                </p>
              </div>

              <div className="flex min-w-0 flex-grow flex-col gap-x-2 gap-y-5">
                <CustomizableDropdown<ModerationTemplate>
                  disabled={isFormDisabled}
                  selectedValue={selectedTemplates}
                  optonLabelProp="category"
                  editableItems={true}
                  multiselect={true}
                  values={templateOptions}
                  onSelect={(values: ModerationTemplate | ModerationTemplate[], deleted) => {
                    Array.isArray(values)
                      ? handleTemplatesSelection(values as ModerationTemplate[], setValue)
                      : handleTemplatesUpdates(values, deleted);
                  }}
                  translationKey={'Instructions.ModerationRules.settings'}
                  handleCreation={async (category: string) => createModerationTemplate(category, selectedRule?.id)}
                  handleEdit={async (id: string, category: string) =>
                    updateModerationTemplate({ id, category } as ModerationTemplate)
                  }
                  handleDelete={deleteModerationTemplate}
                />
                <InstructionInput
                  errors={errors}
                  name="response_template"
                  className="h-[30svh]"
                  id="system-instructions-input"
                  labelKey="Instructions.ModerationRules.responseTemplateTitle"
                  initialValue={''}
                  topControls={false}
                  showSaveOnChanges={false}
                  showSave={showSave}
                  register={register}
                  disabled={!selectedTemplates.length}
                />
              </div>
            </>
          );
        }}
      </ConfigurationManager>
    </>
  );
}
