"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const clients = [
    {
      name: "บริษัท เทคโนวัน จำกัด",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "เทคโนโลยี",
    },
    {
      name: "ธนาคารไทยก้าวหน้า",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "การเงิน",
    },
    {
      name: "ห้างสรรพสินค้าทันสมัย",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "ค้าปลีก",
    },
    {
      name: "โรงพยาบาลสุขภาพดี",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "สุขภาพ",
    },
    {
      name: "บริษัท ขนส่งรวดเร็ว จำกัด",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "โลจิสติกส์",
    },
    {
      name: "บริษัท การศึกษาก้าวไกล จำกัด",
      logo: "/placeholder.svg?height=100&width=200",
      industry: "การศึกษา",
    },
  ]

  const testimonials = [
    {
      quote: "การใช้วิทยาศาสตร์ข้อมูลช่วยให้เราเข้าใจลูกค้าได้ดีขึ้นอย่างมาก ส่งผลให้ยอดขายเพิ่มขึ้น 35% ในปีที่ผ่านมา",
      author: "คุณสมศักดิ์ นวัตกรรม",
      position: "ประธานเจ้าหน้าที่บริหาร",
      company: "บริษัท เทคโนวัน จำกัด",
      rating: 5,
    },
    {
      quote: "โมเดลการพยากรณ์ของ iBOTNOI ช่วยให้เราวางแผนการเงินได้แม่นยำขึ้น ลดความเสี่ยงและเพิ่มผลกำไรได้อย่างมีนัยสำคัญ",
      author: "คุณนารี การเงิน",
      position: "ผู้อำนวยการฝ่ายการเงิน",
      company: "ธนาคารไทยก้าวหน้า",
      rating: 5,
    },
    {
      quote: "การแบ่งกลุ่มลูกค้าด้วย AI ช่วยให้เราสามารถนำเสนอสินค้าได้ตรงใจลูกค้ามากขึ้น ส่งผลให้อัตราการซื้อซ้ำเพิ่มขึ้น 28%",
      author: "คุณวิชัย การตลาด",
      position: "ผู้จัดการฝ่ายการตลาด",
      company: "ห้างสรรพสินค้าทันสมัย",
      rating: 4,
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
        duration: 0.4,
      },
    },
  }

  return (
    <section id="clients" className="py-16 px-4 bg-white" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ลูกค้าของเรา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราภูมิใจที่ได้ร่วมงานกับองค์กรชั้นนำในหลากหลายอุตสาหกรรม ช่วยให้พวกเขาใช้ประโยชน์จากข้อมูลเพื่อสร้างการเติบโตทางธุรกิจ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-lg p-4 flex items-center justify-center border hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-center">
                <div className="relative h-12 w-full mb-3">
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                </div>
                <p className="text-sm font-medium text-gray-800">{client.name}</p>
                <p className="text-xs text-gray-500">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold text-gray-900 text-center mb-8"
        >
          เสียงจากลูกค้าของเรา
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="h-full"
            >
              <Card className="h-full border-t-4 border-t-cyan-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="mb-4 text-cyan-500">
                    <Quote className="h-8 w-8 opacity-50" />
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-cyan-600 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
