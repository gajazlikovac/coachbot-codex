import { getTranslations } from 'next-intl/server';
import { twMerge } from 'tailwind-merge';

import { PrivateRoutes } from '@/lib/constants';
import { getIsAllowedUser } from '@/lib/utils/common.utils';
import { getSessionUser } from '@/server/actions/sessionActions';
import { Button } from '../Button';
import { AsideToggleButton } from '../FunctionalButtons';
import { Logo } from '../Logo';
import { ThemeToggler } from '../ThemeToggler';
import TopNavigation, { NavigationOption } from './TopNavigation';

const getNavigationOptions = (hidden: boolean): NavigationOption[] => [
  {
    id: 'nav-dashboard',
    label: 'General.Header.navigation.3',
    icon: 'cbi-dashboard',
    href: PrivateRoutes.dashboard,
    hidden,
  },
  { id: 'nav-chat', label: 'General.Header.navigation.0', icon: 'cbi-messages', href: PrivateRoutes.chat },
  {
    id: 'nav-instructions',
    label: 'General.Header.navigation.1',
    icon: 'cbi-setting',
    href: PrivateRoutes.instructions,
  },
  { id: 'nav-content', label: 'General.Header.navigation.2', icon: 'cbi-folder-add', href: PrivateRoutes.content },
  {
    id: 'nav-configuration',
    label: 'General.Header.navigation.4',
    icon: 'cbi-folder-add',
    href: PrivateRoutes.configuration,
    hidden,
  },
];

export default async function Header({
  className,
  withAsideToggle = false,
}: {
  className?: string;
  withAsideToggle?: boolean;
}) {
  const [t, userId] = await Promise.all([getTranslations(), getSessionUser()]);
  const isAllowedUser = getIsAllowedUser(userId);

  return (
    <header className={`flex items-center justify-between gap-x-3 py-1.5 xl:gap-x-10 2xl:gap-x-16 ${className ?? ''}`}>
      <div className={'flex w-full items-center gap-x-5'}>
        {withAsideToggle && (
          <AsideToggleButton label={t('General.Header.openSidebarButton')} open={true} id="sidebar-toggle" />
        )}
        <TopNavigation
          className={twMerge(isAllowedUser && 'max-w-3xl flex-nowrap 2xl:max-w-4xl 3xl:max-w-5xl')}
          variant="main"
          navigationOptions={getNavigationOptions(!isAllowedUser)}
        />
      </div>
      <div className="flex shrink-0 items-center gap-x-5">
        <ThemeToggler />
        <Logo />
        <Button
          variant="outline"
          color="darkGray"
          href={PrivateRoutes.account}
          className="cbi-profile-circle px-3 text-xl"
        />
      </div>
    </header>
  );
}
