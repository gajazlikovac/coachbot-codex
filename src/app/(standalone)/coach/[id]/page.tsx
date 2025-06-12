import { redirect } from 'next/navigation';

import { PrivateRoutes } from '@/lib/constants';
import { Assistant, Visibility } from '@/lib/models/assistant.models';
import { updateAssistantMetaData } from '@/server/actions/assistantActions';
import { getAssistantData } from '@/server/db/assistantClient';
import Tabs, { TabOption } from '@/shared/Tabs';
import { ConfigTabItem } from '../_components/ConfigTabItem';
import GoalVision from '../_components/GoalVision/GoalVision';
import Integration from '../_components/Integration';
import MarketplaceListing from '../_components/MarketplaceListing';
import Profile from '../_components/Profile';
import TranscriptSharing from '../_components/TranscriptSharing';

export enum ConfigTab {
  profile = 'profile',
  transcript = 'transcript',
  marketplace = 'marketplace',
  integration = 'integration',
  goalVision = 'goal-vision',
  goalTrack = 'goal-track',
}

const getTabsOptions = (assistant: Assistant): TabOption[] => [
  {
    name: ConfigTab.profile,
    nameKey: 'CoachDetails.Config.sidebarOptions.0.title',
    content: <Profile assistant={assistant} />,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-cpu"
        nameKey="CoachDetails.Config.sidebarOptions.0.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.0.description"
      />
    ),
  },
  {
    name: ConfigTab.transcript,
    nameKey: 'CoachDetails.Config.sidebarOptions.1.title',
    content: <TranscriptSharing assistant={assistant} />,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-share1"
        nameKey="CoachDetails.Config.sidebarOptions.1.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.0.description"
      />
    ),
  },
  {
    name: ConfigTab.marketplace,
    nameKey: 'CoachDetails.Config.sidebarOptions.2.title',
    content: <MarketplaceListing assistant={assistant} />,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-unlock"
        nameKey="CoachDetails.Config.sidebarOptions.2.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.1.description"
        checked={assistant?.meta?.visibility === Visibility.private}
        onToggle={async (on: boolean) => {
          'use server';
          await updateAssistantMetaData(assistant.id, { visibility: on ? Visibility.private : Visibility.public });
        }}
      />
    ),
  },
  {
    name: ConfigTab.integration,
    nameKey: 'CoachDetails.Config.sidebarOptions.3.title',
    content: <Integration assistant={assistant} />,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-whatsapp"
        iconPaths={4}
        nameKey="CoachDetails.Config.sidebarOptions.3.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.3.description"
        checked={!!assistant?.meta?.whatsapp}
        onToggle={async (whatsapp: boolean) => {
          'use server';
          await updateAssistantMetaData(assistant.id, { whatsapp });
        }}
      />
    ),
  },
  {
    name: ConfigTab.goalVision,
    className: 'flex flex-grow',
    nameKey: 'CoachDetails.Config.sidebarOptions.4.title',
    content: <GoalVision assistant={assistant} />,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-chart"
        nameKey="CoachDetails.Config.sidebarOptions.4.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.4.description"
        onToggle={async () => {
          'use server';
          console.log('goal vision');
        }}
      />
    ),
  },
  {
    name: ConfigTab.goalTrack,
    nameKey: 'CoachDetails.Config.sidebarOptions.5.title',
    content: <div> Page: goal track</div>,
    listItemContent: (
      <ConfigTabItem
        iconClass="cbi-health"
        nameKey="CoachDetails.Config.sidebarOptions.5.title"
        descriptionKey="CoachDetails.Config.sidebarOptions.5.description"
        onToggle={async () => {
          'use server';
          console.log('goal track');
        }}
      />
    ),
  },
];

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab: string }>;
}) {
  const [{ id }, { tab }] = await Promise.all([params, searchParams]);
  const assistant = await getAssistantData(id, {
    template: true,
    meta: { include: { price: true, feedbacks: true } },
  });

  if (!assistant) {
    redirect(PrivateRoutes.dashboard);
  }

  return (
    <Tabs
      id={`coach-config-tab-${id}`}
      initialTabName={tab}
      className="flex-row flex-nowrap gap-x-7"
      listClassName="flex-col gap-y-2.5 max-w-[40%] bg-graphic/[14%] rounded-xl p-3.5 shrink-0 overflow-y-auto overflow-x-hidden"
      panelClassName="flex flex-col p-2 overflow-y-auto overflow-x-hidden"
      tabClassName="flex-none border border-transparent data-[hover]:bg-white-opacity data-[hover]:data-[selected]:border-main data-[hover]:data-[selected]:bg-white-opacity data-[selected]:bg-transparent data-[selected]:border-main"
      tabs={getTabsOptions(assistant as Assistant)}
    />
  );
}
