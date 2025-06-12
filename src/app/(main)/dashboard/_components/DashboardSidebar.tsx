import { PeriodFilter, TokenUsageCard } from './DashboardSidebarElements';
import { SidebarStatisticCard } from './StatisticCards';

const statisticsCardsData = [
  { id: '1', icon: 'cbi-cpu', titleKey: 'Dashboard.statisticsCard.0', value: 4 },
  { id: '2', icon: 'cbi-message-text', titleKey: 'Dashboard.statisticsCard.1', value: 2268 },
  { id: '3', icon: 'cbi-user', titleKey: 'Dashboard.statisticsCard.2', value: 168 },
  { id: '4', icon: 'cbi-card-pos', titleKey: 'Dashboard.statisticsCard.3', value: 0, disabled: true },
];

export default function DashboardSidebar() {
  return (
    <section className="overflow-hiddenflex relative flex min-w-0 max-w-lg shrink-0 flex-grow flex-col gap-y-3 overflow-y-auto">
      <TokenUsageCard />
      <PeriodFilter />
      <div className="flex min-w-0 flex-grow flex-wrap content-start gap-1 overflow-y-auto">
        {statisticsCardsData.map((card: any, index: number) => (
          <SidebarStatisticCard
            key={`sidebar-${index}`}
            {...card}
            className="h-auto shrink-0 flex-grow basis-[49%] gap-y-16 2xl:gap-y-20"
          />
        ))}
      </div>
    </section>
  );
}
