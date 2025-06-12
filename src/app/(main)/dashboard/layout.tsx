import { ReactNode } from 'react';

import { WithSidebarLayout } from '@/shared/Layout';
import Sidebar from '@/shared/Sidebar';
import DashboardSidebar from './_components/DashboardSidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <WithSidebarLayout
      sidebar={
        <Sidebar
          openClassName="w-full p-0 hide-toggle me-3 min-w-[22rem]"
          className="max-w-[30%] shrink flex-grow bg-transparent"
        >
          <DashboardSidebar />
        </Sidebar>
      }
    >
      {children}
    </WithSidebarLayout>
  );
}
