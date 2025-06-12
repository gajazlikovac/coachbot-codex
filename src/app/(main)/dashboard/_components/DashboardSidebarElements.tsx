'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Period } from '@/lib/models/common.models';
import { RadioGroup } from '@/shared/RadioGroup';

export function TokenUsageCard() {
  const t = useTranslations();

  return (
    <section className="flex min-h-0 min-w-0 flex-col rounded-3xl border border-graphic/[6%] p-1">
      <div className="flex items-center gap-x-1 rounded-3xl bg-graphic/[8%] p-1">
        <div className="flex h-7 flex-grow rounded-full bg-yellow-green-gradient" />
        <p className="inline-flex items-center gap-x-1 px-2 text-base text-dark-aquamarine">
          <span className="text-lg font-medium">600</span>
          {t('Dashboard.tokenCard.usedLabel')}
        </p>
      </div>
      <div className="flex items-center justify-between p-3 text-base text-main">
        <span>{t('Dashboard.tokenCard.tockenUsageLabel')}</span>
        <p>
          <span className="text-2xl font-medium">3800</span> {t('Dashboard.tokenCard.tockenAvailableLabel')}{' '}
        </p>
      </div>
    </section>
  );
}

export const periodOptions = [
  { id: 0, value: Period.allTime, labelKey: 'Dashboard.periodOptions.0' },
  { id: 1, value: Period.last7Days, labelKey: 'Dashboard.periodOptions.1' },
  { id: 2, value: Period.last30Days, labelKey: 'Dashboard.periodOptions.2' },
];

export function PeriodFilter() {
  const [selectedPeriod, setSelectedPeriod] = useState(Period.allTime);

  return (
    <RadioGroup
      options={periodOptions}
      selected={selectedPeriod}
      setSelected={setSelectedPeriod}
      className="w-full gap-x-1"
      variant="white"
    />
  );
}
