"use client";
import React, { useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { lusitana } from "@/app/ui/fonts";

export default function LineChart() {
  const options = {
    title: {
      text: "Total Users",
      align: "left",
    },
    subtitle: {
      text: "Total Users",
      align: "left",
    },
    yAxis: {
      title: {
        // text: "Number of Employees",
      },
    },
    xAxis: {
      type: "category",
      title: {
        text: "Month",
      },
      accessibility: {
        rangeDescription: "Range: January to December",
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        name: "2023 Total Users",
        data: [
          132014, 134961, 102917, 113897, 166517, 209858, 254622, 243286,
          238283, 245844, 206853, 187309,
        ],
      },
      {
        name: "2022 Total Users",
        data: [
          110802, 119961, 90914, 99847, 147179, 186258, 225905, 214355, 205069,
          209112, 187768, 178943,
        ],
      },
      {
        name: "2021 Total Users",
        data: [
          90000, 95000, 100000, 105000, 110000, 115000, 120000, 125000, 130000,
          135000, 140000, 145000,
        ],
      },
      {
        name: "2020 Total Users",
        data: [
          80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000,
          125000, 130000, 135000,
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        LineChart
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className=" bg-white ">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}
