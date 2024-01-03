"use client";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { lusitana } from "@/app/ui/fonts";

export default function PieChart() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Top 10 API Calls",
    },
    tooltip: {
      valueSuffix: "%",
    },
    subtitle: {
      text: "",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          distance: 20,
          format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 5,
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "Water",
            y: 55.02,
          },
          {
            name: "Fat",
            sliced: true,
            selected: true,
            y: 26.71,
          },
          {
            name: "Carbohydrates",
            y: 1.09,
          },
          {
            name: "Protein",
            y: 15.5,
          },
          {
            name: "Ash",
            y: 1.68,
          },
          {
            name: "Fiber",
            y: 0.5,
          },
          {
            name: "Vitamins",
            y: 0.3,
          },
          {
            name: "Minerals",
            y: 0.2,
          },
          {
            name: "Other",
            y: 0.1,
          },
          {
            name: "Unknown",
            y: 0.01,
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        PieChart
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="bg-white">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}
