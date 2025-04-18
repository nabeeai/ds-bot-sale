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
  ArcElement,
  RadialLinearScale,
} from "chart.js"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  ChartTooltip,
  Legend,
)

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState("scatter")

  // Sample data for customer segments dashboard
  const scatterData = {
    datasets: [
      {
        label: "กลุ่มที่ 1: ลูกค้าอายุน้อย ใช้จ่ายสูง",
        data: Array.from({ length: 20 }, () => ({
          x: 20 + Math.random() * 15,
          y: 70 + Math.random() * 20,
        })),
        backgroundColor: "rgba(0, 191, 255, 0.6)",
      },
      {
        label: "กลุ่มที่ 2: ลูกค้าอายุมาก ใช้จ่ายสูง",
        data: Array.from({ length: 20 }, () => ({
          x: 45 + Math.random() * 20,
          y: 65 + Math.random() * 25,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "กลุ่มที่ 3: ลูกค้าอายุน้อย ใช้จ่ายต่ำ",
        data: Array.from({ length: 20 }, () => ({
          x: 20 + Math.random() * 15,
          y: 20 + Math.random() * 30,
        })),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "กลุ่มที่ 4: ลูกค้าอายุมาก ใช้จ่ายต่ำ",
        data: Array.from({ length: 20 }, () => ({
          x: 45 + Math.random() * 20,
          y: 15 + Math.random() * 35,
        })),
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  }

  const barData = {
    labels: ["กลุ่มที่ 1", "กลุ่มที่ 2", "กลุ่มที่ 3", "กลุ่มที่ 4"],
    datasets: [
      {
        label: "จำนวนลูกค้า",
        data: [120, 85, 95, 70],
        backgroundColor: [
          "rgba(0, 191, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const pieData = {
    labels: ["กรุงเทพฯ", "เชียงใหม่", "ภูเก็ต", "ขอนแก่น", "อื่นๆ"],
    datasets: [
      {
        data: [45, 20, 15, 10, 10],
        backgroundColor: [
          "rgba(0, 191, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const polarData = {
    labels: ["เสื้อผ้า", "อิเล็กทรอนิกส์", "อาหาร", "เครื่องสำอาง", "เฟอร์นิเจอร์"],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "rgba(0, 191, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
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
            if (activeTab === "scatter") {
              return `${context.dataset.label}: อายุ ${context.parsed.x.toFixed(0)} ปี, คะแนนการใช้จ่าย ${context.parsed.y.toFixed(0)}`
            } else if (activeTab === "pie" || activeTab === "polar") {
              return `${context.label}: ${context.parsed}%`
            }
            return context.dataset.label + ": " + context.parsed.y
          },
        },
      },
    },
    scales:
      activeTab === "scatter"
        ? {
            x: {
              title: {
                display: true,
                text: "อายุ (ปี)",
              },
            },
            y: {
              title: {
                display: true,
                text: "คะแนนการใช้จ่าย",
              },
            },
          }
        : activeTab === "pie" || activeTab === "polar"
          ? {}
          : undefined,
  }

  return null
}
