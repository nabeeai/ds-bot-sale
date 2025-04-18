"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, DollarSign, Clock, Gauge } from "lucide-react"

export default function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const results = [
    {
      icon: <TrendingUp className="h-8 w-8 text-cyan-500" />,
      title: "ลดของเสียได้ 32%",
      description: "จากการคาดการณ์ความต้องการที่แม่นยำขึ้น ทำให้ผลิตได้พอดีกับความต้องการ ลดการสูญเสียจากสินค้าเหลือทิ้ง",
      value: "32%",
      color: "cyan",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "ประหยัดต้นทุน 1.2 ล้านบาท/ปี",
      description: "จากการลดของเสียและเพิ่มประสิทธิภาพการผลิต ส่งผลให้ประหยัดต้นทุนได้อย่างมีนัยสำคัญ",
      value: "1.2M",
      color: "green",
    },
    {
      icon: <Gauge className="h-8 w-8 text-blue-500" />,
      title: "เพิ่มความแม่นยำในการคาดการณ์ 87%",
      description: "โมเดล XGBoost ให้ความแม่นยำในการคาดการณ์สูงถึง 87% เมื่อเทียบกับยอดขายจริง",
      value: "87%",
      color: "blue",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      title: "ลดเวลาในการวางแผนการผลิต 65%",
      description: "ระบบอัตโนมัติช่วยลดเวลาในการวางแผนการผลิตจาก 2 วันเหลือเพียง 4 ชั่วโมง",
      value: "65%",
      color: "amber",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ผลลัพธ์ที่ได้รับ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            หลังจากนำระบบคาดการณ์มาใช้เป็นเวลา 6 เดือน โรงงานเบเกอรี่ได้รับผลลัพธ์ที่เป็นรูปธรรมดังนี้
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className="h-full border-l-4"
                style={{
                  borderLeftColor:
                    result.color === "cyan"
                      ? "#06b6d4"
                      : result.color === "green"
                        ? "#10b981"
                        : result.color === "blue"
                          ? "#3b82f6"
                          : "#f59e0b",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{result.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{result.title}</h3>
                      <p className="text-gray-600">{result.description}</p>
                    </div>
                    <div
                      className="ml-auto text-3xl font-bold"
                      style={{
                        color:
                          result.color === "cyan"
                            ? "#06b6d4"
                            : result.color === "green"
                              ? "#10b981"
                              : result.color === "blue"
                                ? "#3b82f6"
                                : "#f59e0b",
                      }}
                    >
                      {result.value}
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
          className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ความเห็นจากผู้บริหาร</h3>
              <blockquote className="text-gray-600 italic border-l-4 border-cyan-500 pl-4 py-2 mb-4">
                "ระบบคาดการณ์ช่วยเปลี่ยนแปลงวิธีการทำงานของเราอย่างสิ้นเชิง จากเดิมที่ต้องคาดเดาและพึ่งพาประสบการณ์
                ตอนนี้เรามีข้อมูลที่แม่นยำมาช่วยในการตัดสินใจ ส่งผลให้ลดของเสียและเพิ่มกำไรได้อย่างชัดเจน"
              </blockquote>
              <p className="text-gray-800 font-medium">คุณสมชาย วงศ์พาณิชย์</p>
              <p className="text-gray-600 text-sm">ผู้จัดการโรงงาน บริษัท เบเกอรี่ไทย จำกัด</p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">ประโยชน์ที่ได้รับ</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">ลดต้นทุนการผลิตและการจัดการสินค้าคงคลัง</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">เพิ่มความพึงพอใจของลูกค้าจากการมีสินค้าพร้อมจำหน่าย</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">ลดผลกระทบต่อสิ่งแวดล้อมจากการลดของเสีย</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">เพิ่มประสิทธิภาพในการใช้ทรัพยากรและแรงงาน</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
