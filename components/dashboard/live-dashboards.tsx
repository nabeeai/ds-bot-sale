"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw, Share2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line, Bar, Doughnut } from "react-chartjs-2"

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
  Filler,
)

export default function LiveDashboards() {
  const [activeTab, setActiveTab] = useState("sales")
  const [timeRange, setTimeRange] = useState("7d")

  // Sample data for sales dashboard
  const salesData = {
    labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
    datasets: [
      {
        label: "ยอดขายออนไลน์",
        data: [12500, 19200, 15700, 18900, 22400, 25100, 23800],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "ยอดขายหน้าร้าน",
        data: [8700, 7900, 8200, 9100, 10400, 15700, 14200],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for user engagement
  const engagementData = {
    labels: ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"],
    datasets: [
      {
        label: "ผู้ใช้งานใหม่",
        data: [120, 145, 132, 158, 175, 210, 195],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
      {
        label: "ผู้ใช้งานกลับมาใหม่",
        data: [85, 92, 88, 99, 105, 125, 118],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  }

  // Sample data for product performance
  const productData = {
    labels: ["สินค้า A", "สินค้า B", "สินค้า C", "สินค้า D", "สินค้า E"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "rgba(0, 191, 255, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(153, 102, 255, 0.7)",
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
            if (activeTab === "sales") {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} บาท`
            } else if (activeTab === "engagement") {
              return `${context.dataset.label}: ${context.parsed.y} คน`
            } else if (activeTab === "products") {
              return `${context.label}: ${context.parsed}%`
            }
            return context.dataset.label + ": " + context.parsed.y
          },
        },
      },
    },
    scales:
      activeTab !== "products"
        ? {
            y: {
              beginAtZero: true,
            },
          }
        : undefined,
  }

  return (
    <section id="live-dashboards" className="mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">แดชบอร์ดและกราฟแบบเรียลไทม์</h2>
          <p className="text-gray-600">ติดตามประสิทธิภาพและแนวโน้มทางธุรกิจแบบเรียลไทม์</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="เลือกช่วงเวลา" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24 ชั่วโมงที่ผ่านมา</SelectItem>
              <SelectItem value="7d">7 วันที่ผ่านมา</SelectItem>
              <SelectItem value="30d">30 วันที่ผ่านมา</SelectItem>
              <SelectItem value="90d">90 วันที่ผ่านมา</SelectItem>
              <SelectItem value="1y">1 ปีที่ผ่านมา</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">ยอดขายรวม</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿ 1,245,300</div>
            <div className="flex items-center mt-1">
              <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+12.5%</div>
              <span className="text-xs text-gray-500 ml-2">เทียบกับช่วงก่อนหน้า</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">จำนวนลูกค้า</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,642</div>
            <div className="flex items-center mt-1">
              <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+8.3%</div>
              <span className="text-xs text-gray-500 ml-2">เทียบกับช่วงก่อนหน้า</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">มูลค่าเฉลี่ยต่อออเดอร์</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿ 3,850</div>
            <div className="flex items-center mt-1">
              <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+5.2%</div>
              <span className="text-xs text-gray-500 ml-2">เทียบกับช่วงก่อนหน้า</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">อัตราการกลับมาซื้อซ้ำ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.8%</div>
            <div className="flex items-center mt-1">
              <div className="text-xs text-red-600 bg-red-100 px-1.5 py-0.5 rounded-sm">-2.1%</div>
              <span className="text-xs text-gray-500 ml-2">เทียบกับช่วงก่อนหน้า</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>ข้อมูลประสิทธิภาพ</CardTitle>
              <CardDescription>ข้อมูลและแนวโน้มทางธุรกิจแบบเรียลไทม์</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>ดาวน์โหลดข้อมูล</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>แชร์แดชบอร์ด</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="sales">ยอดขาย</TabsTrigger>
              <TabsTrigger value="engagement">การมีส่วนร่วมของผู้ใช้</TabsTrigger>
              <TabsTrigger value="products">ประสิทธิภาพสินค้า</TabsTrigger>
            </TabsList>
            <div className="relative h-[400px]">
              <TabsContent value="sales" className="absolute inset-0">
                <div className="w-full h-full p-4 bg-white rounded-md border overflow-hidden">
                  <div className="w-full h-full">
                    <Line data={salesData} options={{ ...options, maintainAspectRatio: false }} />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="engagement" className="absolute inset-0">
                <div className="w-full h-full p-4 bg-white rounded-md border overflow-hidden">
                  <div className="w-full h-full">
                    <Bar data={engagementData} options={{ ...options, maintainAspectRatio: false }} />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="products" className="absolute inset-0">
                <div className="w-full h-full p-4 bg-white rounded-md border overflow-hidden">
                  <div className="flex justify-center items-center h-full">
                    <div className="w-full max-w-md h-full">
                      <Doughnut data={productData} options={{ ...options, maintainAspectRatio: false }} />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
