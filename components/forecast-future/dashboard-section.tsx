"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ArrowUpRight, ArrowDownRight, TrendingUp, BarChart4, BrainCircuit, Calendar, RefreshCw } from "lucide-react"

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("sales")
  const [forecastModel, setForecastModel] = useState("prophet")
  const [timeRange, setTimeRange] = useState("week")

  // ข้อมูลตัวอย่างสำหรับกราฟยอดขายและการคาดการณ์
  const salesData = [
    { date: "1 มี.ค.", actual: 1200, forecast: null, lower: null, upper: null },
    { date: "2 มี.ค.", actual: 1350, forecast: null, lower: null, upper: null },
    { date: "3 มี.ค.", actual: 1100, forecast: null, lower: null, upper: null },
    { date: "4 มี.ค.", actual: 950, forecast: null, lower: null, upper: null },
    { date: "5 มี.ค.", actual: 1400, forecast: null, lower: null, upper: null },
    { date: "6 มี.ค.", actual: 1650, forecast: null, lower: null, upper: null },
    { date: "7 มี.ค.", actual: 1800, forecast: null, lower: null, upper: null },
    { date: "8 มี.ค.", actual: null, forecast: 1750, lower: 1650, upper: 1850 },
    { date: "9 มี.ค.", actual: null, forecast: 1700, lower: 1580, upper: 1820 },
    { date: "10 มี.ค.", actual: null, forecast: 1500, lower: 1380, upper: 1620 },
    { date: "11 มี.ค.", actual: null, forecast: 1300, lower: 1180, upper: 1420 },
    { date: "12 มี.ค.", actual: null, forecast: 1600, lower: 1480, upper: 1720 },
    { date: "13 มี.ค.", actual: null, forecast: 1850, lower: 1730, upper: 1970 },
    { date: "14 มี.ค.", actual: null, forecast: 1900, lower: 1780, upper: 2020 },
  ]

  // ข้อมูลตัวอย่างสำหรับกราฟของเสีย
  const wasteData = [
    { date: "1 มี.ค.", before: 220, after: null },
    { date: "2 มี.ค.", before: 250, after: null },
    { date: "3 มี.ค.", before: 180, after: null },
    { date: "4 มี.ค.", before: 200, after: null },
    { date: "5 มี.ค.", before: 270, after: null },
    { date: "6 มี.ค.", before: 300, after: null },
    { date: "7 มี.ค.", before: 320, after: null },
    { date: "8 มี.ค.", before: null, after: 120 },
    { date: "9 มี.ค.", before: null, after: 140 },
    { date: "10 มี.ค.", before: null, after: 100 },
    { date: "11 มี.ค.", before: null, after: 90 },
    { date: "12 มี.ค.", before: null, after: 110 },
    { date: "13 มี.ค.", before: null, after: 130 },
    { date: "14 มี.ค.", before: null, after: 150 },
  ]

  // ข้อมูลตัวอย่างสำหรับกราฟประสิทธิภาพการผลิต
  const efficiencyData = [
    { date: "1 มี.ค.", before: 72, after: null },
    { date: "2 มี.ค.", before: 70, after: null },
    { date: "3 มี.ค.", before: 75, after: null },
    { date: "4 มี.ค.", before: 68, after: null },
    { date: "5 มี.ค.", before: 73, after: null },
    { date: "6 มี.ค.", before: 71, after: null },
    { date: "7 มี.ค.", before: 74, after: null },
    { date: "8 มี.ค.", before: null, after: 85 },
    { date: "9 มี.ค.", before: null, after: 87 },
    { date: "10 มี.ค.", before: null, after: 86 },
    { date: "11 มี.ค.", before: null, after: 88 },
    { date: "12 มี.ค.", before: null, after: 90 },
    { date: "13 มี.ค.", before: null, after: 89 },
    { date: "14 มี.ค.", before: null, after: 91 },
  ]

  // ข้อมูลตัวอย่างสำหรับกราฟเปรียบเทียบโมเดล
  const modelComparisonData = [
    { date: "8 มี.ค.", actual: 1750, arima: 1700, prophet: 1750, xgboost: 1780 },
    { date: "9 มี.ค.", actual: 1700, arima: 1650, prophet: 1700, xgboost: 1720 },
    { date: "10 มี.ค.", actual: 1500, arima: 1450, prophet: 1500, xgboost: 1520 },
    { date: "11 มี.ค.", actual: 1300, arima: 1250, prophet: 1300, xgboost: 1330 },
    { date: "12 มี.ค.", actual: 1600, arima: 1550, prophet: 1600, xgboost: 1630 },
    { date: "13 มี.ค.", actual: 1850, arima: 1800, prophet: 1850, xgboost: 1880 },
    { date: "14 มี.ค.", actual: 1900, arima: 1850, prophet: 1900, xgboost: 1930 },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">แดชบอร์ดการคาดการณ์และผลลัพธ์</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ระบบแดชบอร์ดแบบเรียลไทม์ที่แสดงข้อมูลการคาดการณ์ยอดขาย ของเสีย และประสิทธิภาพการผลิต
            ช่วยให้ผู้บริหารสามารถตัดสินใจได้อย่างรวดเร็วและแม่นยำ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">แดชบอร์ดการคาดการณ์</h3>
                <p className="text-gray-600">ข้อมูลล่าสุด: 7 มีนาคม 2567 | 18:30 น.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={forecastModel} onValueChange={setForecastModel}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="เลือกโมเดล" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arima">ARIMA</SelectItem>
                    <SelectItem value="prophet">Prophet</SelectItem>
                    <SelectItem value="xgboost">XGBoost</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="ช่วงเวลา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">7 วัน</SelectItem>
                    <SelectItem value="month">30 วัน</SelectItem>
                    <SelectItem value="quarter">90 วัน</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">ยอดขายวันนี้</p>
                      <h4 className="text-2xl font-bold text-gray-900">฿ 182,500</h4>
                    </div>
                    <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+12.3%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">เทียบกับค่าเฉลี่ย 7 วันที่ผ่านมา</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">ของเสียวันนี้</p>
                      <h4 className="text-2xl font-bold text-gray-900">฿ 12,800</h4>
                    </div>
                    <div className="flex items-center text-red-500 bg-red-50 px-2 py-1 rounded-full text-xs font-medium">
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                      <span>-32.5%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">เทียบกับค่าเฉลี่ย 7 วันที่ผ่านมา</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">ประสิทธิภาพการผลิต</p>
                      <h4 className="text-2xl font-bold text-gray-900">91%</h4>
                    </div>
                    <div className="flex items-center text-green-500 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+18.2%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">เทียบกับค่าเฉลี่ย 7 วันที่ผ่านมา</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="sales" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="sales" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>ยอดขายและการคาดการณ์</span>
                </TabsTrigger>
                <TabsTrigger value="waste" className="flex items-center gap-2">
                  <BarChart4 className="h-4 w-4" />
                  <span>ของเสีย</span>
                </TabsTrigger>
                <TabsTrigger value="efficiency" className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>ประสิทธิภาพการผลิต</span>
                </TabsTrigger>
                <TabsTrigger value="models" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>เปรียบเทียบโมเดล</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sales" className="mt-0">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">ยอดขายและการคาดการณ์ล่วงหน้า 7 วัน</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="actual"
                            name="ยอดขายจริง"
                            stroke="#0ea5e9"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="forecast"
                            name="คาดการณ์"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="upper"
                            name="ขอบบน"
                            stroke="#d1d5db"
                            strokeWidth={1}
                            strokeDasharray="3 3"
                          />
                          <Line
                            type="monotone"
                            dataKey="lower"
                            name="ขอบล่าง"
                            stroke="#d1d5db"
                            strokeWidth={1}
                            strokeDasharray="3 3"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="waste" className="mt-0">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">ของเสียก่อนและหลังใช้ระบบคาดการณ์</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={wasteData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="before" name="ก่อนใช้ระบบ" fill="#ef4444" />
                          <Bar dataKey="after" name="หลังใช้ระบบ" fill="#10b981" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="efficiency" className="mt-0">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">ประสิทธิภาพการผลิตก่อนและหลังใช้ระบบคาดการณ์ (%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={efficiencyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis domain={[60, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="before"
                            name="ก่อนใช้ระบบ"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="after"
                            name="หลังใช้ระบบ"
                            stroke="#0ea5e9"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="models" className="mt-0">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">เปรียบเทียบความแม่นยำของโมเดลต่างๆ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={modelComparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="actual"
                            name="ยอดขายจริง"
                            stroke="#000000"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="arima"
                            name="ARIMA"
                            stroke="#0ea5e9"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="prophet"
                            name="Prophet"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="xgboost"
                            name="XGBoost"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
