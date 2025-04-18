"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const team = [
    {
      name: "ดร. วินน์ BOTNOI",
      role: "ผู้ก่อตั้งและประธานเจ้าหน้าที่บริหาร",
      image: "/placeholder.svg?height=400&width=400",
      experience: "15+ ปีในด้านวิทยาศาสตร์ข้อมูลและ AI",
      motto: "ข้อมูลคือพลัง การวิเคราะห์คือปัญญา",
      linkedin: "#",
      twitter: "#",
      email: "somchai@ibotnoi.com",
    },
    {
      name: "Botnoi DS staff 1",
      role: "หัวหน้านักวิทยาศาสตร์ข้อมูล",
      image: "/placeholder.svg?height=400&width=400",
      experience: "12+ ปีในการพัฒนาโมเดล ML และ AI",
      motto: "ความซับซ้อนของข้อมูลคือความท้าทายที่น่าค้นหา",
      linkedin: "#",
      twitter: "#",
      email: "napa@ibotnoi.com",
    },
    {
      name: "Botnoi DS staff 2",
      role: "ผู้อำนวยการฝ่ายเทคโนโลยี",
      image: "/placeholder.svg?height=400&width=400",
      experience: "10+ ปีในการพัฒนาระบบ Big Data",
      motto: "เทคโนโลยีที่ดีที่สุดคือเทคโนโลยีที่คุณไม่รู้ว่ามันทำงานอยู่",
      linkedin: "#",
      twitter: "#",
      email: "wichai@ibotnoi.com",
    },
  ]

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="team" className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ทีมผู้เชี่ยวชาญของเรา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            พบกับทีมผู้เชี่ยวชาญด้านวิทยาศาสตร์ข้อมูลและ AI ที่พร้อมช่วยให้ธุรกิจของคุณเติบโตด้วยพลังของข้อมูล
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-r from-cyan-400 to-cyan-600">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover mix-blend-overlay opacity-90"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">ประสบการณ์:</span> {member.experience}
                  </p>
                  <p className="text-gray-600 italic mb-4">"{member.motto}"</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-500 hover:text-cyan-500 transition-colors"
                      aria-label={`LinkedIn ของ ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-500 hover:text-cyan-500 transition-colors"
                      aria-label={`Twitter ของ ${member.name}`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-cyan-500 transition-colors"
                      aria-label={`อีเมลของ ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 font-medium">
            ทีมของเรามีประสบการณ์รวมกันมากกว่า 10 ปีในด้านวิทยาศาสตร์ข้อมูลและ AI
          </p>
          <p className="text-gray-600 mt-2">พร้อมให้คำปรึกษาและช่วยให้ธุรกิจของคุณเติบโตด้วยพลังของข้อมูล</p>
        </motion.div>
      </div>
    </section>
  )
}
