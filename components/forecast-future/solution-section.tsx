"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, LineChart, BarChart4, TrendingUp, CheckCircle2 } from "lucide-react"

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState("arima")

  const models = [
    {
      id: "arima",
      name: "ARIMA",
      description: "Auto-Regressive Integrated Moving Average",
      icon: <LineChart className="h-8 w-8 text-cyan-500" />,
      strengths: [
        "เหมาะกับข้อมูลที่มีแนวโน้มและฤดูกาลชัดเจน",
        "ใช้ข้อมูลในอดีตเพื่อคาดการณ์อนาคต",
        "มีความแม่นยำสูงสำหรับการคาดการณ์ระยะสั้น",
      ],
      weaknesses: ["ต้องการข้อมูลที่มีความนิ่ง (Stationary)", "ไม่เหมาะกับข้อมูลที่มีความผันผวนสูง", "ต้องปรับพารามิเตอร์บ่อยครั้ง"],
      useCase: "ใช้สำหรับคาดการณ์ยอดขายรายวันและรายสัปดาห์ของสินค้าที่มีความต้องการสม่ำเสมอ",
    },
    {
      id: "prophet",
      name: "Prophet",
      description: "โมเดลจาก Facebook สำหรับการคาดการณ์อนุกรมเวลา",
      icon: <BarChart4 className="h-8 w-8 text-blue-500" />,
      strengths: ["รองรับข้อมูลที่มีฤดูกาลหลายรูปแบบ", "จัดการกับค่าผิดปกติและข้อมูลที่หายไปได้ดี", "ง่ายต่อการใช้งานและปรับแต่ง"],
      weaknesses: ["อาจมีความแม่นยำน้อยกว่าโมเดลที่ซับซ้อนกว่า", "ต้องการข้อมูลย้อนหลังมากพอสมควร", "ไม่เหมาะกับข้อมูลที่มีความสัมพันธ์ซับซ้อน"],
      useCase: "ใช้สำหรับคาดการณ์ยอดขายที่มีผลกระทบจากวันหยุดและเทศกาลต่างๆ",
    },
    {
      id: "xgboost",
      name: "XGBoost",
      description: "Extreme Gradient Boosting สำหรับการเรียนรู้เชิงลึก",
      icon: <BrainCircuit className="h-8 w-8 text-green-500" />,
      strengths: ["รองรับตัวแปรภายนอกได้หลากหลาย", "จัดการกับความสัมพันธ์ที่ซับซ้อนได้ดี", "มีความแม่นยำสูงเมื่อมีข้อมูลเพียงพอ"],
      weaknesses: ["ต้องการข้อมูลจำนวนมากในการฝึกฝน", "มีความซับซ้อนในการปรับแต่งพารามิเตอร์", "อาจเกิด Overfitting ได้ง่าย"],
      useCase: "ใช้สำหรับคาดการณ์ที่ต้องพิจารณาปัจจัยภายนอกหลายอย่าง เช่น สภาพอากาศ โปรโมชัน และราคาวัตถุดิบ",
    },
  ]

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">โซลูชันที่ใช้: Time-Series Forecasting</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราใช้เทคนิค Time-Series Forecasting หลายรูปแบบเพื่อคาดการณ์ความต้องการสินค้าล่วงหน้า
            ช่วยให้โรงงานเบเกอรี่สามารถวางแผนการผลิตได้อย่างแม่นยำ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="arima" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="arima" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span>ARIMA</span>
              </TabsTrigger>
              <TabsTrigger value="prophet" className="flex items-center gap-2">
                <BarChart4 className="h-4 w-4" />
                <span>Prophet</span>
              </TabsTrigger>
              <TabsTrigger value="xgboost" className="flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                <span>XGBoost</span>
              </TabsTrigger>
            </TabsList>

            {models.map((model) => (
              <TabsContent key={model.id} value={model.id} className="mt-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {model.icon}
                      <div>
                        <CardTitle className="text-2xl">{model.name}</CardTitle>
                        <CardDescription>{model.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 text-cyan-500 mr-2" />
                          จุดเด่น
                        </h4>
                        <ul className="space-y-2">
                          {model.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 text-red-500 mr-2 transform rotate-180" />
                          ข้อจำกัด
                        </h4>
                        <ul className="space-y-2">
                          {model.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <BrainCircuit className="h-5 w-5 text-blue-500 mr-2" />
                          การใช้งาน
                        </h4>
                        <p className="text-gray-600">{model.useCase}</p>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h5 className="font-medium text-gray-800 mb-2">ความแม่นยำในการทำนาย</h5>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full"
                              style={{
                                width: model.id === "arima" ? "82%" : model.id === "prophet" ? "88%" : "92%",
                                backgroundColor:
                                  model.id === "arima" ? "#0ea5e9" : model.id === "prophet" ? "#3b82f6" : "#10b981",
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">0%</span>
                            <span className="text-xs text-gray-500 font-medium">
                              {model.id === "arima" ? "82%" : model.id === "prophet" ? "88%" : "92%"}
                            </span>
                            <span className="text-xs text-gray-500">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">กระบวนการทำงาน</h3>
              <p className="text-gray-600 mb-4">
                เราใช้ข้อมูลย้อนหลัง 2 ปีในการฝึกฝนโมเดล โดยพิจารณาปัจจัยต่างๆ เช่น ฤดูกาล วันหยุด โปรโมชัน และแนวโน้มตลาด
                ระบบจะทำการคาดการณ์ความต้องการล่วงหน้า 7 วัน และปรับปรุงโมเดลทุกสัปดาห์เพื่อเพิ่มความแม่นยำ
              </p>
              <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                <li>รวบรวมและทำความสะอาดข้อมูลยอดขายย้อนหลัง</li>
                <li>วิเคราะห์แนวโน้มและรูปแบบตามฤดูกาล</li>
                <li>ฝึกฝนโมเดลหลายรูปแบบและเปรียบเทียบประสิทธิภาพ</li>
                <li>นำโมเดลที่ดีที่สุดมาใช้คาดการณ์ความต้องการล่วงหน้า</li>
                <li>ปรับแผนการผลิตตามผลการคาดการณ์</li>
                <li>ติดตามผลและปรับปรุงโมเดลอย่างต่อเนื่อง</li>
              </ol>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-full h-64 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="h-20 w-20 text-cyan-200" />
                    </div>
                    <div
                      className="absolute inset-0 flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <BrainCircuit className="h-16 w-16 text-cyan-300" />
                    </div>
                    <div
                      className="absolute inset-0 flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      <BrainCircuit className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div
                      className="absolute inset-0 flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <BrainCircuit className="h-8 w-8 text-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
