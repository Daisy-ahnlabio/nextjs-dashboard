"use client";
import React, { useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { lusitana } from "@/app/ui/fonts";

export default function ColumnChart() {
  // 최근 7일간의 유저 수 데이터
  var data = [];
  var today = new Date();
  for (var i = 0; i < 7; i++) {
    var date = new Date(today);
    date.setDate(today.getDate() - i);
    var dateString = formatDate(date);
    data.push([dateString, getRandomNumber(100, 500)]);
  }

  // 날짜 포맷 변환 함수
  function formatDate(date: Date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  // 랜덤 숫자 생성 함수
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "7일 동안의 유저 수",
    },
    subtitle: {
      text: "Source: Your Data",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "유저 수",
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: "유저 수: <b>{point.y}</b>",
    },
    series: [
      {
        name: "유저 수",
        colors: [
          "#9b20d9",
          "#9215ac",
          "#861ec9",
          "#7a17e6",
          "#7010f9",
          "#691af3",
          "#6225ed",
          "#5b30e7",
          "#533be1",
          "#4c46db",
          "#4551d5",
          "#3e5ccf",
          "#3667c9",
          "#2f72c3",
          "#277dbd",
          "#1f88b7",
          "#1693b1",
          "#0a9eaa",
          "#03c69b",
          "#00f194",
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // 정수 형식으로 표시
          y: 10, // 상단으로부터 10px 아래로
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
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
