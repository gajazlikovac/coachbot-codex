'use client';

import { useActionState, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Assistant, PriceConfiguration } from '@/lib/models/assistant.models';
import { PriceCurrency } from '@/lib/models/checkout.models';
import { State } from '@/lib/models/common.models';
import { updateAssistantMetaPrice } from '@/server/actions/assistantActions';
import { Button } from '@/shared/Button';
import Checkbox from '@/shared/Checkbox';
import Dropdown, { DropdownOption } from '@/shared/Dropdown';
import { Input } from '@/shared/Input';

export default function PriceForm({ assistant, disabled }: { assistant: Assistant; disabled: boolean }) {
  const t = useTranslations();
  const currencyOptions: DropdownOption<string>[] = Object.entries(
    t.raw('CoachDetails.Config.MonetizationPage.priceForm.curencyOptions')
  ).map(([value, label], id) => ({ id, value, label: label as string }));
  const [currency, setCurrency] = useState(assistant.meta?.price?.currency || PriceCurrency.eur);
  const [state, saveAction, isPending] = useActionState<State<PriceConfiguration | null>, any>(
    async (_: State<PriceConfiguration | null>, formData: FormData) =>
      await updateAssistantMetaPrice(assistant, formData),
    {
      value: (!disabled && assistant.meta?.price) || ({ currency: 'EUR' } as PriceConfiguration),
    }
  );

  return (
    <form className="flex flex-col gap-y-3" action={saveAction}>
      <div
        className={`flex flex-col gap-y-5 rounded-2xl border bg-white-opacity px-3.5 py-6 ${disabled ? 'border-background-border/[11%] opacity-50' : 'border-dark-aquamarine'}`}
      >
        <p className="text-center text-main">{t('CoachDetails.Config.MonetizationPage.priceFormDescription')}</p>

        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="currency" className="ps-3 text-sm font-medium text-light-gray">
            {t('CoachDetails.Config.MonetizationPage.priceForm.currencyLabel')}
          </label>
          <input type="hidden" name="currency" value={currency} />
          <Dropdown
            listClassName="[--anchor-gap:-3rem] rounded-xl"
            selectedOption={currency}
            className={`w-full text-nowrap py-2.5 text-main ${disabled && 'pointer-events-none'}`}
            options={currencyOptions}
            onSelectedChange={({ value }) => setCurrency(value)}
          ></Dropdown>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <p className="flex w-full ps-3 text-sm font-medium text-light-gray">
            {t('CoachDetails.Config.MonetizationPage.priceForm.periodLabel')}
          </p>
          <div className="flex w-[47%] flex-col gap-y-1">
            <label htmlFor="monthly" className="ps-3 text-sm font-medium uppercase text-main">
              {t.rich('CoachDetails.Config.MonetizationPage.priceForm.monthlyInputLabel', {
                addition: (chunk: any) => <span className="font-light normal-case">{chunk}</span>,
              })}
            </label>
            <Input
              disabled={isPending || disabled}
              id="monthly"
              name="monthly"
              type="number"
              step="0.01"
              placeholder="00.00"
              initialValue={state.value?.monthly?.toString() || ''}
              inputClassName={`border-storm-gray placeholder:text-light-gray bg-white-opacity text-base focus:border-main ${disabled && 'animate-none'}`}
            />
          </div>
          <div className="flex w-[47%] flex-col gap-y-1">
            <label htmlFor="monthly" className="ps-3 text-sm font-medium uppercase text-main">
              {t.rich('CoachDetails.Config.MonetizationPage.priceForm.yearlyInputLabel', {
                addition: (chunk: any) => <span className="font-light normal-case text-storm-gray">{chunk}</span>,
              })}
            </label>
            <Input
              disabled={isPending || disabled}
              id="yearly"
              name="yearly"
              type="number"
              step="0.01"
              placeholder="00.00"
              initialValue={state.value?.yearly?.toString() || ''}
              inputClassName={`border-storm-gray placeholder:text-light-gray bg-white-opacity text-base focus:border-main ${disabled && 'animate-none'}`}
            />
          </div>
        </div>
        <Checkbox
          disabled={disabled}
          name="trialDays"
          selected={!!state.value?.trialDays}
          checkboxClassName={'text-main'}
          label={t('CoachDetails.Config.MonetizationPage.priceForm.trialCheckbox')}
          labelClassName="text-base font-medium capitalize text-main"
          className="ms-3 flex items-center ring-main"
        />
        {state.error && <p className="text-sm text-salmon">{t(state.error)}</p>}
      </div>
      <div className="flex flex-grow justify-end gap-x-1">
        {!disabled && (
          <Button variant="solid" color="light" className="w-44 px-7" onClick={() => close()} disabled={isPending}>
            <i className="cbi-tick-circle-fill" />
            {t('General.saveButton')}
          </Button>
        )}
      </div>
    </form>
  );
}
