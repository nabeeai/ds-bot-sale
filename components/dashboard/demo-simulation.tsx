"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfoIcon, Upload, Play, BarChart3, BrainCircuit, RefreshCw } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Line, Bar } from "react-chartjs-2"

export default function DemoSimulation() {
  const [activeTab, setActiveTab] = useState("customer-segmentation")
  const [isSimulating, setIsSimulating] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [segmentCount, setSegmentCount] = useState<number[]>([3])
  const [includeRFM, setIncludeRFM] = useState(true)
  const [includeDemographic, setIncludeDemographic] = useState(true)
  const [includeBehavioral, setIncludeBehavioral] = useState(true)

  // Sample data for customer segmentation
  const segmentationData = {
    labels: ["กลุ่มที่ 1", "กลุ่มที่ 2", "กลุ่มที่ 3"],
    datasets: [
      {
        label: "จำนวนลูกค้า",
        data: [120, 85, 95],
        backgroundColor: ["rgba(0, 191, 255, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(75, 192, 192, 0.6)"],
        borderColor: ["rgba(0, 191, 255, 1)", "rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  }

  // Sample data for sales forecast
  const forecastData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    datasets: [
      {
        label: "ข้อมูลจริง",
        data: [65, 70, 68, 75, 82, 90, null, null, null, null, null, null],
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  }

  const handleSimulate = () => {
    setIsSimulating(true)
    // Simulate API call or processing time
    setTimeout(() => {
      setIsSimulating(false)
      setShowResults(true)
    }, 2000)
  }

  const handleReset = () => {
    setShowResults(false)
  }

  return (
    <section id="demo-simulation">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">การจำลองและทดลอง</h2>
          <p className="text-gray-600">ทดลองใช้โมเดล AI ของเราและดูผลลัพธ์ทันที</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ทดลองใช้โมเดล AI</CardTitle>
          <CardDescription>เลือกโมเดลและปรับแต่งพารามิเตอร์เพื่อดูผลลัพธ์</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="customer-segmentation" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="customer-segmentation" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>การแบ่งกลุ่มลูกค้า</span>
              </TabsTrigger>
              <TabsTrigger value="sales-forecast" className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                <span>การพยากรณ์ยอดขาย</span>
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <TabsContent value="customer-segmentation" className="m-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>จำนวนกลุ่ม</Label>
                          <span className="text-sm text-gray-500">{segmentCount[0]}</span>
                        </div>
                        <Slider value={segmentCount} min={2} max={6} step={1} onValueChange={setSegmentCount} />
                      </div>

                      <div className="space-y-2">
                        <Label>ตัวแปรที่ใช้ในการแบ่งกลุ่ม</Label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Switch id="rfm" checked={includeRFM} onCheckedChange={setIncludeRFM} />
                              <Label htmlFor="rfm" className="cursor-pointer">
                                RFM (ความถี่, มูลค่า, ระยะเวลา)
                              </Label>
                            </div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <InfoIcon className="h-4 w-4 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Recency, Frequency, Monetary Value</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Switch
                                id="demographic"
                                checked={includeDemographic}
                                onCheckedChange={setIncludeDemographic}
                              />
                              <Label htmlFor="demographic" className="cursor-pointer">
                                ข้อมูลประชากรศาสตร์
                              </Label>
                            </div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <InfoIcon className="h-4 w-4 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>อายุ, เพศ, ที่อยู่, รายได้</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Switch
                                id="behavioral"
                                checked={includeBehavioral}
                                onCheckedChange={setIncludeBehavioral}
                              />
                              <Label htmlFor="behavioral" className="cursor-pointer">
                                ข้อมูลพฤติกรรม
                              </Label>
                            </div>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <InfoIcon className="h-4 w-4 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>หมวดหมู่สินค้าที่ซื้อ, ช่องทางการซื้อ, เวลาที่ซื้อ</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>อัลกอริทึมที่ใช้</Label>
                        <Select defaultValue="kmeans">
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกอัลกอริทึม" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kmeans">K-Means Clustering</SelectItem>
                            <SelectItem value="hierarchical">Hierarchical Clustering</SelectItem>
                            <SelectItem value="dbscan">DBSCAN</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>อัปโหลดข้อมูลของคุณ</Label>
                          <span className="text-xs text-gray-500">หรือใช้ข้อมูลตัวอย่าง</span>
                        </div>
                        <div className="flex items-center gap-2">
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sales-forecast" className="m-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>ช่วงเวลาที่ต้องการพยากรณ์</Label>
                        <Select defaultValue="6">
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกช่วงเวลา" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 เดือน</SelectItem>
                            <SelectItem value="6">6 เดือน</SelectItem>
                            <SelectItem value="12">12 เดือน</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>โมเดลที่ใช้</Label>
                        <Select defaultValue="arima">
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกโมเดล" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="arima">ARIMA</SelectItem>
                            <SelectItem value="prophet">Prophet</SelectItem>
                            <SelectItem value="lstm">LSTM</SelectItem>
                            <SelectItem value="xgboost">XGBoost</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>ตัวแปรภายนอกที่ใช้</Label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Switch id="seasonality" defaultChecked />
                            <Label htmlFor="seasonality" className="cursor-pointer">
                              ฤดูกาล
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="holidays" defaultChecked />
                            <Label htmlFor="holidays" className="cursor-pointer">
                              วันหยุด
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="promotions" defaultChecked />
                            <Label htmlFor="promotions" className="cursor-pointer">
                              โปรโมชัน
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>ข้อมูลเพิ่มเติม (ถ้ามี)</Label>
                        <Textarea placeholder="ระบุข้อมูลเพิ่มเติมที่เกี่ยวข้องกับการพยากรณ์" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>อัปโหลดข้อมูลของคุณ</Label>
                          <span className="text-xs text-gray-500">หรือใช้ข้อมูลตัวอย่าง</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" className="w-full flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            <span>อัปโหลดไฟล์ CSV</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <div className="pt-4">
                    {!showResults ? (
                      <Button
                        className="w-full bg-cyan-500 hover:bg-cyan-600"
                        onClick={handleSimulate}
                        disabled={isSimulating}
                      >
                        {isSimulating ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            กำลังประมวลผล...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            เริ่มการจำลอง
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" onClick={handleReset}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        เริ่มใหม่
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                {!showResults ? (
                  <div className="h-full flex items-center justify-center border border-dashed rounded-lg p-8">
                    <div className="text-center">
                      <BrainCircuit className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">ปรับแต่งพารามิเตอร์และเริ่มการจำลอง</h3>
                      <p className="text-gray-500 max-w-md">
                        ปรับแต่งค่าพารามิเตอร์ตามต้องการและกดปุ่ม "เริ่มการจำลอง" เพื่อดูผลลัพธ์
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    <TabsContent value="customer-segmentation" className="m-0 h-full">
                      <div className="space-y-6 h-full">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-gray-800 mb-2">ผลการแบ่งกลุ่มลูกค้า</h3>
                          <p className="text-gray-600 text-sm mb-4">
                            ระบบได้แบ่งลูกค้าออกเป็น {segmentCount[0]} กลุ่มตามพารามิเตอร์ที่กำหนด
                          </p>
                          <div className="h-[300px]">
                            <Bar data={segmentationData} options={options} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">กลุ่มที่ 1</CardTitle>
                              <CardDescription>ลูกค้าที่มีมูลค่าสูง</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-cyan-500">120 คน</div>
                              <p className="text-sm text-gray-500 mt-1">35% ของลูกค้าทั้งหมด</p>
                              <div className="mt-2 text-xs text-gray-600">
                                <div className="flex justify-between mb-1">
                                  <span>มูลค่าเฉลี่ย:</span>
                                  <span className="font-medium">15,200 บาท</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>ความถี่เฉลี่ย:</span>
                                  <span className="font-medium">4.2 ครั้ง/เดือน</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>อายุเฉลี่ย:</span>
                                  <span className="font-medium">35 ปี</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">กลุ่มที่ 2</CardTitle>
                              <CardDescription>ลูกค้าที่มีความถี่สูง</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-pink-500">85 คน</div>
                              <p className="text-sm text-gray-500 mt-1">25% ของลูกค้าทั้งหมด</p>
                              <div className="mt-2 text-xs text-gray-600">
                                <div className="flex justify-between mb-1">
                                  <span>มูลค่าเฉลี่ย:</span>
                                  <span className="font-medium">5,800 บาท</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>ความถี่เฉลี่ย:</span>
                                  <span className="font-medium">6.5 ครั้ง/เดือน</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>อายุเฉลี่ย:</span>
                                  <span className="font-medium">28 ปี</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">กลุ่มที่ 3</CardTitle>
                              <CardDescription>ลูกค้าทั่วไป</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-teal-500">95 คน</div>
                              <p className="text-sm text-gray-500 mt-1">40% ของลูกค้าทั้งหมด</p>
                              <div className="mt-2 text-xs text-gray-600">
                                <div className="flex justify-between mb-1">
                                  <span>มูลค่าเฉลี่ย:</span>
                                  <span className="font-medium">3,200 บาท</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span>ความถี่เฉลี่ย:</span>
                                  <span className="font-medium">1.8 ครั้ง/เดือน</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>อายุเฉลี่ย:</span>
                                  <span className="font-medium">42 ปี</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="sales-forecast" className="m-0 h-full">
                      <div className="space-y-6 h-full">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-gray-800 mb-2">ผลการพยากรณ์ยอดขาย</h3>
                          <p className="text-gray-600 text-sm mb-4">
                            ระบบได้พยากรณ์ยอดขายล่วงหน้า 6 เดือนตามพารามิเตอร์ที่กำหนด
                          </p>
                          <div className="h-[300px]">
                            <Line data={forecastData} options={options} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">ยอดขายเฉลี่ยต่อเดือน</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-cyan-500">108.5 ล้านบาท</div>
                              <p className="text-sm text-gray-500 mt-1">เพิ่มขึ้น 15.2% จากช่วงก่อนหน้า</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">ความแม่นยำของโมเดล</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-green-500">92.5%</div>
                              <p className="text-sm text-gray-500 mt-1">MAPE: 7.5%</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">แนวโน้มการเติบโต</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold text-pink-500">+5.8%</div>
                              <p className="text-sm text-gray-500 mt-1">ต่อเด่ือน (เฉลี่ย)</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                )}
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
