"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// ข้อมูลสำหรับ Word Cloud
const wordCloudData = [
  { text: "รอนาน", value: 64 },
  { text: "แอปค้าง", value: 81 },
  { text: "จองยาก", value: 72 },
  { text: "ราคาแพง", value: 53 },
  { text: "พนักงาน", value: 47 },
  { text: "ไม่เป็นมิตร", value: 38 },
  { text: "หมอดี", value: 42 },
  { text: "ระบบล่ม", value: 56 },
  { text: "แจ้งเตือนผิด", value: 49 },
  { text: "ชำระเงิน", value: 44 },
  { text: "ปัญหา", value: 67 },
  { text: "ไม่สะดวก", value: 58 },
  { text: "ใช้งานยาก", value: 76 },
  { text: "คิวเยอะ", value: 51 },
  { text: "เสียเวลา", value: 62 },
  { text: "ไม่ตรงเวลา", value: 48 },
  { text: "บริการช้า", value: 59 },
  { text: "ไม่คุ้มค่า", value: 43 },
  { text: "ผิดนัด", value: 37 },
  { text: "ไม่ประทับใจ", value: 41 },
  { text: "การรักษาดี", value: 39 },
  { text: "ไม่กลับไปอีก", value: 54 },
  { text: "ยุ่งยาก", value: 63 },
  { text: "ไม่สะดวก", value: 57 },
  { text: "ไม่แนะนำ", value: 46 },
]

export default function WordCloudSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()
  const [selectedWord, setSelectedWord] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // คำอธิบายสำหรับคำที่เลือก
  const wordExplanations: Record<string, string> = {
    แอปค้าง: "ลูกค้าประสบปัญหาแอปพลิเคชันค้างบ่อยครั้ง โดยเฉพาะในขั้นตอนการจองคิว",
    จองยาก: "ขั้นตอนการจองคิวมีความซับซ้อนและไม่เป็นมิตรกับผู้ใช้",
    รอนาน: "ลูกค้าต้องรอคิวนานกว่าเวลาที่จองไว้ ทำให้เกิดความไม่พอใจ",
    ใช้งานยาก: "อินเตอร์เฟซของแอปพลิเคชันไม่เป็นมิตรกับผู้ใช้ ทำให้ใช้งานยาก",
    ปัญหา: "ลูกค้าพบปัญหาหลากหลายด้านในการใช้บริการ",
    ยุ่งยาก: "กระบวนการจองและใช้บริการมีความยุ่งยากเกินไป",
    เสียเวลา: "ลูกค้ารู้สึกว่าต้องเสียเวลามากเกินไปในการใช้บริการ",
    ระบบล่ม: "ระบบของแอปพลิเคชันมีปัญหาล่มบ่อยครั้ง",
    ไม่สะดวก: "การใช้บริการผ่านแอปพลิเคชันไม่สะดวกสบายอย่างที่ควรจะเป็น",
    บริการช้า: "การให้บริการที่คลินิกใช้เวลานานเกินไป",
    ไม่กลับไปอีก: "ลูกค้าแสดงความตั้งใจชัดเจนว่าจะไม่กลับมาใช้บริการอีก",
    ราคาแพง: "ลูกค้ารู้สึกว่าค่าบริการสูงเกินไปเมื่อเทียบกับคุณภาพที่ได้รับ",
    แจ้งเตือนผิด: "ระบบแจ้งเตือนของแอปพลิเคชันทำงานผิดพลาด ส่งการแจ้งเตือนผิดวันหรือเวลา",
    ไม่ตรงเวลา: "การให้บริการไม่เป็นไปตามเวลาที่นัดหมายไว้",
    คิวเยอะ: "มีจำนวนคิวมากเกินไป ทำให้ต้องรอนาน",
    ไม่คุ้มค่า: "ลูกค้ารู้สึกว่าบริการที่ได้รับไม่คุ้มค่ากับเงินที่จ่ายไป",
    ชำระเงิน: "มีปัญหาในขั้นตอนการชำระเงินผ่านแอปพลิเคชัน",
    พนักงาน: "มีปัญหาเกี่ยวกับการให้บริการของพนักงาน",
    ไม่เป็นมิตร: "พนักงานให้บริการไม่เป็นมิตร ทำให้ลูกค้ารู้สึกไม่ประทับใจ",
    ผิดนัด: "เกิดการผิดนัดหมายเนื่องจากปัญหาของระบบหรือการสื่อสาร",
    ไม่ประทับใจ: "ลูกค้าไม่ประทับใจกับประสบการณ์โดยรวมในการใช้บริการ",
    ไม่แนะนำ: "ลูกค้าไม่แนะนำให้ผู้อื่นมาใช้บริการ",
    หมอดี: "ลูกค้าพอใจกับการรักษาของแพทย์ แต่ไม่พอใจกับส่วนอื่นๆ",
    การรักษาดี: "คุณภาพการรักษาดี แต่มีปัญหาในด้านอื่นๆ ของการให้บริการ",
  }

  // ฟังก์ชันเมื่อคลิกที่คำใน Word Cloud
  const handleWordClick = (word: { text: string; value: number }) => {
    setSelectedWord(word.text)
  }

  // คำนวณขนาดของคำตามความถี่
  const getWordSize = (value: number) => {
    const minSize = 14
    const maxSize = 36
    const minValue = Math.min(...wordCloudData.map((w) => w.value))
    const maxValue = Math.max(...wordCloudData.map((w) => w.value))

    // คำนวณขนาดตามสัดส่วน
    return minSize + ((value - minValue) / (maxValue - minValue)) * (maxSize - minSize)
  }

  // คำนวณสีของคำตามความถี่
  const getWordColor = (value: number) => {
    const minValue = Math.min(...wordCloudData.map((w) => w.value))
    const maxValue = Math.max(...wordCloudData.map((w) => w.value))
    const intensity = ((value - minValue) / (maxValue - minValue)) * 100

    // สีจากอ่อนไปเข้ม
    if (intensity < 25) return "text-cyan-500"
    if (intensity < 50) return "text-cyan-600"
    if (intensity < 75) return "text-cyan-700"
    return "text-cyan-800"
  }

  // สร้าง Word Cloud แบบ custom
  const renderCustomWordCloud = () => {
    // เรียงลำดับคำตามความถี่
    const sortedWords = [...wordCloudData].sort((a, b) => b.value - a.value)

    return (
      <div className="flex flex-wrap justify-center gap-3 p-4 h-[400px] overflow-y-auto">
        {sortedWords.map((word, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            onClick={() => handleWordClick(word)}
            className={`${getWordColor(word.value)} bg-white hover:bg-cyan-50 rounded-lg px-3 py-2 cursor-pointer transition-all shadow-sm hover:shadow-md`}
            style={{
              fontSize: `${getWordSize(word.value)}px`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            {word.text}
            <span className="text-xs text-gray-400 ml-1">({word.value})</span>
          </motion.div>
        ))}
      </div>
    )
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Word Cloud การวิเคราะห์คำสำคัญ</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เราได้วิเคราะห์คำที่ปรากฏบ่อยในรีวิวของลูกค้า เพื่อค้นหาประเด็นสำคัญที่ลูกค้ากล่าวถึง
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
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          {renderCustomWordCloud()}
        </motion.div>

        {selectedWord && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cyan-50 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">ข้อมูลเชิงลึก: "{selectedWord}"</h3>
            <p className="text-gray-700">
              {wordExplanations[selectedWord] || "คำนี้ปรากฏบ่อยในรีวิวของลูกค้า แสดงถึงประเด็นที่ลูกค้าให้ความสำคัญ"}
            </p>
          </motion.div>
        )}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ข้อค้นพบสำคัญ</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-700">
                    คำที่เกี่ยวกับปัญหาทางเทคนิคของแอปพลิเคชัน เช่น "แอปค้าง", "ระบบล่ม", "จองยาก" ปรากฏบ่อยที่สุด
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-700">
                    ประเด็นเรื่องเวลาและการรอคิว เช่น "รอนาน", "เสียเวลา", "ไม่ตรงเวลา" เป็นปัญหาสำคัญอันดับสอง
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-700">ปัญหาด้านการบริการของพนักงาน เช่น "ไม่เป็นมิตร" ถูกกล่าวถึงในระดับที่น่ากังวล</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">การวิเคราะห์เบื้องต้น</h3>
              <p className="text-gray-700 mb-4">
                จากการวิเคราะห์ Word Cloud พบว่าปัญหาหลักที่ทำให้ลูกค้าไม่กลับมาใช้บริการซ้ำมาจาก 3 ด้านหลัก:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>ปัญหาด้านเทคนิคและการใช้งานแอปพลิเคชัน</li>
                <li>ปัญหาด้านการบริหารจัดการเวลาและคิว</li>
                <li>ปัญหาด้านการบริการของพนักงาน</li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
