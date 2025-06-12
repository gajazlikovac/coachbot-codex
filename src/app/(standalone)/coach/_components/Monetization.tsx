import { useTranslations } from 'next-intl';

import { AccessLevel, Assistant } from '@/lib/models/assistant.models';
import PriceForm from './PriceForm';

export default function Monetization({ assistant }: { assistant: Assistant }) {
  const t = useTranslations();
  const isPremium = assistant.meta?.accessLevel === AccessLevel.premium;

  return (
    <div className="flex flex-grow flex-col gap-y-6">
      <h5
        className={`inline-flex items-center justify-center gap-x-2 text-center text-2xl font-bold uppercase leading-3 ${isPremium ? 'text-main' : 'text-light-gray'}`}
      >
        <span className={`${isPremium ? 'cbi-card-tick' : 'cbi-empty-wallet-remove'} text-3xl leading-3`} />

        {t(
          isPremium
            ? 'CoachDetails.Config.MonetizationPage.enabledTitle'
            : 'CoachDetails.Config.MonetizationPage.disabledTitle'
        )}
      </h5>
      <p className="text-center text-light-gray">
        {t(
          isPremium
            ? 'CoachDetails.Config.MonetizationPage.enabledDescription'
            : 'CoachDetails.Config.MonetizationPage.disabledDescription'
        )}
      </p>
      <PriceForm assistant={assistant} disabled={!isPremium} />
    </div>
  );
}
