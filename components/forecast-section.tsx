"use client"

import { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, ChartTooltip, Legend, Filler)

// Thai translation for tooltips
const tooltips = {
  line: "แผนภูมิเส้นแสดงการเปรียบเทียบระหว่างค่าจริงและค่าที่ทำนายตลอดเวลา",
  bar: "แผนภูมิแท่งแสดงผลลัพธ์ที่คาดการณ์ตามหมวดหมู่หรือช่วงเวลา",
}

export default function ForecastSection() {
  const [activeTab, setActiveTab] = useState("line")

  // Sample data for forecasting
  const lineData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    datasets: [
      {
        label: "ข้อมูลจริง",
        data: [65, 70, 68, 75, 82, 90, 95, 98, null, null, null, null],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      },
      {
        label: "ค่าพยากรณ์",
        data: [null, null, null, null, null, null, 95, 98, 105, 110, 115, 120],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        borderDash: [5, 5],
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      },
    ],
  }

  const barData = {
    labels: ["สินค้า A", "สินค้า B", "สินค้า C", "สินค้า D", "สินค้า E"],
    datasets: [
      {
        label: "ยอดขายปัจจุบัน (ล้านบาท)",
        data: [12, 19, 8, 15, 10],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "ยอดขายพยากรณ์ (ล้านบาท)",
        data: [15, 22, 10, 18, 14],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (activeTab === "line") {
              const label = context.dataset.label || ""
              const value = context.parsed.y
              return `${label}: ${value} ล้านบาท`
            }
            return context.dataset.label + ": " + context.parsed.y + " ล้านบาท"
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "ยอดขาย (ล้านบาท)",
        },
      },
    },
  }

  return null
}
