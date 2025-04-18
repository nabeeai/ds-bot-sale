"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart4, BrainCircuit, LineChart, PieChart, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ValueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, fallback: true })
  const [activeCard, setActiveCard] = useState(0)
  const [isVisible, setIsVisible] = useState(true) // เพิ่มสถานะการแสดงผลเริ่มต้น
  const router = useRouter()

  useEffect(() => {
    // ตั้งค่าให้แสดงผลทันทีเมื่อโหลดหน้า
    setIsVisible(true)

    // ตั้งค่า interval สำหรับการเปลี่ยน active card
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const valueCards = [
    {
      icon: <TrendingUp className="h-12 w-12 text-cyan-500" />,
      title: "เพิ่มรายได้",
      description: "กรณีศึกษา : ธุรกิจร้านค้าปลีกออนไลน์",
    },
    {
      icon: <BarChart4 className="h-12 w-12 text-cyan-500" />,
      title: "ลดต้นทุน",
      description: "กรณีศึกษา : ธุรกิจบริษัทขนส่ง",
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-cyan-500" />,
      title: "ตัดสินใจอย่างชาญฉลาด",
      description: "กรณีศึกษา: ธุรกิจค้าส่ง / คลังสินค้า",
    },
    {
      icon: <LineChart className="h-12 w-12 text-cyan-500" />,
      title: "คาดการณ์อนาคต",
      description: "กรณีศึกษา : ธุรกิจโรงงานเบเกอรี่",
    },
    {
      icon: <PieChart className="h-12 w-12 text-cyan-500" />,
      title: "เข้าใจลูกค้า",
      description: "กรณีศึกษา: ธุรกิจแอปจองคลินิก",
    },
    {
      icon: <Users className="h-12 w-12 text-cyan-500" />,
      title: "เพิ่มความพึงพอใจ",
      description: "กรณีศึกษา :ธุรกิจแอปจองโรงแรม",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 px-4 bg-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            วิทยาศาสตร์ข้อมูล = <span className="text-cyan-500">คุณค่าทางธุรกิจ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            ค้นพบวิธีที่วิทยาศาสตร์ข้อมูลสามารถเปลี่ยนข้อมูลของคุณให้เป็นมูลค่าทางธุรกิจที่จับต้องได้ คลิกที่แต่ละหัวข้อด้านล่างเพื่อดูกรณีศึกษา
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className={`transition-all duration-300 ${activeCard === index ? "ring-2 ring-cyan-500" : ""}`}
            >
              <Card
                className="h-full hover:border-cyan-500 cursor-pointer"
                onClick={() => {
                  setActiveCard(index)
                  if (index === 0) {
                    // ถ้าเป็นการ์ด "เพิ่มรายได้"
                    router.push("/increase-revenue")
                  } else if (index === 1) {
                    // ถ้าเป็นการ์ด "ลดต้นทุน"
                    router.push("/reduce-cost")
                  } else if (index === 2) {
                    // ถ้าเป็นการ์ด "ตัดสินใจอย่างชาญฉลาด"
                    router.push("/smart-decision")
                  } else if (index === 3) {
                    // ถ้าเป็นการ์ด "คาดการณ์อนาคต"
                    router.push("/forecast-future")
                  } else if (index === 4) {
                    // ถ้าเป็นการ์ด "เข้าใจลูกค้า"
                    router.push("/understand-customers")
                  }
                }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center group-hover:bg-cyan-50 transition-colors duration-300 relative overflow-hidden">
                  <div className="mb-4 mt-2 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ข้อมูลของคุณมีค่ามากกว่าที่คิด</h3>
              <p className="text-gray-600">
                ในยุคดิจิทัล ข้อมูลคือทรัพย์สินที่มีค่าที่สุดขององค์กร การใช้วิทยาศาสตร์ข้อมูลอย่างมีประสิทธิภาพ จะช่วยให้คุณค้นพบคุณค่าที่ซ่อนอยู่ในข้อมูลของคุณ
                และนำมาใช้เพื่อสร้างความได้เปรียบในการแข่งขัน
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-cyan-400 rounded-full opacity-40 animate-pulse animation-delay-300"></div>
                <div className="absolute inset-8 bg-cyan-300 rounded-full opacity-60 animate-pulse animation-delay-600"></div>
                <div className="absolute inset-12 bg-cyan-200 rounded-full opacity-80 animate-pulse animation-delay-900"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BrainCircuit className="h-16 w-16 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
