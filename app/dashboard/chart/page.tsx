import CardWrapper from "@/app/ui/dashboard/cards";
import LineChart from "@/app/ui/chart/lineChart";
import PieChart from "@/app/ui/chart/PieChart";
import ColumnChart from "@/app/ui/chart/ColumnChart";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Chart Test
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <ColumnChart />
        </Suspense>

        <Suspense fallback={<RevenueChartSkeleton />}>
          <LineChart />
        </Suspense>

        <Suspense fallback={<RevenueChartSkeleton />}>
          <PieChart />
        </Suspense>
      </div>
    </main>
  );
}
