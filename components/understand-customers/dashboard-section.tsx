"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // ข้อมูลสำหรับ Dashboard
  const insightCards = [
    {
      id: "app-issues",
      title: "ปัญหาแอปพลิเคชัน",
      description: "ลูกค้า 42% รายงานปัญหาการใช้งานแอปพลิเคชัน",
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
      recommendations: [
        "ปรับปรุงประสิทธิภาพของแอปพลิเคชันให้ทำงานได้เสถียรมากขึ้น",
        "ปรับปรุง UI/UX ให้ใช้งานง่ายและเข้าใจได้ง่ายขึ้น",
        "เพิ่มระบบทดสอบและตรวจสอบคุณภาพก่อนปล่อยอัปเดต",
        "เพิ่มช่องทางให้ความช่วยเหลือผู้ใช้ที่มีปัญหาในการใช้งานแอป",
      ],
    },
    {
      id: "queue-time",
      title: "การรอคิวนาน",
      description: "ลูกค้า 38% ไม่พอใจกับเวลาที่ต้องรอคิว",
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
      recommendations: [
        "ปรับปรุงระบบการจัดการคิวให้มีประสิทธิภาพมากขึ้น",
        "เพิ่มจำนวนแพทย์หรือพนักงานในช่วงเวลาที่มีลูกค้าหนาแน่น",
        "แจ้งเตือนลูกค้าล่วงหน้าหากมีความล่าช้าเกิดขึ้น",
        "ให้ตัวเลือกในการจองคิวล่วงหน้าหรือเลื่อนคิวได้สะดวก",
      ],
    },
    {
      id: "staff-attitude",
      title: "พนักงานไม่เป็นมิตร",
      description: "ลูกค้า 30% รายงานว่าพนักงานไม่เป็นมิตร",
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
      recommendations: [
        "จัดอบรมพนักงานเรื่องการให้บริการลูกค้าและการสื่อสารที่ดี",
        "สร้างระบบประเมินและให้รางวัลพนักงานที่ให้บริการดีเยี่ยม",
        "จัดทำมาตรฐานการให้บริการและติดตามผลอย่างสม่ำเสมอ",
        "รับฟังความคิดเห็นของพนักงานเพื่อปรับปรุงสภาพแวดล้อมการทำงาน",
      ],
    },
    {
      id: "price-value",
      title: "ราคาไม่คุ้มค่า",
      description: "ลูกค้า 28% รู้สึกว่าราคาไม่คุ้มค่ากับบริการ",
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
      recommendations: [
        "ทบทวนโครงสร้างราคาให้สอดคล้องกับคุณภาพการบริการ",
        "เพิ่มคุณค่าให้กับบริการ เช่น บริการเสริมหรือสิทธิพิเศษ",
        "สร้างโปรแกรมสมาชิกหรือส่วนลดสำหรับลูกค้าที่ใช้บริการซ้ำ",
        "สื่อสารคุณค่าของบริการให้ชัดเจนมากขึ้น",
      ],
    },
    {
      id: "notification",
      title: "ระบบแจ้งเตือนผิดพลาด",
      description: "ลูกค้า 24% พบปัญหาการแจ้งเตือนผิดพลาด",
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      recommendations: [
        "ปรับปรุงระบบแจ้งเตือนให้มีความแม่นยำมากขึ้น",
        "เพิ่มตัวเลือกให้ลูกค้าสามารถกำหนดเวลาและรูปแบบการแจ้งเตือนได้",
        "ทดสอบระบบแจ้งเตือนอย่างสม่ำเสมอเพื่อตรวจสอบความถูกต้อง",
        "เพิ่มช่องทางการแจ้งเตือนที่หลากหลาย เช่น SMS, อีเมล, และ Push Notification",
      ],
    },
    {
      id: "payment",
      title: "ปัญหาการชำระเงิน",
      description: "ลูกค้า 21% พบปัญหาในการชำระเงิน",
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
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      recommendations: [
        "ปรับปรุงระบบชำระเงินให้มีความเสถียรและปลอดภัยมากขึ้น",
        "เพิ่มช่องทางการชำระเงินที่หลากหลาย",
        "ปรับปรุงขั้นตอนการชำระเงินให้ง่ายและรวดเร็วขึ้น",
        "เพิ่มระบบยืนยันการชำระเงินที่ชัดเจนเพื่อป้องกันความสับสน",
      ],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Dashboard รวมผลการวิเคราะห์</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            สรุปข้อมูลเชิงลึกที่ได้จากการวิเคราะห์ข้อมูลรีวิวของลูกค้า พร้อมคำแนะนำในการปรับปรุงเพื่อเพิ่มอัตราการกลับมาใช้บริการซ้ำ
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {insightCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {card.icon}
                    <h3 className="text-xl font-semibold text-gray-800 ml-3">{card.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{card.description}</p>
                  <Button
                    onClick={() => setOpenDialog(card.id)}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    ดูคำแนะนำการปรับปรุง
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="bg-cyan-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">สรุปผลการวิเคราะห์</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              จากการวิเคราะห์ข้อมูลรีวิวของลูกค้าทั้งหมด เราพบว่าสาเหตุหลักที่ทำให้ลูกค้าไม่กลับมาใช้บริการซ้ำมาจาก 3 ปัจจัยหลัก:
            </p>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-gray-800 mb-2">1. ปัญหาด้านเทคโนโลยี (Technology Issues)</p>
              <p className="text-gray-700">
                ปัญหาการใช้งานแอปพลิเคชัน ระบบแจ้งเตือนผิดพลาด และปัญหาการชำระเงิน
                เป็นสาเหตุหลักที่ทำให้ลูกค้าเกิดความไม่พอใจและไม่กลับมาใช้บริการซ้ำ
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-gray-800 mb-2">2. ปัญหาด้านการบริการ (Service Issues)</p>
              <p className="text-gray-700">
                การรอคิวนานและพนักงานไม่เป็นมิตร เป็นปัจจัยสำคัญที่ส่งผลต่อประสบการณ์โดยรวมของลูกค้า และทำให้ลูกค้าตัดสินใจไม่กลับมาใช้บริการซ้ำ
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-gray-800 mb-2">3. ปัญหาด้านความคุ้มค่า (Value Issues)</p>
              <p className="text-gray-700">
                ลูกค้ารู้สึกว่าค่าบริการสูงเกินไปเมื่อเทียบกับคุณภาพการบริการที่ได้รับ ทำให้ไม่เห็นความคุ้มค่าในการกลับมาใช้บริการซ้ำ
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dialog สำหรับแสดงคำแนะนำการปรับปรุง */}
      {insightCards.map((card) => (
        <Dialog key={card.id} open={openDialog === card.id} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-800">คำแนะนำการปรับปรุง: {card.title}</DialogTitle>
              <DialogDescription className="text-gray-600">
                แนวทางในการแก้ไขปัญหาและปรับปรุงเพื่อเพิ่มอัตราการกลับมาใช้บริการซ้ำ
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              {card.recommendations.map((recommendation, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-cyan-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button onClick={() => setOpenDialog(null)} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                ปิด
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  )
}
