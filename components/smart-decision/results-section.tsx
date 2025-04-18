"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock } from "lucide-react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

export default function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Sample data for results
  const resultsData = {
    labels: ["ก่อนใช้ระบบ", "หลังใช้ระบบ"],
    datasets: [
      {
        label: "ยอดขาย (ล้านบาท/เดือน)",
        data: [45, 59.4],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
      },
      {
        label: "สินค้าค้างสต็อก (%)",
        data: [25, 14.5],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "เวลาในการตัดสินใจ (วัน)",
        data: [4, 0.6],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ผลลัพธ์ที่ได้</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            หลังจากนำระบบ Data Pipeline และ Dashboard ไปใช้เป็นเวลา 6 เดือน
            ธุรกิจค้าส่งและคลังสินค้าได้เห็นการเปลี่ยนแปลงที่สำคัญในหลายด้าน
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-cyan-500" />
                  เพิ่มยอดขาย
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-500">+32%</div>
                <p className="text-gray-600 text-sm mt-1">
                  จากการตัดสินใจที่รวดเร็วและแม่นยำ ทำให้สามารถตอบสนองต่อความต้องการของตลาดได้ทันท่วงที
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <TrendingDown className="h-4 w-4 mr-2 text-cyan-500" />
                  ลดสินค้าค้างสต็อก
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-500">-42%</div>
                <p className="text-gray-600 text-sm mt-1">
                  จากการวิเคราะห์ข้อมูลการขายและแนวโน้มตลาดแบบเรียลไทม์ ทำให้สามารถบริหารสินค้าคงคลังได้อย่างมีประสิทธิภาพ
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-cyan-500" />
                  ลดเวลาในการตัดสินใจ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-500">-85%</div>
                <p className="text-gray-600 text-sm mt-1">
                  จากเดิมใช้เวลา 3-5 วัน เหลือเพียง 1-2 ชั่วโมง ช่วยให้สามารถตอบสนองต่อการเปลี่ยนแปลงของตลาดได้อย่างรวดเร็ว
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>เปรียบเทียบผลลัพธ์ก่อนและหลังใช้ระบบ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <Bar data={resultsData} options={{ ...options, maintainAspectRatio: false }} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>ประโยชน์ทางธุรกิจ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <TrendingUp className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">เพิ่มรายได้และกำไร</h4>
                      <p className="text-gray-600">
                        ยอดขายเพิ่มขึ้น 32% และกำไรสุทธิเพิ่มขึ้น 28% จากการตัดสินใจที่รวดเร็วและแม่นยำ
                        ทำให้สามารถตอบสนองต่อความต้องการของตลาดได้ทันท่วงที
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <TrendingDown className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">ลดต้นทุนการดำเนินงาน</h4>
                      <p className="text-gray-600">
                        ลดต้นทุนการจัดเก็บสินค้าลง 35% จากการลดสินค้าค้างสต็อก และลดต้นทุนการขนส่งลง 18%
                        จากการวางแผนการขนส่งที่มีประสิทธิภาพมากขึ้น
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <Clock className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">เพิ่มประสิทธิภาพการทำงาน</h4>
                      <p className="text-gray-600">
                        ลดเวลาในการทำรายงานลง 75% และลดเวลาในการตัดสินใจลง 85%
                        ทำให้ทีมงานสามารถใช้เวลาไปกับการวิเคราะห์และวางแผนกลยุทธ์ได้มากขึ้น
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>ความคิดเห็นจากผู้ใช้งาน</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                        <span className="text-lg font-semibold">ส</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">สมชาย วงศ์ไพศาล</h4>
                        <p className="text-sm text-gray-500">ประธานเจ้าหน้าที่บริหาร</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "ระบบนี้เปลี่ยนวิธีการทำงานของเราไปอย่างสิ้นเชิง ทำให้เราสามารถตัดสินใจได้อย่างรวดเร็วและแม่นยำ
                      ส่งผลให้ธุรกิจเติบโตอย่างก้าวกระโดดในช่วง 6 เดือนที่ผ่านมา"
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                        <span className="text-lg font-semibold">น</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">นภา สุขใจ</h4>
                        <p className="text-sm text-gray-500">ผู้จัดการฝ่ายคลังสินค้า</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "การมีข้อมูลแบบเรียลไทม์ช่วยให้เราสามารถบริหารสินค้าคงคลังได้อย่างมีประสิทธิภาพมากขึ้น
                      ลดปัญหาสินค้าขาดสต็อกและสินค้าค้างสต็อกได้อย่างมาก"
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="bg-cyan-100 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                        <span className="text-lg font-semibold">ว</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">วิชัย มั่งมี</h4>
                        <p className="text-sm text-gray-500">ผู้จัดการฝ่ายขาย</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "Dashboard ช่วยให้ทีมขายของเราสามารถติดตามผลการดำเนินงานได้แบบเรียลไทม์ และปรับกลยุทธ์การขายได้อย่างรวดเร็ว
                      ส่งผลให้ยอดขายเพิ่มขึ้นอย่างต่อเนื่อง"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
