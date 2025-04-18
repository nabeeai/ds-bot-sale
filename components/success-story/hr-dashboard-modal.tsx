"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, RefreshCw, Users, Clock, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react"
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

export default function HRDashboardModal() {
  const [activeTab, setActiveTab] = useState("retention")
  const [timeRange, setTimeRange] = useState("6m")

  // Sample data for retention dashboard
  const retentionData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    datasets: [
      {
        label: "อัตราการลาออก (%)",
        data: [8.2, 7.9, 7.5, 6.8, 6.2, 5.8, 5.5, 5.2, 5.0, 4.8, 4.5, 4.2],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "อัตราการรักษาพนักงาน (%)",
        data: [91.8, 92.1, 92.5, 93.2, 93.8, 94.2, 94.5, 94.8, 95.0, 95.2, 95.5, 95.8],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Sample data for recruitment metrics
  const recruitmentData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    datasets: [
      {
        label: "จำนวนผู้สมัคร",
        data: [120, 145, 132, 158, 175, 210, 195, 180, 165, 150, 140, 130],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
      {
        label: "จำนวนที่รับเข้าทำงาน",
        data: [15, 18, 14, 20, 22, 25, 23, 21, 19, 17, 16, 15],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  }

  // Sample data for department distribution
  const departmentData = {
    labels: ["ฝ่ายพัฒนา", "ฝ่ายการตลาด", "ฝ่ายขาย", "ฝ่ายบัญชี", "ฝ่ายบุคคล", "ฝ่ายปฏิบัติการ"],
    datasets: [
      {
        data: [35, 20, 15, 10, 8, 12],
        backgroundColor: [
          "rgba(0, 191, 255, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
    },
    scales:
      activeTab !== "departments"
        ? {
            y: {
              beginAtZero: true,
            },
          }
        : undefined,
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="hidden">ดูตัวอย่างแดชบอร์ด HR</span>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">แดชบอร์ดฝ่ายทรัพยากรบุคคล</DialogTitle>
          <DialogDescription>แดชบอร์ดสำหรับติดตามประสิทธิภาพการรักษาพนักงานและการสรรหาบุคลากร</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Users className="h-4 w-4 mr-2 text-cyan-500" />
                จำนวนพนักงานทั้งหมด
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+3.2%</div>
                <span className="text-xs text-gray-500 ml-2">เทียบกับเดือนที่แล้ว</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <TrendingDown className="h-4 w-4 mr-2 text-cyan-500" />
                อัตราการลาออก
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2%</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">-0.3%</div>
                <span className="text-xs text-gray-500 ml-2">เทียบกับเดือนที่แล้ว</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-2 text-cyan-500" />
                ระยะเวลาการสรรหาเฉลี่ย
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29 วัน</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">-5 วัน</div>
                <span className="text-xs text-gray-500 ml-2">เทียบกับไตรมาสที่แล้ว</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-cyan-500" />
                ความแม่นยำของโมเดล
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">+2.5%</div>
                <span className="text-xs text-gray-500 ml-2">เทียบกับเดือนที่แล้ว</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">ข้อมูลประสิทธิภาพ HR</h3>
          <div className="flex items-center gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="เลือกช่วงเวลา" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3m">3 เดือนที่ผ่านมา</SelectItem>
                <SelectItem value="6m">6 เดือนที่ผ่านมา</SelectItem>
                <SelectItem value="1y">1 ปีที่ผ่านมา</SelectItem>
                <SelectItem value="all">ทั้งหมด</SelectItem>
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

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="retention" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="retention">อัตราการรักษาพนักงาน</TabsTrigger>
                <TabsTrigger value="recruitment">การสรรหาบุคลากร</TabsTrigger>
                <TabsTrigger value="departments">สัดส่วนแผนก</TabsTrigger>
              </TabsList>
              <div className="h-[400px]">
                <TabsContent value="retention">
                  <Line data={retentionData} options={options} />
                </TabsContent>
                <TabsContent value="recruitment">
                  <Bar data={recruitmentData} options={options} />
                </TabsContent>
                <TabsContent value="departments">
                  <div className="flex justify-center h-full">
                    <div className="w-[400px]">
                      <Doughnut data={departmentData} options={options} />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>พนักงานที่มีความเสี่ยงในการลาออก</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นายสมชาย ใจดี</h4>
                    <p className="text-sm text-gray-600">ฝ่ายพัฒนา | ความเสี่ยง: สูง (85%)</p>
                    <div className="mt-1 text-xs text-gray-500">
                      ปัจจัยเสี่ยง: ระยะทางไกล, ไม่ได้รับการเลื่อนตำแหน่ง, ทำงานล่วงเวลาบ่อย
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นางสาวสมหญิง รักงาน</h4>
                    <p className="text-sm text-gray-600">ฝ่ายการตลาด | ความเสี่ยง: ปานกลาง (65%)</p>
                    <div className="mt-1 text-xs text-gray-500">ปัจจัยเสี่ยง: ผลประเมินลดลง, ขาดการฝึกอบรม</div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นายวิชัย มั่งมี</h4>
                    <p className="text-sm text-gray-600">ฝ่ายขาย | ความเสี่ยง: ปานกลาง (60%)</p>
                    <div className="mt-1 text-xs text-gray-500">ปัจจัยเสี่ยง: ยอดขายลดลง, ความขัดแย้งในทีม</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ผู้สมัครที่มีศักยภาพสูง</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100">
                  <Users className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นางสาวนภา สุขใจ</h4>
                    <p className="text-sm text-gray-600">ตำแหน่ง: นักพัฒนาซอฟต์แวร์อาวุโส</p>
                    <div className="mt-1 text-xs text-gray-500">
                      โอกาสอยู่นาน: สูง (92%) | ประสบการณ์: 5 ปี | ทักษะเทคนิค: ดีเยี่ยม
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100">
                  <Users className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นายประเสริฐ ยิ้มแย้ม</h4>
                    <p className="text-sm text-gray-600">ตำแหน่ง: ผู้จัดการฝ่ายการตลาด</p>
                    <div className="mt-1 text-xs text-gray-500">
                      โอกาสอยู่นาน: สูง (88%) | ประสบการณ์: 7 ปี | ทักษะเทคนิค: ดีมาก
                    </div>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100">
                  <Users className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">นางสาววิภา สวยงาม</h4>
                    <p className="text-sm text-gray-600">ตำแหน่ง: นักวิเคราะห์ข้อมูล</p>
                    <div className="mt-1 text-xs text-gray-500">
                      โอกาสอยู่นาน: สูง (85%) | ประสบการณ์: 3 ปี | ทักษะเทคนิค: ดีเยี่ยม
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
