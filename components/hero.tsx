"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, BrainCircuit, LineChart, PieChart } from "lucide-react"

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIcon, setCurrentIcon] = useState(0)

  useEffect(() => {
    // Set visible after component mounts for entrance animation
    setIsVisible(true)

    // Rotate through icons for animation effect
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(iconInterval)
  }, [])

  const icons = [
    <BarChart3 key="bar" className="h-full w-full text-cyan-500" />,
    <LineChart key="line" className="h-full w-full text-cyan-500" />,
    <PieChart key="pie" className="h-full w-full text-cyan-500" />,
    <BrainCircuit key="brain" className="h-full w-full text-cyan-500" />,
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-cyan-500">อยากเข้าใจลูกค้า ?</span>เราช่วยใช้ข้อมูลให้เป็นเรื่องง่าย ไม่ต้องมีทีม Data ก็เริ่มได้เลย
            </h1>
            <p className="text-lg text-gray-600">
              เราคือทีม Data Science ของ Botnoi ที่ช่วยให้ธุรกิจเข้าใจลูกค้า ทำนายแนวโน้ม และตัดสินใจแม่นยำขึ้น ด้วย AI
              และการวิเคราะห์ข้อมูลเชิงลึก
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
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
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-transparent z-10"></div>
            <div
              className="relative w-full h-full"
              style={{
                transform: isHovering ? "scale(1.05) translateY(-5px)" : "scale(1) translateY(0)",
                transition: "transform 0.5s ease-out",
              }}
            >
              <Image
                src="/images/robot-mascot.png"
                alt="iBOTNOI AI Robot Mascot"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-12 h-12"
              >
                {icons[currentIcon]}
              </motion.div>
            </div>
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-8 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg z-20"
            >
              <p className="text-sm font-medium text-cyan-700">เปลี่ยนข้อมูลให้เป็นคุณค่าทางธุรกิจ</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
