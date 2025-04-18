"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, Clock, DollarSign, ThumbsUp } from "lucide-react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { Line, Doughnut } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export default function ResultsDashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("fuel")
  const [timeRange, setTimeRange] = useState("6m")

  // Sample data for fuel cost
  const fuelData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [3200000, 3150000, 3250000, 3180000, 3220000, 3190000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "หลังปรับปรุง",
        data: [3200000, 2950000, 2650000, 2380000, 2320000, 2290000],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for delivery time
  const timeData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [85, 87, 84, 86, 85, 88],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "หลังปรับปรุง",
        data: [85, 75, 65, 60, 55, 55],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for customer satisfaction
  const satisfactionData = {
    labels: ["ไม่พอใจ", "พอใจน้อย", "พอใจปานกลาง", "พอใจมาก", "พอใจมากที่สุด"],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [15, 25, 35, 20, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "หลังปรับปรุง",
        data: [5, 10, 25, 35, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
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
            if (activeTab === "fuel") {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} บาท`
            } else if (activeTab === "time") {
              return `${context.dataset.label}: ${context.parsed.y} นาที`
            } else if (activeTab === "satisfaction") {
              return `${context.dataset.label}: ${context.parsed.y}%`
            }
            return context.dataset.label + ": " + context.parsed.y
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => {
            if (activeTab === "fuel") {
              return value.toLocaleString() + " บาท"
            } else if (activeTab === "time") {
              return value + " นาที"
            } else {
              return value + "%"
            }
          },
        },
      },
    },
  }

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard & ผลลัพธ์</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ดูผลลัพธ์ของการใช้วิทยาศาสตร์ข้อมูลในการปรับปรุงเส้นทางการขนส่ง ซึ่งช่วยลดค่าน้ำมันและเวลาจัดส่งได้อย่างมีนัยสำคัญ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-cyan-500" />
                  ลดค่าน้ำมัน
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">-28%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">-900,000 บาท/เดือน</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-cyan-500" />
                  ลดเวลาจัดส่ง
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">-35%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">
                    จาก 85 นาที เหลือ 55 นาที
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-2 text-cyan-500" />
                  เพิ่มความพึงพอใจลูกค้า
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+22%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">จาก 65% เป็น 87%</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ผลลัพธ์การปรับปรุง</CardTitle>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="เลือกช่วงเวลา" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3m">3 เดือนที่ผ่านมา</SelectItem>
                      <SelectItem value="6m">6 เดือนที่ผ่านมา</SelectItem>
                      <SelectItem value="1y">1 ปีที่ผ่านมา</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="fuel" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="fuel">ค่าน้ำมัน</TabsTrigger>
                  <TabsTrigger value="time">เวลาจัดส่ง</TabsTrigger>
                  <TabsTrigger value="satisfaction">ความพึงพอใจลูกค้า</TabsTrigger>
                </TabsList>
                <div className="h-[400px]">
                  <TabsContent value="fuel" className="h-full">
                    <Line data={fuelData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="time" className="h-full">
                    <Line data={timeData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="satisfaction" className="h-full">
                    <div className="flex justify-center h-full">
                      <div className="w-[500px]">
                        <Doughnut
                          data={{
                            ...satisfactionData,
                            datasets: [satisfactionData.datasets[1]],
                          }}
                          options={{ ...options, maintainAspectRatio: false }}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-white p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ผลประโยชน์ทางธุรกิจ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cyan-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <DollarSign className="h-4 w-4" />
                </div>
                <h4 className="font-medium">ประหยัดต้นทุน</h4>
              </div>
              <p className="text-gray-600 text-sm">
                ลดค่าน้ำมันลง 28% และลดจำนวนรถที่ใช้ลง 24% ช่วยประหยัดค่าใช้จ่ายได้กว่า 15 ล้านบาทต่อปี
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4" />
                </div>
                <h4 className="font-medium">เพิ่มประสิทธิภาพ</h4>
              </div>
              <p className="text-gray-600 text-sm">
                ลดเวลาจัดส่งลง 35% ทำให้สามารถรองรับปริมาณงานได้มากขึ้น และลดความล่าช้าในการจัดส่งลง 65%
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <ThumbsUp className="h-4 w-4" />
                </div>
                <h4 className="font-medium">เพิ่มความพึงพอใจ</h4>
              </div>
              <p className="text-gray-600 text-sm">
                เพิ่มความพึงพอใจของลูกค้าขึ้น 22% ช่วยรักษาฐานลูกค้าเดิมและเพิ่มโอกาสในการขยายฐานลูกค้าใหม่
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
