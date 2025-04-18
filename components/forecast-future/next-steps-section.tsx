"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, CloudCog, BarChart4, LineChart, Zap } from "lucide-react"

export default function NextStepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const nextSteps = [
    {
      icon: <CloudCog className="h-10 w-10 text-cyan-500" />,
      title: "ระบบอัตโนมัติแบบเรียลไทม์",
      description: "พัฒนาระบบให้สามารถปรับแผนการผลิตโดยอัตโนมัติตามผลการคาดการณ์ล่าสุด เพื่อลดการแทรกแซงจากมนุษย์",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-blue-500" />,
      title: "เพิ่มปัจจัยภายนอก",
      description: "นำข้อมูลภายนอกเช่น สภาพอากาศ เทศกาล และแนวโน้มตลาดมาใช้ในการคาดการณ์เพื่อเพิ่มความแม่นยำ",
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-green-500" />,
      title: "ขยายไปยังสินค้าทุกประเภท",
      description: "ขยายการใช้งานระบบคาดการณ์ไปยังสินค้าทุกประเภทในโรงงาน เพื่อเพิ่มประสิทธิภาพโดยรวม",
    },
    {
      icon: <LineChart className="h-10 w-10 text-amber-500" />,
      title: "คาดการณ์ราคาวัตถุดิบ",
      description: "พัฒนาโมเดลเพื่อคาดการณ์ราคาวัตถุดิบล่วงหน้า ช่วยในการวางแผนการจัดซื้อและควบคุมต้นทุน",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-cyan-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ขั้นตอนถัดไป</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ความสำเร็จจากการใช้ Time-Series Forecasting เป็นเพียงจุดเริ่มต้น เรามีแผนพัฒนาระบบให้ดียิ่งขึ้นในอนาคต
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {nextSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{step.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">พร้อมที่จะเริ่มคาดการณ์อนาคตของธุรกิจคุณ?</h3>
              <p className="text-gray-600 mb-6">
                เราสามารถช่วยธุรกิจของคุณลดของเสีย เพิ่มประสิทธิภาพ และสร้างกำไรมากขึ้นด้วยเทคโนโลยี Time-Series Forecasting
                ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  <Zap className="h-5 w-5 mr-2" />
                  ติดต่อเรา
                </Button>
                <Button variant="outline">
                  เรียนรู้เพิ่มเติม
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-cyan-400 rounded-full opacity-40 animate-pulse animation-delay-300"></div>
                <div className="absolute inset-8 bg-cyan-300 rounded-full opacity-60 animate-pulse animation-delay-600"></div>
                <div className="absolute inset-12 bg-cyan-200 rounded-full opacity-80 animate-pulse animation-delay-900"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BrainCircuit className="h-16 w-16 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
