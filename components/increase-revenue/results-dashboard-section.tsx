"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, TrendingUp, Users, ShoppingBag, DollarSign, Target } from "lucide-react"
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
import { Bar, Line } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export default function ResultsDashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("sales")
  const [timeRange, setTimeRange] = useState("6m")

  // Sample data for sales dashboard
  const salesData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
    datasets: [
      {
        label: "ก่อนแคมเปญ",
        data: [1200000, 1150000, 1250000, 1180000, 1220000, 1190000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "หลังแคมเปญ",
        data: [1200000, 1350000, 1450000, 1580000, 1620000, 1690000],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for customer engagement
  const engagementData = {
    labels: ["ลูกค้า VIP", "ลูกค้าประจำ", "ลูกค้าเป็นครั้งคราว", "ลูกค้าไม่ค่อยซื้อ"],
    datasets: [
      {
        label: "ก่อนแคมเปญ",
        data: [28, 32, 45, 18],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "หลังแคมเปญ",
        data: [42, 58, 65, 25],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
    ],
  }

  // Sample data for ROI
  const roiData = {
    labels: ["ลูกค้า VIP", "ลูกค้าประจำ", "ลูกค้าเป็นครั้งคราว", "ลูกค้าไม่ค่อยซื้อ", "ภาพรวม"],
    datasets: [
      {
        label: "ROI (%)",
        data: [450, 380, 320, 180, 350],
        backgroundColor: [
          "rgba(0, 191, 255, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
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
            if (activeTab === "sales") {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} บาท`
            } else if (activeTab === "engagement") {
              return `${context.dataset.label}: ${context.parsed.y}%`
            } else if (activeTab === "roi") {
              return `ROI: ${context.parsed.y}%`
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
            if (activeTab === "sales") {
              return value.toLocaleString() + " บาท"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard แสดงผลลัพธ์</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ดูผลลัพธ์ของการใช้ K-Means Clustering และการออกแบบแคมเปญที่ตรงเป้าหมาย ซึ่งช่วยเพิ่มยอดขายจากลูกค้าเดิมได้ถึง 35% และเพิ่ม ROI
            ของแคมเปญการตลาดได้อย่างมีนัยสำคัญ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-cyan-500" />
                  เพิ่มยอดขายรวม
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+35%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+500,000 บาท/เดือน</div>
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
                  <Users className="h-4 w-4 mr-2 text-cyan-500" />
                  เพิ่มการมีส่วนร่วม
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+42%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">
                    อัตราการตอบสนองต่อแคมเปญ
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
                  <ShoppingBag className="h-4 w-4 mr-2 text-cyan-500" />
                  เพิ่มมูลค่าตะกร้าเฉลี่ย
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+28%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+850 บาท/ออเดอร์</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-cyan-500" />
                  ROI ของแคมเปญ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">350%</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+250% จากแคมเปญเดิม</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ผลลัพธ์ของแคมเปญ</CardTitle>
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
              <Tabs defaultValue="sales" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="sales">ยอดขาย</TabsTrigger>
                  <TabsTrigger value="engagement">การมีส่วนร่วม</TabsTrigger>
                  <TabsTrigger value="roi">ROI</TabsTrigger>
                </TabsList>
                <div className="h-[400px]">
                  <TabsContent value="sales" className="h-full">
                    <Line data={salesData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="engagement" className="h-full">
                    <Bar data={engagementData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="roi" className="h-full">
                    <Bar data={roiData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 bg-gray-50 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ปัจจัยแห่งความสำเร็จ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <Users className="h-4 w-4" />
                </div>
                <h4 className="font-medium">การแบ่งกลุ่มลูกค้าที่แม่นยำ</h4>
              </div>
              <p className="text-gray-600 text-sm">
                การใช้ K-Means Clustering ช่วยให้เราแบ่งกลุ่มลูกค้าได้อย่างแม่นยำ ทำให้เข้าใจพฤติกรรมและความต้องการของลูกค้าแต่ละกลุ่มได้ดีขึ้น
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <Target className="h-4 w-4" />
                </div>
                <h4 className="font-medium">แคมเปญที่ตรงเป้าหมาย</h4>
              </div>
              <p className="text-gray-600 text-sm">
                การออกแบบแคมเปญที่ตรงกับความต้องการของแต่ละกลุ่มลูกค้า ช่วยเพิ่มอัตราการตอบสนองและประสิทธิภาพของแคมเปญ
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <h4 className="font-medium">การวัดผลและปรับปรุงอย่างต่อเนื่อง</h4>
              </div>
              <p className="text-gray-600 text-sm">
                การวัดผลและวิเคราะห์ประสิทธิภาพของแคมเปญอย่างต่อเนื่อง ช่วยให้เราสามารถปรับปรุงและพัฒนาแคมเปญให้มีประสิทธิภาพมากขึ้น
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
