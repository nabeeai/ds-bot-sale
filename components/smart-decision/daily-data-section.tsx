"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react"
import Image from "next/image"

export default function DailyDataSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ความสำคัญของข้อมูลแบบรายวัน</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ในธุรกิจค้าส่งและคลังสินค้า การตัดสินใจที่รวดเร็วและแม่นยำเป็นสิ่งสำคัญ
            การรอข้อมูลรายสัปดาห์หรือรายเดือนอาจทำให้พลาดโอกาสทางธุรกิจและเกิดปัญหาสินค้าค้างสต็อก
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ปัญหาของการตัดสินใจล่าช้า</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">สินค้าขาดสต็อก</h4>
                  <p className="text-gray-600">
                    การไม่มีข้อมูลแบบรายวันทำให้ไม่สามารถคาดการณ์ความต้องการสินค้าได้อย่างแม่นยำ ส่งผลให้สินค้าขาดสต็อกบ่อยครั้ง
                    และสูญเสียโอกาสในการขาย
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">สินค้าค้างสต็อก</h4>
                  <p className="text-gray-600">
                    การสั่งซื้อสินค้ามากเกินไปเนื่องจากไม่มีข้อมูลที่แม่นยำ ทำให้มีสินค้าค้างสต็อกเป็นจำนวนมาก
                    ส่งผลให้ต้นทุนการจัดเก็บสูงขึ้นและเงินทุนหมุนเวียนลดลง
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">พลาดโอกาสทางการตลาด</h4>
                  <p className="text-gray-600">
                    การไม่สามารถตอบสนองต่อเทรนด์ตลาดได้อย่างทันท่วงที ทำให้พลาดโอกาสในการทำโปรโมชั่น
                    หรือปรับกลยุทธ์การขายให้สอดคล้องกับความต้องการของตลาด
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden h-full">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-cyan-500" />
                  กระบวนการตัดสินใจแบบเดิม vs แบบใหม่
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <TrendingDown className="h-5 w-5 mr-2 text-red-500" />
                      กระบวนการแบบเดิม (3-5 วัน)
                    </h4>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                      <li>รวบรวมข้อมูลจากหลายแหล่งด้วยมือ (1-2 วัน)</li>
                      <li>นำข้อมูลมาวิเคราะห์ด้วย Excel (1 วัน)</li>
                      <li>จัดทำรายงานและนำเสนอผู้บริหาร (1 วัน)</li>
                      <li>ผู้บริหารพิจารณาและตัดสินใจ (0.5-1 วัน)</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      กระบวนการแบบใหม่ (1-2 ชั่วโมง)
                    </h4>
                    <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                      <li>ระบบดึงข้อมูลอัตโนมัติจากทุกแหล่ง (เรียลไทม์)</li>
                      <li>ประมวลผลและวิเคราะห์ข้อมูลอัตโนมัติ (เรียลไทม์)</li>
                      <li>แสดงผลบน Dashboard ที่เข้าใจง่าย (เรียลไทม์)</li>
                      <li>ผู้บริหารดูข้อมูลและตัดสินใจได้ทันที (1-2 ชั่วโมง)</li>
                    </ol>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-cyan-500">ลดเวลาในการตัดสินใจลง 85%</div>
                    <p className="text-gray-600 mt-1">จาก 3-5 วัน เหลือเพียง 1-2 ชั่วโมง</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-50 p-6 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ภาพแสดงการตัดสินใจล่าช้า"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">โอกาสที่หายไปเมื่อตัดสินใจช้า</h3>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">สูญเสียยอดขาย 15-20%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    จากการที่สินค้าขาดสต็อกในช่วงที่มีความต้องการสูง ทำให้ลูกค้าหันไปซื้อจากคู่แข่ง
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">ต้นทุนสินค้าค้างสต็อกสูงถึง 25%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ของมูลค่าสินค้าทั้งหมด ทำให้เงินทุนหมุนเวียนลดลงและมีค่าใช้จ่ายในการจัดเก็บเพิ่มขึ้น
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800">พลาดโอกาสในการทำกำไรเพิ่ม 30%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    จากการไม่สามารถปรับราคาหรือโปรโมชั่นให้สอดคล้องกับความต้องการของตลาดได้อย่างทันท่วงที
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
