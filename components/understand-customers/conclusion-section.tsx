"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ConclusionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // ข้อมูลแผนการปรับปรุง
  const improvementPlans = [
    {
      title: "ปรับปรุงแอปพลิเคชัน",
      description: "พัฒนาแอปพลิเคชันใหม่ที่มีประสิทธิภาพและใช้งานง่ายขึ้น แก้ไขปัญหาความเสถียรและการใช้งาน",
      timeline: "3 เดือน",
      priority: "สูงมาก",
      impact: "สูง",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "ปรับปรุงระบบจัดการคิว",
      description: "พัฒนาระบบจัดการคิวใหม่ที่มีประสิทธิภาพมากขึ้น ลดเวลารอคิว และเพิ่มความแม่นยำในการนัดหมาย",
      timeline: "2 เดือน",
      priority: "สูง",
      impact: "สูง",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "อบรมพนักงาน",
      description: "จัดอบรมพนักงานเรื่องการให้บริการลูกค้าและการสื่อสารที่ดี สร้างวัฒนธรรมการบริการที่เป็นเลิศ",
      timeline: "1 เดือน",
      priority: "สูง",
      impact: "ปานกลาง",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "ทบทวนโครงสร้างราคา",
      description: "ทบทวนและปรับปรุงโครงสร้างราคาให้สอดคล้องกับคุณภาพการบริการ และสร้างโปรแกรมสมาชิกสำหรับลูกค้าที่ใช้บริการซ้ำ",
      timeline: "2 เดือน",
      priority: "ปานกลาง",
      impact: "ปานกลาง",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">บทสรุปและข้อเสนอแนะ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            จากการวิเคราะห์ข้อมูลรีวิวของลูกค้า เราได้จัดทำแผนการปรับปรุงเพื่อเพิ่มอัตราการกลับมาใช้บริการซ้ำ
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">เป้าหมายการปรับปรุง</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cyan-50 p-4 rounded-md">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    1
                  </div>
                  <h4 className="font-medium text-gray-800">ระยะสั้น (1-3 เดือน)</h4>
                </div>
                <p className="text-gray-700">เพิ่มอัตราการกลับมาใช้บริการซ้ำจาก 35% เป็น 45% ภายใน 3 เดือน</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-md">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    2
                  </div>
                  <h4 className="font-medium text-gray-800">ระยะกลาง (4-6 เดือน)</h4>
                </div>
                <p className="text-gray-700">เพิ่มอัตราการกลับมาใช้บริการซ้ำเป็น 55% และลดจำนวนรีวิวเชิงลบลง 30%</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-md">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    3
                  </div>
                  <h4 className="font-medium text-gray-800">ระยะยาว (7-12 เดือน)</h4>
                </div>
                <p className="text-gray-700">เพิ่มอัตราการกลับมาใช้บริการซ้ำเป็น 70% และสร้างฐานลูกค้าประจำที่มั่นคง</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">แผนการปรับปรุง</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {improvementPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.75 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {plan.icon}
                      <h4 className="text-lg font-semibold text-gray-800 ml-3">{plan.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{plan.description}</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-100 p-2 rounded-md">
                        <p className="text-xs text-gray-600">ระยะเวลา</p>
                        <p className="font-medium text-gray-800">{plan.timeline}</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-md">
                        <p className="text-xs text-gray-600">ความสำคัญ</p>
                        <p className="font-medium text-gray-800">{plan.priority}</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-md">
                        <p className="text-xs text-gray-600">ผลกระทบ</p>
                        <p className="font-medium text-gray-800">{plan.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-cyan-600 text-white rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">พร้อมที่จะเริ่มปรับปรุงและพัฒนา?</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              เราสามารถช่วยคุณวิเคราะห์ข้อมูลลูกค้าเชิงลึกและพัฒนาแผนการปรับปรุงที่เหมาะสมกับธุรกิจของคุณ
              เพื่อเพิ่มอัตราการกลับมาใช้บริการซ้ำและสร้างความพึงพอใจให้กับลูกค้า
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100">ติดต่อเรา</Button>
              <Button className="bg-cyan-700 text-white hover:bg-cyan-800 border border-cyan-500">ดูบริการเพิ่มเติม</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
