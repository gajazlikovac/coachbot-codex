'use client';

import { useTranslations } from 'next-intl';

import { Assistant, AssistantStatus } from '@/lib/models/assistant.models';
import { Template } from '@/lib/models/common.models';
import { createCopyAssistant, deleteAssistant, upsertAssistant } from '@/server/actions/assistantActions';
import { DropdownMenu, MenuOption } from '@/shared/DropdownMenu';
import { ExportAssistantButton } from '@/shared/FunctionalButtons';
import { DeleteWithConfirmationButton } from '@/shared/ModalButtons';

const modalConfig = {
  buttonTitleKey: 'Assistants.deleteModal.deleteButton',
  buttonIcon: 'cbi-trash',
  titleIcon: 'cbi-send',
  titleKey: 'Assistants.deleteModal.title',
  variant: 'red',
};

const getMenuOptions = (assistant: Assistant, t: any): (MenuOption & { allowedStatuses?: AssistantStatus[] })[] =>
  [
    {
      icon: 'cbi-export',
      label: t('Dashboard.assistantCard.menuItems.0'),
      subTitle: t('Dashboard.assistantCard.menuItems.1'),
      className: 'text-dark-aquamarine',
      divider: true,
      onClick: async () =>
        await upsertAssistant(
          { ...assistant, template: {} as Template, status: AssistantStatus.published },
          assistant.id
        ),
      allowedStatuses: [AssistantStatus.draft],
    },
    {
      icon: 'cbi-scroll',
      label: t('Dashboard.assistantCard.menuItems.2'),
      subTitle: t('Dashboard.assistantCard.menuItems.3'),
      inDevelompent: true,
      divider: true,
      className: 'text-yellow',
      onClick: () => console.log('Integrate item clicked'),
      allowedStatuses: [AssistantStatus.draft],
    },
    {
      icon: 'cbi-export',
      label: t('Dashboard.assistantCard.menuItems.8'),
      divider: true,
      onClick: async () =>
        await upsertAssistant({ ...assistant, template: {} as Template, status: AssistantStatus.draft }, assistant.id),
      allowedStatuses: [AssistantStatus.published, AssistantStatus.archived],
    },
    {
      icon: 'cbi-copy',
      label: t('Dashboard.assistantCard.menuItems.4'),
      onClick: async () => await createCopyAssistant(assistant),
      allowedStatuses: [AssistantStatus.archived, AssistantStatus.draft],
    },
    {
      children: (close: any) => {
        return (
          <div onClick={(e) => e.stopPropagation()}>
            <ExportAssistantButton
              assistant={assistant}
              callback={close}
              className="border-none p-1.5 text-base font-semibold text-light-gray hover:text-main"
              iconClassName="!text-xl"
            />
          </div>
        );
      },
    },
    {
      icon: 'cbi-archive',
      label: t('Dashboard.assistantCard.menuItems.6'),
      onClick: async () =>
        await upsertAssistant(
          { ...assistant, template: {} as Template, status: AssistantStatus.archived },
          assistant.id
        ),
      allowedStatuses: [AssistantStatus.published, AssistantStatus.draft],
    },
    {
      children: (close: () => any) => (
        <div onClick={(e) => e.stopPropagation()}>
          <DeleteWithConfirmationButton
            buttonText={t('Dashboard.assistantCard.menuItems.7')}
            iconClassName="cbi-trash !text-xl"
            className={'border-none p-1.5 font-semibold text-salmon hover:text-main'}
            config={{
              ...modalConfig,
              confirm: async () => {
                await deleteAssistant(assistant?.id);
                close();
              },
            }}
          >
            <p className="text-light-gray">{t(`Assistants.deleteModal.content`, { name: assistant?.name })}</p>
          </DeleteWithConfirmationButton>
        </div>
      ),
    },
  ].filter(({ allowedStatuses }) => !allowedStatuses || allowedStatuses.includes(assistant.status as AssistantStatus));

export default function AssistantMenu({ assistant }: { assistant: Assistant }) {
  const t = useTranslations();

  return (
    <DropdownMenu
      options={getMenuOptions(assistant, t)}
      menuBtnIcon="cbi-more"
      menuBtnClass="aspect-square border border-graphic/[14%] text-xl text-light-gray hover:border-main data-[hover]:text-main"
      menuItemsClass="min-w-60"
    />
  );
}
