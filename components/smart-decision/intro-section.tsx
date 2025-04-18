"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Store, BarChart3, Clock, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              กรณีศึกษา: ธุรกิจค้าส่ง / คลังสินค้า
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ตัดสินใจ<span className="text-cyan-200">อย่างชาญฉลาด</span> ด้วยข้อมูลจริงแบบรายวัน
            </h1>
            <p className="text-lg text-cyan-50">
              ดูวิธีที่เราช่วยให้ธุรกิจค้าส่งและคลังสินค้าใช้ข้อมูลจริงแบบรายวันในการตัดสินใจ ช่วยเพิ่มประสิทธิภาพการทำงาน ลดของค้างสต็อก
              และเพิ่มยอดขายได้ถึง 32%
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Store size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ธุรกิจค้าส่ง</h3>
              <p className="text-cyan-100">
                ธุรกิจค้าส่งขนาดใหญ่ที่มีสินค้ากว่า 10,000 รายการ และมีคลังสินค้า 5 แห่งทั่วประเทศ ต้องการระบบที่ช่วยในการตัดสินใจแบบรายวัน
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">เป้าหมาย</h3>
              <p className="text-cyan-100">
                ต้องการระบบที่ช่วยให้ผู้บริหารและทีมงานสามารถตัดสินใจได้อย่างรวดเร็วและแม่นยำ โดยอาศัยข้อมูลจริงแบบรายวัน
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Pipeline</h3>
              <p className="text-cyan-100">
                พัฒนาระบบ Data Pipeline ที่ดึงข้อมูลจากระบบคลังสินค้า ระบบขาย และระบบจัดซื้อ มาประมวลผลและแสดงผลแบบเรียลไทม์
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ตัดสินใจเร็วขึ้น</h3>
              <p className="text-cyan-100">
                ลดเวลาในการตัดสินใจจาก 3-5 วัน เหลือเพียง 1-2 ชั่วโมง ช่วยให้ธุรกิจสามารถตอบสนองต่อการเปลี่ยนแปลงของตลาดได้อย่างรวดเร็ว
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">-85%</h3>
                  <p className="text-cyan-100">ลดเวลาในการตัดสินใจ</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">-42%</h3>
                  <p className="text-cyan-100">ลดสินค้าค้างสต็อก</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">+32%</h3>
                  <p className="text-cyan-100">เพิ่มยอดขาย</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
