import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { ConfigTab } from '@/app/(standalone)/coach/[id]/page';
import { PrivateRoutes } from '@/lib/constants';
import {
  AccessLevel,
  Assistant,
  AssistantFeedback,
  AssistantMeta,
  AssistantStatus,
  Visibility,
} from '@/lib/models/assistant.models';
import { getFomatedDate } from '@/lib/utils/date.utils';
import { Button } from '@/shared/Button';
import { Chip } from '@/shared/Chip';
import { CopyToClipboardButton } from '@/shared/FunctionalButtons';
import { ModalButton } from '@/shared/ModalButtons';
import AssistantMenu from './AssistantMenu';
import ShareModalContent from './ShareModal';
import { AssistantStatisticCard } from './StatisticCards';

const getAssistantInfoCards = (
  { price, visibility, accessLevel, feedbacks = [] }: AssistantMeta = {} as AssistantMeta
) => {
  return [
    {
      icon: 'cbi-user',
      titleKey: 'Dashboard.assistantCard.data.1',
      value: (Math.random() * 100).toFixed(0),
      href: '/users',
    },
    {
      icon: 'cbi-message-text',
      titleKey: 'Dashboard.assistantCard.data.0',
      value: (Math.random() * 1000).toFixed(0),
      href: '/conversations',
      className: 'text-blue bg-blue/[11%] hover:border-blue',
    },
    {
      icon: 'cbi-star',
      titleKey: 'Dashboard.assistantCard.data.2',
      className: 'bg-yellow/[11%] text-yellow hover:border-yellow',
      value: feedbacks?.reduce((total: number, { rating }: AssistantFeedback) => total + rating, 0).toFixed(1),
      titleValue: feedbacks.length > 0 ? `(${feedbacks.length})` : '',
      titleValueClass: 'text-yellow text-xl leading-6',
      isVisible: visibility === Visibility.public,
      href: '/ratings',
    },
    {
      icon: 'cbi-receipt',
      titleKey: 'Dashboard.assistantCard.data.3',
      className: 'bg-dark-aquamarine/[11%] text-dark-aquamarine hover:border-dark-aquamarine',
      value: `${price?.currency || '€'} ${(price?.amount || 0).toFixed(2)}`,
      isVisible: accessLevel === AccessLevel.premium,
      href: '?tab=monetization',
    },
  ];
};

const chipVariant: Record<AssistantStatus, any> = {
  [AssistantStatus.published]: 'aquamarine',
  [AssistantStatus.draft]: 'white',
  [AssistantStatus.archived]: 'gray',
};

export default function AssistantCard({ assistant }: { assistant: Assistant }) {
  const t = useTranslations();
  const locale = useLocale();
  const configPath = `${PrivateRoutes.coach}/${assistant.id}`;

  return (
    <section className="flex min-w-0 flex-col gap-y-4 rounded-3xl border border-graphic/[6%] bg-white-opacity p-3.5 hover:border-main">
      <div className="flex items-center justify-between gap-x-10">
        <div className="flex items-center justify-start gap-x-2">
          {assistant.status && (
            <Chip
              size="md"
              variant={chipVariant[assistant.status as AssistantStatus]}
              text={assistant.status}
              textClassName="capitalize"
            />
          )}
          <Chip size="md" variant="graphic" text={t('Dashboard.assistantCard.transcriptSharingLabel')}>
            <span className="ms-1 font-bold capitalize text-main">{assistant.mode}</span>
          </Chip>
        </div>
        <div className="flex gap-x-1 self-end">
          <Button
            className="cbi-config aspect-square rounded-md border-graphic/[14%] px-3 py-1.5 text-light-gray hover:border-main data-[hover]:text-main"
            href={`${PrivateRoutes.coach}/${assistant.id}`}
          />
          <AssistantMenu assistant={assistant} />
          {assistant.status === AssistantStatus.published && (
            <ModalButton
              config={{
                variant: 'white',
                titleKey: 'Common.shareModal.title',
                titleIcon: 'cbi-share text-background !text-sm bg-main rounded-md px-0.5',
                titleClass: 'text-main justify-center items-cenetr text-center',
              }}
              className="cbi-share aspect-square border-graphic/[6%] p-1 px-3 text-light-gray hover:border-main hover:text-main"
            >
              <ShareModalContent id={assistant.id} />
            </ModalButton>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-x-4 border-b border-storm-gray pb-3.5">
        <Link href={`${configPath}?tab=${ConfigTab.marketplace}`}>
          <Chip
            size="md"
            variant="transparent"
            textClassName="rounded-lg border-yellow text-light-gray hover:bg-yellow/[11%]"
            text={t('Dashboard.assistantCard.visibilityLabel')}
          >
            <span className="ms-1 font-bold capitalize text-main">{assistant.meta?.visibility}</span>
          </Chip>
        </Link>
        {assistant.status !== AssistantStatus.archived && assistant.meta?.visibility === Visibility.private && (
          <CopyToClipboardButton
            icon="hidden"
            className="-ms-2 h-fit rounded-xl bg-yellow/[14%] px-3.5 py-1.5"
            searchParams={`cbsas=${assistant.id}`}
            tooltipKey={'General.shareLinkSuccess'}
            titileKey="Dashboard.assistantCard.configPanel.copyLinkButton"
          />
        )}
        {/* <Link href={`${configPath}?tab=${ConfigTab.monetization}`}> */}
        <Chip
          size="md"
          variant="transparent"
          text={t('Dashboard.assistantCard.accessLevelLabel')}
          textClassName="rounded-lg border-dark-aquamarine text-light-gray"
        >
          <span className="ms-1 font-bold capitalize text-main">{assistant.meta?.accessLevel}</span>
        </Chip>
        {/* </Link> */}
        <div className="ms-auto text-light-gray">
          {t('Dashboard.assistantCard.lastUpdatedLabel')} &nbsp;
          <span className="text-main">
            {getFomatedDate(assistant.updated_at || assistant.created_at || new Date(), locale, { dateStyle: 'long' })}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 ps-3">
        <h3 className="inline-flex items-center gap-x-2 text-[2.125rem] font-medium text-main">
          {assistant.name}
          {assistant.status !== AssistantStatus.archived && (
            <Button
              className="cbi-edit-2 aspect-square border-storm-gray p-1 px-2 text-light-gray hover:border-main hover:text-main"
              href={`/create-agent?id=${assistant.id}`}
            />
          )}
        </h3>
      </div>

      <div className="flex gap-x-1">
        {getAssistantInfoCards(assistant.meta).map((data, index) => (
          <AssistantStatisticCard key={`assistant-card-${index}`} basePath={configPath} {...data} />
        ))}
      </div>
    </section>
  );
}
