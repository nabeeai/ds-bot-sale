"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react"
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
} from "chart.js"
import { Bar, Line } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export default function TimeAnalysisSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("delivery-time")

  // Sample data for delivery time
  const deliveryTimeData = {
    labels: ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [45, 60, 75, 90, 85, 95, 110, 80],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "หลังปรับปรุง",
        data: [30, 40, 50, 55, 50, 60, 65, 45],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for delay factors
  const delayFactorsData = {
    labels: ["การจราจรติดขัด", "เส้นทางไม่เหมาะสม", "การรอคิวส่งของ", "ปัญหาเอกสาร", "สภาพอากาศ", "อื่นๆ"],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [35, 25, 15, 10, 8, 7],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "หลังปรับปรุง",
        data: [15, 8, 10, 5, 8, 4],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
    ],
  }

  // Sample data for time efficiency
  const timeEfficiencyData = {
    labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
    datasets: [
      {
        label: "ก่อนปรับปรุง",
        data: [65, 70, 68, 72, 75, 60, 55],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "หลังปรับปรุง",
        data: [85, 88, 90, 87, 92, 80, 75],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
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
            if (activeTab === "delivery-time") {
              return `${context.dataset.label}: ${context.parsed.y} นาที`
            } else if (activeTab === "delay-factors") {
              return `${context.dataset.label}: ${context.parsed.y}%`
            } else if (activeTab === "time-efficiency") {
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
            if (activeTab === "delivery-time") {
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
    <section className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">การวิเคราะห์เวลา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราวิเคราะห์เวลาจัดส่งในแต่ละช่วงเวลาและเส้นทาง เพื่อระบุปัจจัยที่ส่งผลต่อความล่าช้าและหาวิธีแก้ไข
            ช่วยลดเวลาจัดส่งและเพิ่มความพึงพอใจของลูกค้า
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>การวิเคราะห์เวลาจัดส่ง</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="delivery-time" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="delivery-time">เวลาจัดส่งตามช่วงเวลา</TabsTrigger>
                  <TabsTrigger value="delay-factors">ปัจจัยที่ทำให้เกิดความล่าช้า</TabsTrigger>
                  <TabsTrigger value="time-efficiency">ประสิทธิภาพการใช้เวลา</TabsTrigger>
                </TabsList>

                <div className="h-[400px]">
                  <TabsContent value="delivery-time" className="h-full">
                    <Line data={deliveryTimeData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="delay-factors" className="h-full">
                    <Bar data={delayFactorsData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="time-efficiency" className="h-full">
                    <Line data={timeEfficiencyData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>ปัญหาที่พบและวิธีแก้ไข</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">ช่วงเวลาที่มีการจราจรหนาแน่น</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      เวลาจัดส่งเพิ่มขึ้นอย่างมีนัยสำคัญในช่วงเวลาเร่งด่วน (7:00-9:00 น. และ 16:00-19:00 น.)
                    </p>
                    <div className="mt-2 bg-green-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-800">วิธีแก้ไข</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 ml-6">
                        ปรับเวลาจัดส่งให้หลีกเลี่ยงช่วงเวลาเร่งด่วน และใช้เส้นทางสำรองที่มีการจราจรน้อยกว่า
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">การรอคิวส่งของที่จุดจัดส่ง</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      พนักงานต้องรอคิวนานที่จุดจัดส่งบางแห่ง โดยเฉพาะในช่วงเวลาที่มีการจัดส่งพร้อมกันหลายราย
                    </p>
                    <div className="mt-2 bg-green-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-800">วิธีแก้ไข</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 ml-6">
                        จัดตารางเวลาจัดส่งให้กระจายตัว และประสานงานล่วงหน้ากับจุดจัดส่งที่มีปริมาณงานสูง
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">เส้นทางไม่เหมาะสม</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      เส้นทางการจัดส่งไม่ได้คำนึงถึงปัจจัยด้านเวลา ทำให้พนักงานต้องเดินทางในช่วงเวลาที่มีการจราจรหนาแน่น
                    </p>
                    <div className="mt-2 bg-green-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-800">วิธีแก้ไข</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 ml-6">
                        ใช้ข้อมูลการจราจรแบบเรียลไทม์ในการวางแผนเส้นทาง และปรับเปลี่ยนเส้นทางตามสภาพการจราจร
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ผลลัพธ์จากการปรับปรุง</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-cyan-500 mr-2" />
                    <h3 className="font-medium text-gray-800">ลดเวลาจัดส่งเฉลี่ย</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-cyan-600">-35%</div>
                    <div className="text-sm text-gray-600">จาก 85 นาที เหลือ 55 นาที</div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingDown className="h-5 w-5 text-cyan-500 mr-2" />
                    <h3 className="font-medium text-gray-800">ลดความล่าช้าในการจัดส่ง</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-cyan-600">-65%</div>
                    <div className="text-sm text-gray-600">จาก 20% เหลือ 7% ของการจัดส่งทั้งหมด</div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-cyan-500 mr-2" />
                    <h3 className="font-medium text-gray-800">เพิ่มประสิทธิภาพการใช้เวลา</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-cyan-600">+40%</div>
                    <div className="text-sm text-gray-600">จาก 65% เป็น 90% ของเวลาทำงานทั้งหมด</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
