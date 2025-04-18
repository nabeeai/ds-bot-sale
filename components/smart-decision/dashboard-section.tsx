"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, BarChart3, LineChart, PieChart, TrendingUp, AlertTriangle } from "lucide-react"
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
import { Line, Bar, Doughnut } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("sales")
  const [timeRange, setTimeRange] = useState("7d")

  // Sample data for sales dashboard
  const salesData = {
    labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
    datasets: [
      {
        label: "ยอดขายรวม (ล้านบาท)",
        data: [4.2, 3.8, 4.5, 5.2, 6.1, 7.8, 5.5],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "เป้าหมาย (ล้านบาท)",
        data: [4.0, 4.0, 4.0, 5.0, 5.0, 7.0, 5.0],
        borderColor: "rgba(255, 99, 132, 1)",
        borderDash: [5, 5],
        backgroundColor: "rgba(255, 99, 132, 0)",
        tension: 0.4,
      },
    ],
  }

  // Sample data for inventory turnover
  const inventoryData = {
    labels: ["อาหารแห้ง", "เครื่องดื่ม", "ของใช้ในครัวเรือน", "เครื่องเขียน", "เครื่องสำอาง", "อุปกรณ์ไฟฟ้า"],
    datasets: [
      {
        label: "อัตราการหมุนเวียนสินค้า (ครั้ง/เดือน)",
        data: [8.5, 12.3, 6.7, 4.2, 9.8, 3.5],
        backgroundColor: [
          "rgba(0, 191, 255, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // Sample data for stock status
  const stockData = {
    labels: ["สินค้าปกติ", "สินค้าใกล้หมด", "สินค้าขาดสต็อก", "สินค้าค้างสต็อก"],
    datasets: [
      {
        data: [65, 15, 5, 15],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 205, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
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
              return `${context.dataset.label}: ${context.parsed.y} ล้านบาท`
            } else if (activeTab === "inventory") {
              return `${context.dataset.label}: ${context.parsed.y} ครั้ง/เดือน`
            } else if (activeTab === "stock") {
              return `${context.label}: ${context.parsed}%`
            }
            return context.dataset.label + ": " + context.parsed.y
          },
        },
      },
    },
    scales:
      activeTab !== "stock"
        ? {
            y: {
              beginAtZero: true,
            },
          }
        : undefined,
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard สำหรับการตัดสินใจ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราออกแบบ Dashboard ที่ช่วยให้ผู้บริหารและทีมงานสามารถเห็นภาพรวมของธุรกิจได้อย่างชัดเจน
            และสามารถตัดสินใจได้อย่างรวดเร็วและแม่นยำ
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
                  <TrendingUp className="h-4 w-4 mr-2 text-cyan-500" />
                  ยอดขายวันนี้
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">฿ 7.8 ล้าน</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+12.5%</div>
                  <span className="text-xs text-gray-500 ml-2">เทียบกับเมื่อวาน</span>
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
                  <BarChart3 className="h-4 w-4 mr-2 text-cyan-500" />
                  อัตราการหมุนเวียนสินค้า
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.5 ครั้ง/เดือน</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+2.1</div>
                  <span className="text-xs text-gray-500 ml-2">เทียบกับเดือนที่แล้ว</span>
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
                  <AlertTriangle className="h-4 w-4 mr-2 text-cyan-500" />
                  สินค้าใกล้หมด
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42 รายการ</div>
                <div className="flex items-center mt-1">
                  <div className="text-xs text-red-600 bg-red-100 px-1.5 py-0.5 rounded-sm">+8 รายการ</div>
                  <span className="text-xs text-gray-500 ml-2">ต้องสั่งซื้อด่วน</span>
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
                  <CardTitle>ภาพรวมธุรกิจ</CardTitle>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="เลือกช่วงเวลา" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1d">วันนี้</SelectItem>
                      <SelectItem value="7d">7 วันที่ผ่านมา</SelectItem>
                      <SelectItem value="30d">30 วันที่ผ่านมา</SelectItem>
                      <SelectItem value="90d">90 วันที่ผ่านมา</SelectItem>
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
                  <TabsTrigger value="sales" className="flex items-center gap-2">
                    <LineChart className="h-4 w-4" />
                    <span>ยอดขาย</span>
                  </TabsTrigger>
                  <TabsTrigger value="inventory" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>อัตราการหมุนเวียนสินค้า</span>
                  </TabsTrigger>
                  <TabsTrigger value="stock" className="flex items-center gap-2">
                    <PieChart className="h-4 w-4" />
                    <span>สถานะสินค้า</span>
                  </TabsTrigger>
                </TabsList>
                <div className="h-[400px]">
                  <TabsContent value="sales" className="h-full">
                    <Line data={salesData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="inventory" className="h-full">
                    <Bar data={inventoryData} options={{ ...options, maintainAspectRatio: false }} />
                  </TabsContent>
                  <TabsContent value="stock" className="h-full">
                    <div className="flex justify-center h-full">
                      <div className="w-[400px]">
                        <Doughnut data={stockData} options={{ ...options, maintainAspectRatio: false }} />
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
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>สินค้าขายดี 5 อันดับแรก</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">น้ำดื่มตราเพียวริน 600ml (แพ็ค 12 ขวด)</span>
                      <span className="text-sm font-medium">฿ 850,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">ข้าวสารตราฉัตร 5kg</span>
                      <span className="text-sm font-medium">฿ 720,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">น้ำมันพืชตราองุ่น 1L</span>
                      <span className="text-sm font-medium">฿ 650,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">บะหมี่กึ่งสำเร็จรูปตรามาม่า (แพ็ค 30 ซอง)</span>
                      <span className="text-sm font-medium">฿ 580,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "58%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">น้ำอัดลมตราโค้ก 1.5L (แพ็ค 6 ขวด)</span>
                      <span className="text-sm font-medium">฿ 520,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>สินค้าที่ต้องสั่งซื้อด่วน</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">น้ำตาลทรายขาวตรามิตรผล 1kg</span>
                      <span className="text-sm font-medium text-red-500">เหลือ 5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">นมสดตราโฟร์โมสต์ 180ml (แพ็ค 36 กล่อง)</span>
                      <span className="text-sm font-medium text-red-500">เหลือ 8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">กระดาษชำระตราสก๊อต (แพ็ค 12 ม้วน)</span>
                      <span className="text-sm font-medium text-orange-500">เหลือ 12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">น้ำยาล้างจานตราซันไลต์ 500ml</span>
                      <span className="text-sm font-medium text-orange-500">เหลือ 15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">สบู่ตราลักส์ (แพ็ค 4 ก้อน)</span>
                      <span className="text-sm font-medium text-orange-500">เหลือ 18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                    </div>
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
