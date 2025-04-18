"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function TopicModelingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // ข้อมูลสำหรับ Bar Chart
  const topicData = {
    labels: ["ปัญหาแอปพลิเคชัน", "การรอคิวนาน", "พนักงานไม่เป็นมิตร", "ราคาไม่คุ้มค่า", "ระบบแจ้งเตือนผิดพลาด", "ปัญหาการชำระเงิน"],
    datasets: [
      {
        label: "จำนวนรีวิว",
        data: [423, 387, 298, 276, 243, 215],
        backgroundColor: [
          "rgba(8, 145, 178, 0.8)",
          "rgba(14, 116, 144, 0.8)",
          "rgba(21, 94, 117, 0.8)",
          "rgba(22, 78, 99, 0.8)",
          "rgba(8, 51, 68, 0.8)",
          "rgba(6, 182, 212, 0.8)",
        ],
        borderColor: [
          "rgb(8, 145, 178)",
          "rgb(14, 116, 144)",
          "rgb(21, 94, 117)",
          "rgb(22, 78, 99)",
          "rgb(8, 51, 68)",
          "rgb(6, 182, 212)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // ตั้งค่าสำหรับ Bar Chart
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `จำนวน: ${context.raw} รีวิว`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "จำนวนรีวิว",
          font: {
            family: "Prompt, sans-serif",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "หัวข้อปัญหา",
          font: {
            family: "Prompt, sans-serif",
          },
        },
      },
    },
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index
        setSelectedTopic(topicData.labels[index])
      }
    },
  }

  // ข้อมูลรายละเอียดของแต่ละหัวข้อ
  const topicDetails: Record<string, { description: string; examples: string[] }> = {
    ปัญหาแอปพลิเคชัน: {
      description: "ลูกค้าประสบปัญหาในการใช้งานแอปพลิเคชัน เช่น แอปค้าง ระบบล่ม หรือการจองคิวที่ยุ่งยาก",
      examples: [
        "แอปค้างบ่อยมาก กดจองคิวแล้วต้องเริ่มใหม่หลายรอบ",
        "ใช้งานยากมาก ไม่เข้าใจว่าต้องกดตรงไหน",
        "แอปล่มตอนกำลังจองคิว ทำให้ต้องเริ่มใหม่ทั้งหมด",
        "อินเตอร์เฟซไม่เป็นมิตรกับผู้ใช้ ทำให้ใช้งานยาก",
      ],
    },
    การรอคิวนาน: {
      description: "ลูกค้าต้องรอคิวนานกว่าเวลาที่จองไว้ ทำให้เสียเวลาและเกิดความไม่พอใจ",
      examples: [
        "จองคิว 14.00 น. แต่ได้เข้าพบหมอ 16.30 น.",
        "รอนานมาก ทั้งที่จองคิวล่วงหน้าแล้ว",
        "คิวเยอะเกินไป ทำให้ต้องรอนานมาก",
        "ระบบจัดการคิวแย่มาก ทำให้ต้องรอนานกว่าที่ควรจะเป็น",
      ],
    },
    พนักงานไม่เป็นมิตร: {
      description: "ลูกค้าไม่พอใจกับการให้บริการของพนักงานที่ไม่เป็นมิตรและขาดการใส่ใจ",
      examples: [
        "พนักงานต้อนรับพูดจาไม่ดี ทำให้รู้สึกไม่อยากกลับไปอีก",
        "พนักงานดูไม่เต็มใจให้บริการ ตอบคำถามแบบขอไปที",
        "พนักงานหน้าตาไม่ยิ้มแย้ม ทำให้รู้สึกไม่ประทับใจ",
        "พนักงานใช้โทรศัพท์ขณะให้บริการ ดูไม่เป็นมืออาชีพ",
      ],
    },
    ราคาไม่คุ้มค่า: {
      description: "ลูกค้ารู้สึกว่าค่าบริการสูงเกินไปเมื่อเทียบกับคุณภาพการบริการที่ได้รับ",
      examples: [
        "ราคาแพงเกินไปเมื่อเทียบกับคลินิกอื่น",
        "คุณภาพการบริการไม่คุ้มกับราคาที่จ่ายไป",
        "เสียเงินเยอะแต่ต้องรอนาน ไม่คุ้มค่าเลย",
        "ค่าบริการสูงแต่พนักงานให้บริการไม่ดี",
      ],
    },
    ระบบแจ้งเตือนผิดพลาด: {
      description: "ระบบแจ้งเตือนของแอปพลิเคชันทำงานผิดพลาด ส่งการแจ้งเตือนผิดวันหรือเวลา",
      examples: [
        "แอปแจ้งเตือนผิดวัน ทำให้พลาดนัด",
        "ไม่ได้รับการแจ้งเตือนก่อนถึงวันนัด",
        "แจ้งเตือนซ้ำหลายครั้งจนรำคาญ",
        "แจ้งเตือนผิดเวลา ทำให้ไปถึงคลินิกผิดเวลา",
      ],
    },
    ปัญหาการชำระเงิน: {
      description: "ลูกค้าประสบปัญหาในขั้นตอนการชำระเงินผ่านแอปพลิเคชัน",
      examples: [
        "ระบบชำระเงินในแอปมีปัญหา ต้องจ่ายที่คลินิกแทน",
        "ชำระเงินผ่านแอปแล้วแต่ระบบไม่บันทึก ต้องจ่ายซ้ำ",
        "ตัดเงินจากบัตรแล้วแต่แอปแจ้งว่าชำระไม่สำเร็จ",
        "ไม่มีตัวเลือกการชำระเงินที่หลากหลาย",
      ],
    },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">การวิเคราะห์หัวข้อปัญหา (Topic Modeling)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เราได้วิเคราะห์และจัดกลุ่มรีวิวของลูกค้าเป็นหัวข้อปัญหาหลัก เพื่อให้เข้าใจประเด็นที่ลูกค้าพูดถึงมากที่สุด
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">หัวข้อปัญหาหลักที่ลูกค้าพูดถึง</h3>
          <p className="text-gray-600 mb-6 text-center">คลิกที่แท่งกราฟเพื่อดูรายละเอียดเพิ่มเติมของแต่ละหัวข้อ</p>
          <div className="h-[400px] w-full">
            <Bar data={topicData} options={options} />
          </div>
        </motion.div>

        {selectedTopic && topicDetails[selectedTopic] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cyan-50 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">รายละเอียด: {selectedTopic}</h3>
            <p className="text-gray-700 mb-4">{topicDetails[selectedTopic].description}</p>
            <h4 className="font-medium text-gray-800 mb-2">ตัวอย่างความคิดเห็นของลูกค้า:</h4>
            <ul className="space-y-2">
              {topicDetails[selectedTopic].examples.map((example, i) => (
                <li key={i} className="bg-white p-3 rounded-md shadow-sm text-gray-700">
                  "{example}"
                </li>
              ))}
            </ul>
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
                    ปัญหาแอปพลิเคชันเป็นประเด็นที่ลูกค้าพูดถึงมากที่สุด (423 รีวิว)
                    แสดงให้เห็นว่าประสบการณ์การใช้งานแอปเป็นปัจจัยสำคัญที่สุดที่ทำให้ลูกค้าไม่กลับมาใช้บริการซ้ำ
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-700">
                    การรอคิวนานเป็นประเด็นอันดับสอง (387 รีวิว) ซึ่งสะท้อนให้เห็นถึงปัญหาในการบริหารจัดการเวลาและคิวของคลินิก
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-700">
                    ปัญหาพนักงานไม่เป็นมิตรเป็นประเด็นอันดับสาม (298 รีวิว) ซึ่งเป็นปัจจัยสำคัญที่ส่งผลต่อความประทับใจโดยรวมของลูกค้า
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">การวิเคราะห์เบื้องต้น</h3>
              <p className="text-gray-700 mb-4">
                จากการวิเคราะห์ Topic Modeling พบว่าปัญหาหลักที่ทำให้ลูกค้าไม่กลับมาใช้บริการซ้ำสามารถแบ่งได้เป็น 3 กลุ่มใหญ่:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">ปัญหาด้านเทคโนโลยี</span> - ได้แก่ ปัญหาแอปพลิเคชัน ระบบแจ้งเตือนผิดพลาด
                  และปัญหาการชำระเงิน
                </li>
                <li>
                  <span className="font-medium">ปัญหาด้านการบริการ</span> - ได้แก่ การรอคิวนานและพนักงานไม่เป็นมิตร
                </li>
                <li>
                  <span className="font-medium">ปัญหาด้านความคุ้มค่า</span> - ได้แก่ ราคาไม่คุ้มค่ากับบริการที่ได้รับ
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
