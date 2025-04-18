"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function SentimentAnalysisSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // ข้อมูลสำหรับ Pie Chart
  const sentimentData = {
    labels: ["เชิงลบ", "เป็นกลาง", "เชิงบวก"],
    datasets: [
      {
        data: [58, 27, 15],
        backgroundColor: ["#ef4444", "#f59e0b", "#10b981"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  }

  // ตั้งค่าสำหรับ Pie Chart
  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "Prompt, sans-serif",
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = context.raw || 0
            const total = context.dataset.data.reduce((acc: number, data: number) => acc + data, 0)
            const percentage = ((value as number) / total) * 100
            return `${label}: ${value} รีวิว (${percentage.toFixed(1)}%)`
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  }

  // ข้อมูลเพิ่มเติมเกี่ยวกับความรู้สึกของลูกค้า
  const sentimentDetails = [
    {
      type: "เชิงลบ",
      percentage: "58%",
      count: "1,542 รีวิว",
      color: "bg-red-500",
      topics: ["ปัญหาการใช้งานแอปพลิเคชัน", "การรอคิวนาน", "พนักงานไม่เป็นมิตร", "ระบบแจ้งเตือนผิดพลาด", "ราคาไม่คุ้มค่า"],
    },
    {
      type: "เป็นกลาง",
      percentage: "27%",
      count: "717 รีวิว",
      color: "bg-yellow-500",
      topics: ["บริการโดยรวมพอใช้ได้", "การรักษาดีแต่มีปัญหาอื่น", "ราคาสูงแต่คุณภาพตามมาตรฐาน", "รอนานแต่ผลการรักษาดี"],
    },
    {
      type: "เชิงบวก",
      percentage: "15%",
      count: "394 รีวิว",
      color: "bg-green-500",
      topics: ["แพทย์ให้คำแนะนำดี", "ผลการรักษาน่าพอใจ", "สถานที่สะอาด", "อุปกรณ์ทันสมัย"],
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">การวิเคราะห์ความรู้สึกของลูกค้า</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เราได้วิเคราะห์ความรู้สึกของลูกค้าจากรีวิวทั้งหมด เพื่อเข้าใจทัศนคติโดยรวมที่มีต่อบริการของเรา
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">สัดส่วนความรู้สึกของลูกค้า</h3>
            <div className="h-[300px] flex items-center justify-center">
              <Pie data={sentimentData} options={options} />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">ข้อค้นพบสำคัญ</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
                <p className="font-medium text-gray-800 mb-2">ความรู้สึกเชิงลบสูงถึง 58%</p>
                <p className="text-gray-700">
                  สัดส่วนความรู้สึกเชิงลบที่สูงมากเป็นสัญญาณอันตรายที่ชี้ให้เห็นว่าลูกค้าส่วนใหญ่ไม่พึงพอใจกับประสบการณ์การใช้บริการ
                  ซึ่งเป็นสาเหตุหลักที่ทำให้ไม่กลับมาใช้บริการซ้ำ
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500">
                <p className="font-medium text-gray-800 mb-2">ความรู้สึกเป็นกลาง 27%</p>
                <p className="text-gray-700">
                  ลูกค้าที่มีความรู้สึกเป็นกลางมักจะชื่นชมบางส่วนของบริการ แต่ยังมีประเด็นที่ไม่พอใจ ทำให้ไม่แน่ใจว่าจะกลับมาใช้บริการอีกหรือไม่
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                <p className="font-medium text-gray-800 mb-2">ความรู้สึกเชิงบวกเพียง 15%</p>
                <p className="text-gray-700">
                  สัดส่วนความรู้สึกเชิงบวกที่น้อยมากแสดงให้เห็นว่ามีลูกค้าเพียงส่วนน้อยเท่านั้นที่พึงพอใจกับบริการโดยรวม
                  ซึ่งสอดคล้องกับอัตราการกลับมาใช้บริการซ้ำที่ต่ำ
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">รายละเอียดความรู้สึกของลูกค้า</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sentimentDetails.map((detail, index) => (
              <motion.div
                key={detail.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-full h-2 ${detail.color} rounded-full mb-4`}></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{detail.type}</h4>
                    <div className="flex justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-800">{detail.percentage}</span>
                      <span className="text-gray-600">{detail.count}</span>
                    </div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">ประเด็นหลักที่พูดถึง:</h5>
                    <ul className="space-y-1">
                      {detail.topics.map((topic, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className={`text-${detail.color.split("-")[1]}-500 mr-2`}>•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
