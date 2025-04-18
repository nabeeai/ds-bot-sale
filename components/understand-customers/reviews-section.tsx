"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// ข้อมูลรีวิวจำลอง
const reviewsData = [
  {
    id: 1,
    text: "แอปใช้งานยาก กดจองคิวแล้วระบบค้าง ต้องเริ่มใหม่หลายรอบกว่าจะจองสำเร็จ",
    rating: 2,
    date: "15/03/2023",
    sentiment: "negative",
  },
  {
    id: 2,
    text: "หมอตรวจดีมาก แต่รอคิวนานมากทั้งที่จองมาแล้ว ระบบน่าจะจัดการเวลาให้ดีกว่านี้",
    rating: 3,
    date: "22/03/2023",
    sentiment: "neutral",
  },
  {
    id: 3,
    text: "พนักงานต้อนรับไม่ค่อยเป็นมิตร ทำให้รู้สึกไม่อยากกลับไปอีก แม้ว่าการรักษาจะดี",
    rating: 2,
    date: "05/04/2023",
    sentiment: "negative",
  },
  {
    id: 4,
    text: "แอปแจ้งเตือนผิดพลาด ส่งการแจ้งเตือนผิดวัน ทำให้พลาดนัด",
    rating: 1,
    date: "12/04/2023",
    sentiment: "negative",
  },
  {
    id: 5,
    text: "บริการโดยรวมก็โอเค แต่ราคาแพงเกินไปเมื่อเทียบกับคลินิกอื่น",
    rating: 3,
    date: "20/04/2023",
    sentiment: "neutral",
  },
  {
    id: 6,
    text: "หมอให้คำแนะนำดีมาก แต่แอปมีปัญหาตอนชำระเงิน ต้องจ่ายที่คลินิกแทน",
    rating: 3,
    date: "28/04/2023",
    sentiment: "neutral",
  },
]

export default function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()
  const [visibleReviews, setVisibleReviews] = useState(3)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const showMoreReviews = () => {
    setVisibleReviews(reviewsData.length)
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800"
      case "neutral":
        return "bg-yellow-100 text-yellow-800"
      case "negative":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">เก็บข้อมูลรีวิวลูกค้า</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เราได้รวบรวมข้อมูลรีวิวและความคิดเห็นของลูกค้าจากหลายช่องทาง เพื่อนำมาวิเคราะห์หาสาเหตุที่ลูกค้าไม่กลับมาใช้บริการซ้ำ
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
          className="mb-8 bg-cyan-50 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">แหล่งที่มาของข้อมูล</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-cyan-700">รีวิวในแอปพลิเคชัน</p>
              <p className="text-gray-600">1,245 รีวิว</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-cyan-700">แบบสอบถามหลังใช้บริการ</p>
              <p className="text-gray-600">876 ตอบกลับ</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-cyan-700">ความคิดเห็นบน Social Media</p>
              <p className="text-gray-600">532 ความคิดเห็น</p>
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6">ตัวอย่างรีวิวลูกค้า</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsData.slice(0, visibleReviews).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getSentimentColor(review.sentiment)}`}>
                        {review.sentiment === "positive"
                          ? "เชิงบวก"
                          : review.sentiment === "neutral"
                            ? "เป็นกลาง"
                            : "เชิงลบ"}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{review.text}</p>
                    <p className="text-sm text-gray-500">วันที่: {review.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {visibleReviews < reviewsData.length && (
            <div className="text-center mt-8">
              <button
                onClick={showMoreReviews}
                className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
              >
                ดูรีวิวเพิ่มเติม
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
