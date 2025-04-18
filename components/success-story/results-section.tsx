"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingDown, DollarSign, Clock, Users, BarChart3, PieChart } from "lucide-react"
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
} from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  ChartTooltip,
  Legend,
)

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState("metrics")

  // Sample data for retention metrics
  const retentionData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    datasets: [
      {
        label: "ก่อนใช้โมเดล (28%)",
        data: [28, 27, 29, 28, 27, 30, 28, 29, 27, 28, 29, 28],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "หลังใช้โมเดล (12%)",
        data: [28, 27, 25, 22, 20, 18, 16, 14, 13, 12, 12, 12],
        borderColor: "rgba(0, 191, 255, 1)",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  }

  // Sample data for cost savings
  const costData = {
    labels: ["ไตรมาส 1", "ไตรมาส 2", "ไตรมาส 3", "ไตรมาส 4"],
    datasets: [
      {
        label: "ค่าใช้จ่ายจากการลาออก (ล้านบาท)",
        data: [4.2, 3.1, 2.2, 1.8],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
    ],
  }

  // Sample data for satisfaction
  const satisfactionData = {
    labels: ["ความพึงพอใจของพนักงาน", "ความพึงพอใจของฝ่าย HR", "ประสิทธิภาพการทำงาน", "วัฒนธรรมองค์กร", "การสื่อสารภายใน"],
    datasets: [
      {
        label: "ก่อนใช้โมเดล",
        data: [65, 60, 70, 55, 62],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "หลังใช้โมเดล",
        data: [85, 90, 88, 82, 80],
        backgroundColor: "rgba(0, 191, 255, 0.5)",
        borderColor: "rgba(0, 191, 255, 1)",
        borderWidth: 1,
      },
    ],
  }

  // Sample data for ROI
  const roiData = {
    labels: ["ต้นทุนการพัฒนาโมเดล", "ค่าใช้จ่ายที่ประหยัดได้", "ผลตอบแทนสุทธิ"],
    datasets: [
      {
        data: [1.5, 17.4, 15.9],
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(0, 191, 255, 0.7)", "rgba(75, 192, 192, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(0, 191, 255, 1)", "rgba(75, 192, 192, 1)"],
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
      activeTab !== "roi"
        ? {
            y: {
              beginAtZero: true,
            },
          }
        : undefined,
  }

  return (
    <section id="results-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ผลลัพธ์ที่ได้รับ</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          หลังจากนำโมเดลไปใช้เป็นเวลา 1 ปี บริษัทได้เห็นการเปลี่ยนแปลงที่สำคัญในการลดอัตราการลาออกและประหยัดต้นทุนได้อย่างมีนัยสำคัญ
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingDown className="h-4 w-4 mr-2 text-cyan-500" />
              ลดอัตราการลาออกในช่วงแรก
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">-57%</div>
            <p className="text-xs text-gray-500 mt-1">จาก 28% เหลือเพียง 12%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-cyan-500" />
              ประหยัดค่าใช้จ่าย
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">11.3 ล้านบาท</div>
            <p className="text-xs text-gray-500 mt-1">ต่อปี</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-cyan-500" />
              ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">753%</div>
            <p className="text-xs text-gray-500 mt-1">ผลตอบแทนจากการลงทุน</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2 text-cyan-500" />
              ความพึงพอใจของฝ่าย HR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">+30%</div>
            <p className="text-xs text-gray-500 mt-1">จากการสำรวจความพึงพอใจ</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ผลลัพธ์โดยละเอียด</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="metrics" value={activeTab} onValueChange={setActiveTab}>
            <div className="overflow-x-auto -mx-6 px-6 mb-6">
              <TabsList className="flex flex-nowrap min-w-max">
                <TabsTrigger value="metrics" className="flex items-center gap-2 whitespace-nowrap">
                  <TrendingDown className="h-4 w-4" />
                  <span>อัตราการลาออก</span>
                </TabsTrigger>
                <TabsTrigger value="cost" className="flex items-center gap-2 whitespace-nowrap">
                  <DollarSign className="h-4 w-4" />
                  <span>การประหยัดค่าใช้จ่าย</span>
                </TabsTrigger>
                <TabsTrigger value="satisfaction" className="flex items-center gap-2 whitespace-nowrap">
                  <BarChart3 className="h-4 w-4" />
                  <span>ความพึงพอใจ</span>
                </TabsTrigger>
                <TabsTrigger value="roi" className="flex items-center gap-2 whitespace-nowrap">
                  <PieChart className="h-4 w-4" />
                  <span>ROI</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="min-h-[400px]">
              <TabsContent value="metrics">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">อัตราการลาออกของพนักงานใหม่ภายใน 90 วัน (%)</h3>
                    <p className="text-gray-600">เปรียบเทียบก่อนและหลังการใช้โมเดลทำนาย</p>
                  </div>
                  <Card className="p-4 bg-white">
                    <CardContent className="pt-4 overflow-x-auto">
                      <div className="w-full min-w-[500px] h-full">
                        <Line data={retentionData} options={options} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cost">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">การลดลงของค่าใช้จ่ายจากการลาออก</h3>
                    <p className="text-gray-600">แนวโน้มการลดลงของค่าใช้จ่ายหลังการใช้โมเดล (ล้านบาท)</p>
                  </div>
                  <Card className="p-4 bg-white">
                    <CardContent className="pt-4 overflow-x-auto">
                      <div className="w-full min-w-[500px] h-full">
                        <Bar data={costData} options={options} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="satisfaction">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">ดัชนีความพึงพอใจในองค์กร</h3>
                    <p className="text-gray-600">เปรียบเทียบความพึงพอใจในด้านต่างๆ ก่อนและหลังการใช้โมเดล</p>
                  </div>
                  <Card className="p-4 bg-white">
                    <CardContent className="pt-4 overflow-x-auto">
                      <div className="w-full min-w-[500px] h-full">
                        <Bar data={satisfactionData} options={options} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="roi">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">ผลตอบแทนจากการลงทุน (ROI)</h3>
                    <p className="text-gray-600">สัดส่วนของต้นทุน ผลประหยัด และผลตอบแทนสุทธิ (ล้านบาท)</p>
                  </div>
                  <Card className="p-4 bg-white">
                    <CardContent className="pt-4">
                      <div className="flex justify-center w-full">
                        <div className="w-full max-w-md">
                          <Pie data={roiData} options={options} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-12 bg-cyan-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">ความคิดเห็นจากผู้ใช้งาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-100 text-cyan-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg font-semibold">ส</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">สมศักดิ์ วงศ์ไพศาล</h4>
                <p className="text-sm text-gray-500">ผู้อำนวยการฝ่ายทรัพยากรบุคคล</p>
              </div>
            </div>
            <p className="text-gray-600">
              "โมเดลนี้ช่วยให้เราประหยัดงบประมาณได้มากกว่า 11 ล้านบาทต่อปี และที่สำคัญกว่านั้นคือช่วยให้เราสามารถรักษาพนักงานที่มีคุณภาพไว้ได้
              ลดความวุ่นวายในทีม และเพิ่มประสิทธิภาพการทำงานโดยรวม"
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-cyan-100 text-cyan-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 shrink-0">
                <span className="text-lg font-semibold">น</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">นภา สุขใจ</h4>
                <p className="text-sm text-gray-500">หัวหน้าฝ่ายสรรหาบุคลากร</p>
              </div>
            </div>
            <p className="text-gray-600">
              "การลดอัตราการลาออกจาก 28% เหลือเพียง 12% เป็นความสำเร็จที่เกินความคาดหมาย
              ทำให้เราสามารถมุ่งเน้นไปที่การพัฒนาพนักงานแทนที่จะต้องคอยหาคนใหม่มาทดแทนตลอดเวลา"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
