import { ReactNode } from 'react';

import { getIsAllowedUser } from '@/lib/utils/common.utils';
import { getSessionUser } from '@/server/actions/sessionActions';
import TopNavigation, { NavigationOption } from '@/shared/layout/TopNavigation';

const getNavigationOptions = (hidden: boolean): NavigationOption[] => [
  { label: 'Instructions.topNavigationOptions.0', href: '/instructions' },
  { label: 'Instructions.topNavigationOptions.1', href: '/instructions/stages' },
  { label: 'Instructions.topNavigationOptions.3', href: '/instructions/tone-of-voice', hidden: true },
  { label: 'Instructions.topNavigationOptions.2', href: '/instructions/moderation', hidden },
];

export default async function InstructionLauoyt({ children }: { children: ReactNode }) {
  const userId = await getSessionUser();
  const isAllowedUser = getIsAllowedUser(userId);

  return (
    <section className="flex min-h-0 flex-grow flex-col rounded-xl bg-white/[8%]">
      <div className="flex w-full flex-col gap-y-3 rounded-t-xl border-b border-main bg-white/[10%] px-7 py-3.5">
        <TopNavigation
          strictEqual={true}
          navigationOptions={getNavigationOptions(!isAllowedUser)}
          variant="secondary"
          className="max-w-80 lg:max-w-[65%]"
          optionClassName="max-w-40 lg:max-w-[unset] lg:min-w-0"
        />
      </div>
      <div className="flex min-h-0 flex-grow flex-col gap-y-2.5 overflow-y-auto p-3.5">{children}</div>
    </section>
  );
}
