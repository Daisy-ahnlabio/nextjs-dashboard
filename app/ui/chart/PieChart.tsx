"use client";
import React, { useEffect, useRef, useState } from "react";
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
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
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
        <div className=" bg-white ">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}
