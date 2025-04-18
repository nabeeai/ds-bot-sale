"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShoppingCart, TrendingUp, Users, Target } from "lucide-react"
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
              กรณีศึกษา: ร้านค้าปลีกออนไลน์
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              เพิ่ม<span className="text-cyan-200">ยอดขายจากลูกค้าเดิม</span> ด้วยวิทยาศาสตร์ข้อมูล
            </h1>
            <p className="text-lg text-cyan-50">
              ดูวิธีที่เราใช้การวิเคราะห์ข้อมูลขั้นสูงเพื่อเพิ่มยอดขายจากลูกค้าเดิมได้ถึง 35% ด้วยการแบ่งกลุ่มลูกค้าแบบ K-Means
              และการออกแบบแคมเปญที่ตรงกลุ่มเป้าหมาย
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
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ร้านค้าปลีกออนไลน์</h3>
              <p className="text-cyan-100">ธุรกิจร้านค้าปลีกออนไลน์ที่มีฐานลูกค้ากว่า 50,000 คน แต่ยอดขายจากลูกค้าเดิมไม่เติบโตเท่าที่ควร</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">เป้าหมาย</h3>
              <p className="text-cyan-100">
                เพิ่มยอดขายจากลูกค้าเดิมโดยไม่ต้องเพิ่มงบประมาณการตลาด ด้วยการเข้าใจพฤติกรรมและความต้องการของลูกค้าให้ดีขึ้น
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">K-Means Clustering</h3>
              <p className="text-cyan-100">ใช้อัลกอริทึม K-Means เพื่อแบ่งกลุ่มลูกค้าตามพฤติกรรมการซื้อ ความถี่ และมูลค่าการซื้อ</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">แคมเปญที่ตรงเป้า</h3>
              <p className="text-cyan-100">
                ออกแบบแคมเปญการตลาดที่เฉพาะเจาะจงสำหรับแต่ละกลุ่มลูกค้า เพื่อเพิ่มอัตราการตอบสนองและยอดขาย
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
                  <h3 className="text-3xl font-bold text-cyan-200">+35%</h3>
                  <p className="text-cyan-100">เพิ่มยอดขายจากลูกค้าเดิม</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">+42%</h3>
                  <p className="text-cyan-100">เพิ่มอัตราการตอบสนองต่อแคมเปญ</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">-15%</h3>
                  <p className="text-cyan-100">ลดต้นทุนการตลาดต่อยอดขาย</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
