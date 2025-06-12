import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { PrivateRoutes } from '@/lib/constants';
import { Assistant } from '@/lib/models/assistant.models';
import { getAssistants } from '@/server/actions/assistantActions';
import { getUser } from '@/server/actions/userActions';
import { getAssistantData } from '@/server/db/assistantClient';
import { AssistantSelectBase } from '@/shared/assistant/AssistantSelect';
import { Button } from '@/shared/Button';
import TopNavigation, { NavigationOption } from '@/shared/layout/TopNavigation';

const getNavigationOptions = (basePath: string): NavigationOption[] => [
  { label: 'CoachDetails.navigationOptions.0', href: basePath },
  { label: 'CoachDetails.navigationOptions.1', href: `${basePath}/users` },
  { label: 'CoachDetails.navigationOptions.2', href: `${basePath}/conversations` },
  // { label: 'CoachDetails.navigationOptions.3', href: `${basePath}/ratings` },
  // { label: 'CoachDetails.navigationOptions.4', href: `${basePath}/revenue` },
];

export default async function Layout({ params, children }: { params: Promise<{ id: string }>; children: ReactNode }) {
  const [{ id }, t, user, assistants] = await Promise.all([params, getTranslations(), getUser(), getAssistants()]);
  const assistant = await getAssistantData(id);

  return (
    <main className="fixed-container flex h-full max-h-dvh min-h-0 p-2.5">
      <div className="flex min-h-0 flex-grow flex-col rounded-xl bg-white/[8%]">
        <div className="relative flex min-h-0 w-full flex-col gap-y-3.5 rounded-t-xl border-b border-main bg-white/[10%] px-7 py-3.5 pb-6">
          <h3 className="inline-flex gap-x-2 ps-2 text-2xl font-bold uppercase text-main">
            {t('CoachDetails.pageTitle')}
          </h3>

          <TopNavigation
            strictEqual={true}
            navigationOptions={getNavigationOptions(`${PrivateRoutes.coach}/${id}`)}
            variant="secondary"
            className="max-w-[55%] flex-nowrap px-0"
            optionClassName="min-w-0"
          />
          <AssistantSelectBase
            className="fixed right-20 top-6 max-h-[95dvh] flex-grow"
            light={true}
            user={user}
            assistants={assistants}
            selectedAssistant={assistant as Assistant}
            updateSelectedAssistant={async ({ id }) => {
              'use server';
              redirect(`${PrivateRoutes.coach}/${id}`);
            }}
          />
          <Button
            variant="solid"
            color="gray"
            href={`${PrivateRoutes.dashboard}?status=${assistant?.status}`}
            className="cbi-close fixed right-6 top-6 aspect-square w-12 shrink-0 px-3 py-0 text-lg text-main"
          />
        </div>
        <section className="flex min-h-0 flex-grow flex-col gap-y-2.5 overflow-y-auto p-3.5">{children}</section>
      </div>
    </main>
  );
}
