'use client';

import { ReactNode, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import { PrivateRoutes } from '@/lib/constants';
import ComingSoon from '@/shared/CoomingSoon';
import ContentSidebar from './ContentSidebar';
import TipsSidebar from './TipsSidebar';

const ChatSidebar = dynamic(() => import('./ChatSidebar'));

const sidebarContentMap: Record<string, ReactNode> = {
  [PrivateRoutes.dashboard]: false,
  [PrivateRoutes.chat]: <ChatSidebar />,
  [PrivateRoutes.moderationInstructions]: false,
  [PrivateRoutes.stageInstructions]: (
    <TipsSidebar titleKey="Instructions.Stages.tipsTitle" tipsKey="Instructions.Stages.tips" />
  ),
  [PrivateRoutes.instructions]: (
    <TipsSidebar titleKey="Instructions.tipsTitle" tipsKey="Instructions.systemInstruction.tipsOptions" />
  ),
  [PrivateRoutes.content]: <ContentSidebar />,
  fallback: (
    <h3 className={'text-nowrap pe-14 text-[1.25rem] uppercase text-main'}>
      SIDEBAR <ComingSoon onlyLabel={true} />
    </h3>
  ),
};

export default function LayoutSidebar() {
  const pathname = usePathname();
  const route = useMemo(
    () => Object.keys(sidebarContentMap).find((key) => pathname?.startsWith(key)) || '',
    [pathname]
  );

  return sidebarContentMap[route] || sidebarContentMap['fallback'];
}
