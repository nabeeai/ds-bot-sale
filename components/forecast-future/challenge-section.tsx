"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Trash2 } from "lucide-react"

export default function ChallengeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const challenges = [
    {
      icon: <Trash2 className="h-8 w-8 text-red-500" />,
      title: "ของเสียจำนวนมาก",
      description: "ผลิตภัณฑ์เบเกอรี่มีอายุสั้น เมื่อผลิตเกินความต้องการจะกลายเป็นของเสียทันที ทำให้เกิดต้นทุนที่สูญเปล่า",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      title: "ความต้องการไม่แน่นอน",
      description: "ความต้องการของลูกค้าเปลี่ยนแปลงตามฤดูกาล วันหยุด และปัจจัยภายนอกอื่นๆ ทำให้คาดการณ์ได้ยาก",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      title: "ต้นทุนการผลิตสูง",
      description: "วัตถุดิบมีราคาสูงและผันผวน การผลิตที่ไม่มีประสิทธิภาพส่งผลกระทบโดยตรงต่อกำไร",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-500" />,
      title: "ขาดเครื่องมือคาดการณ์",
      description: "การตัดสินใจผลิตอาศัยประสบการณ์และสัญชาตญาณมากกว่าข้อมูลเชิงวิเคราะห์ ทำให้เกิดความผิดพลาดบ่อยครั้ง",
    },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ความท้าทายของโรงงานเบเกอรี่</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ก่อนนำ Data Science มาใช้ โรงงานเบเกอรี่ต้องเผชิญกับปัญหาสำคัญที่ส่งผลต่อต้นทุนและประสิทธิภาพการผลิต
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
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
                    index === 0 ? "#ef4444" : index === 1 ? "#f59e0b" : index === 2 ? "#10b981" : "#3b82f6",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{challenge.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ผลกระทบต่อธุรกิจ</h3>
              <p className="text-gray-600 mb-4">
                จากการวิเคราะห์ข้อมูลย้อนหลัง พบว่าโรงงานเบเกอรี่สูญเสียรายได้ประมาณ 15-20% ต่อปีจากการผลิตที่ไม่สอดคล้องกับความต้องการ
                ทั้งในรูปแบบของสินค้าเหลือทิ้งและโอกาสในการขายที่หายไปเมื่อสินค้าไม่เพียงพอ
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-red-600">18%</p>
                  <p className="text-sm text-gray-600">ของเสียเฉลี่ยต่อเดือน</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-amber-600">12%</p>
                  <p className="text-sm text-gray-600">ยอดขายที่หายไป</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-red-100 to-amber-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Trash2 className="h-16 w-16 text-red-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-800">ของเสียรวมกว่า</p>
                    <p className="text-3xl font-bold text-red-600">2.4 ล้านบาท/ปี</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-amber-100 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
