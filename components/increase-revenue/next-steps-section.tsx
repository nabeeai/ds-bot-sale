"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, BarChart3, LineChart, Users } from "lucide-react"

export default function NextStepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">ขั้นตอนถัดไป</h2>
          <p className="text-lg text-cyan-50 max-w-3xl mx-auto">
            การใช้ K-Means Clustering และการออกแบบแคมเปญที่ตรงเป้าหมายเป็นเพียงจุดเริ่มต้น
            ยังมีโอกาสอีกมากมายในการใช้วิทยาศาสตร์ข้อมูลเพื่อเพิ่มยอดขายและประสิทธิภาพทางธุรกิจ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
              <CardContent className="p-6">
                <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">การพยากรณ์พฤติกรรมลูกค้า</h3>
                <p className="text-cyan-50 mb-4">
                  ใช้โมเดล Machine Learning เพื่อพยากรณ์พฤติกรรมการซื้อในอนาคตของลูกค้า และออกแบบแคมเปญเชิงป้องกันเพื่อรักษาลูกค้า
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
              <CardContent className="p-6">
                <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">การวิเคราะห์ตะกร้าสินค้า</h3>
                <p className="text-cyan-50 mb-4">
                  ใช้ Market Basket Analysis เพื่อค้นหาความสัมพันธ์ระหว่างสินค้า และเพิ่มยอดขายด้วยการแนะนำสินค้าที่เกี่ยวข้อง
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
              <CardContent className="p-6">
                <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">การปรับราคาแบบไดนามิก</h3>
                <p className="text-cyan-50 mb-4">
                  ใช้ Dynamic Pricing เพื่อปรับราคาสินค้าตามความต้องการของตลาด พฤติกรรมของลูกค้า และปัจจัยอื่นๆ เพื่อเพิ่มยอดขายและกำไร
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
              <CardContent className="p-6">
                <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">การวิเคราะห์ความรู้สึก</h3>
                <p className="text-cyan-50 mb-4">
                  ใช้ Sentiment Analysis เพื่อวิเคราะห์ความคิดเห็นและความรู้สึกของลูกค้า เพื่อปรับปรุงสินค้าและบริการให้ตรงกับความต้องการ
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-cyan-50 mb-6">
            พร้อมที่จะเพิ่มยอดขายและประสิทธิภาพทางธุรกิจด้วยวิทยาศาสตร์ข้อมูล? ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
          </p>
          <Button
            className="bg-white text-cyan-600 hover:bg-cyan-50"
            size="lg"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <span>ติดต่อปรึกษาฟรี</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
