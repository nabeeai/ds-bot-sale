"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Truck, TrendingDown, Clock, MapPin } from "lucide-react"
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
              กรณีศึกษา: บริษัทขนส่ง
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ลด<span className="text-cyan-200">ค่าน้ำมันและเวลาจัดส่ง</span> ด้วยวิทยาศาสตร์ข้อมูล
            </h1>
            <p className="text-lg text-cyan-50">
              ดูวิธีที่เราใช้การวิเคราะห์ข้อมูลเชิงพื้นที่ การจัดกลุ่ม และการวิเคราะห์เวลา เพื่อลดค่าน้ำมันลง 28% และลดเวลาจัดส่งลง 35%
              ช่วยประหยัดค่าใช้จ่ายกว่า 15 ล้านบาทต่อปี
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
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">บริษัทขนส่ง</h3>
              <p className="text-cyan-100">
                บริษัทขนส่งชั้นนำที่มีรถกว่า 500 คัน ให้บริการครอบคลุมทั่วประเทศ แต่ประสบปัญหาค่าน้ำมันสูงและการจัดส่งล่าช้า
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">เป้าหมาย</h3>
              <p className="text-cyan-100">
                ลดค่าน้ำมันและเวลาจัดส่ง โดยการวิเคราะห์และปรับปรุงเส้นทางการขนส่ง เพื่อเพิ่มประสิทธิภาพและลดต้นทุน
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">การวิเคราะห์เชิงพื้นที่</h3>
              <p className="text-cyan-100">
                ใช้ Geospatial Analysis เพื่อวิเคราะห์เส้นทางการขนส่งปัจจุบัน และค้นหาโอกาสในการปรับปรุง
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
              <h3 className="text-xl font-semibold mb-2">การวิเคราะห์เวลา</h3>
              <p className="text-cyan-100">
                วิเคราะห์เวลาจัดส่งในแต่ละช่วงเวลาและเส้นทาง เพื่อระบุปัจจัยที่ส่งผลต่อความล่าช้าและหาวิธีแก้ไข
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
                  <h3 className="text-3xl font-bold text-cyan-200">-28%</h3>
                  <p className="text-cyan-100">ลดค่าน้ำมัน</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">-35%</h3>
                  <p className="text-cyan-100">ลดเวลาจัดส่ง</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-200">+22%</h3>
                  <p className="text-cyan-100">เพิ่มความพึงพอใจลูกค้า</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
