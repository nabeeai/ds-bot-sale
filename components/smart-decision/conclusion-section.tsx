"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, BarChart3, LineChart, Database } from "lucide-react"

export default function ConclusionSection() {
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
          <h2 className="text-3xl font-bold mb-4">บทสรุปและแนวทางต่อยอด</h2>
          <p className="text-lg text-cyan-50 max-w-3xl mx-auto">
            การใช้ Data Pipeline และ Dashboard ช่วยให้ธุรกิจค้าส่งและคลังสินค้าสามารถตัดสินใจได้อย่างรวดเร็วและแม่นยำ
            ส่งผลให้ธุรกิจเติบโตอย่างก้าวกระโดด แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น ยังมีโอกาสอีกมากมายในการต่อยอดและพัฒนาต่อไป
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
                <h3 className="text-xl font-semibold mb-2">AI สำหรับการพยากรณ์</h3>
                <p className="text-cyan-50 mb-4">
                  พัฒนาระบบ AI ที่สามารถพยากรณ์ความต้องการสินค้าในอนาคตได้อย่างแม่นยำ
                  ช่วยให้สามารถวางแผนการสั่งซื้อและการผลิตได้อย่างมีประสิทธิภาพมากขึ้น
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
                <h3 className="text-xl font-semibold mb-2">การวิเคราะห์ลูกค้า</h3>
                <p className="text-cyan-50 mb-4">
                  วิเคราะห์พฤติกรรมและความต้องการของลูกค้าแต่ละราย เพื่อนำเสนอสินค้าและโปรโมชั่นที่ตรงกับความต้องการมากขึ้น
                  ช่วยเพิ่มยอดขายและความพึงพอใจของลูกค้า
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
                  พัฒนาระบบที่สามารถปรับราคาสินค้าแบบไดนามิกตามความต้องการของตลาด ช่วยเพิ่มยอดขายและกำไรในช่วงที่มีความต้องการสูง
                  และระบายสินค้าในช่วงที่มีความต้องการต่ำ
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
              <CardContent className="p-6">
                <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">การบูรณาการข้อมูลภายนอก</h3>
                <p className="text-cyan-50 mb-4">
                  บูรณาการข้อมูลจากแหล่งภายนอก เช่น ข้อมูลเศรษฐกิจ สภาพอากาศ และเทรนด์ตลาด
                  เพื่อให้การวิเคราะห์และการตัดสินใจมีความแม่นยำมากขึ้น
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
            พร้อมที่จะยกระดับธุรกิจของคุณด้วยการตัดสินใจที่ชาญฉลาดจากข้อมูลจริงแบบรายวัน? ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
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
