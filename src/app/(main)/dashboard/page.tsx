import { getTranslations } from 'next-intl/server';

import { Assistant, AssistantStatus } from '@/lib/models/assistant.models';
import { getAssistants } from '@/server/actions/assistantActions';
import { getUser } from '@/server/actions/userActions';
import ComingSoon from '@/shared/CoomingSoon';
import { AsideToggleButton, NewAssistantButton } from '@/shared/FunctionalButtons';
import { ListSkeleton } from '@/shared/skeletons/ListSkeleton';
import AssistantCard from './_components/AssistantCard';
import AssistantFilter from './_components/AssistantFilter';

export default async function DasboardPage({ searchParams }: { searchParams: Promise<{ status: AssistantStatus }> }) {
  const [t, { status = AssistantStatus.published }, assistants, user] = await Promise.all([
    getTranslations(),
    searchParams,
    getAssistants({ meta: { include: { price: true, feedbacks: true } } }),
    getUser(),
  ]);
  const targetAssistants = assistants.filter((assistant: Assistant) => assistant.status === status);

  return (
    <section className={'flex min-h-0 flex-grow flex-col rounded-xl bg-white/[8%]'}>
      <div className={'flex w-full flex-col gap-y-3 rounded-t-xl border-b border-main bg-white/[10%] px-4 py-3.5'}>
        <ComingSoon className="w-full" />
        <div className="flex items-center justify-between gap-x-10">
          <AsideToggleButton
            label={t('Dashboard.Header.openSidebarButton')}
            closedLabel={t('Dashboard.Header.closedSidebarButton')}
            open={false}
            iconClassName="bg-graphic/[8%] border border-background-border/[16%] px-3 py-2 rounded-lg text-light-gray hover:border-main hover:text-main"
            className="-me-5 text-nowrap border-none bg-transparent p-0 text-sm"
          />
          <div className="flex flex-grow justify-end gap-x-5">
            <AssistantFilter assistants={assistants} selected={status} />
            {!!assistants.length && (
              <NewAssistantButton user={user} assistants={assistants} className="w-max px-3.5 py-2.5" />
            )}
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-grow flex-col gap-y-2.5 overflow-y-auto p-3.5">
        {!!assistants.length ? (
          targetAssistants.length ? (
            targetAssistants.map((assistant: Assistant, index: number) => (
              <AssistantCard key={index} assistant={assistant} />
            ))
          ) : (
            <ListSkeleton className="gap-y-2.5" liClassName="bg-white-opacity min-h-[22rem] rounded-3xl" length={5} />
          )
        ) : (
          <div className="flex flex-col rounded-xl border border-graphic/[6%] bg-white-opacity p-2">
            <NewAssistantButton
              user={user}
              assistants={assistants}
              className="max-h-80 min-h-[25dvh] w-full bg-dark-aquamarine/[11%] text-2xl font-medium hover:bg-background/[70%]"
              labelKey="Dashboard.eptyState.createButton"
              iconClassName="!text-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
