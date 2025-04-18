"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LineChart, BrainCircuit, TrendingUp, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 px-4 overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-cyan-100 rounded-full opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-40" />
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  คาดการณ์อนาคต
                  <br />
                  <span className="text-cyan-600">ลดของเสีย เพิ่มกำไร</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  กรณีศึกษา: โรงงานเบเกอรี่ใช้ Time-Series Forecasting เพื่อคาดการณ์ความต้องการสินค้า ลดของเสีย
                  และเพิ่มประสิทธิภาพการผลิต
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    <LineChart className="h-5 w-5 mr-2" />
                    ดูแดชบอร์ดตัวอย่าง
                  </Button>
                  <Button variant="outline">
                    <BrainCircuit className="h-5 w-5 mr-2" />
                    เรียนรู้เพิ่มเติม
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-6 border border-gray-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-gray-800">ผลลัพธ์ที่ได้</h3>
                  <span className="text-sm text-cyan-600 font-medium bg-cyan-50 px-3 py-1 rounded-full">
                    กรณีศึกษาจริง
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-100 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">ลดของเสียได้ 32%</h4>
                      <p className="text-gray-600">ลดการผลิตเกินความต้องการ</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                      <BarChart4 className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">เพิ่มความแม่นยำ 87%</h4>
                      <p className="text-gray-600">ในการคาดการณ์ความต้องการสินค้า</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                      <BrainCircuit className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">ประหยัดต้นทุน 1.2 ล้านบาท/ปี</h4>
                      <p className="text-gray-600">จากการลดของเสียและเพิ่มประสิทธิภาพ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full opacity-50 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
