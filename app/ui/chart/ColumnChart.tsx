"use client";
import React, { useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { lusitana } from "@/app/ui/fonts";

export default function ColumnChart() {
  const currentDate = new Date();
  const actualYValues = [150, 50, 20, 10, 21, 123, 11, 50]; // Replace with your actual y values
  const seriesData = [];

  for (let i = 0; i < 8; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);

    const formattedDate = nextDate.toLocaleDateString();

    seriesData.push({
      name: formattedDate,
      y: actualYValues[i],
    });
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      align: "left",
      text: "New Users",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
      categories: [
        "7 days ago",
        "6 days ago",
        "5 days ago",
        "4 days ago",
        "3 days ago",
        "2 days ago",
        "1 days ago",
        "Today",
      ],
    },
    yAxis: {
      title: {
        text: "Number of New Users",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> new users<br/>',
    },
    series: [
      {
        name: "New Users",
        colorByPoint: true,
        data: seriesData,
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
      series: [
        // Add drilldown data as needed
      ],
    },
  };

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        ColumnChart
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className=" bg-white ">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}
