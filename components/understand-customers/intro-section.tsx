"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">เข้าใจลูกค้าด้วย Data Analytics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            กรณีศึกษา: การวิเคราะห์ข้อมูลเพื่อเข้าใจสาเหตุที่ลูกค้าไม่กลับมาใช้บริการซ้ำ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">ธุรกิจ</h3>
            <p className="text-gray-700">แอปพลิเคชันสำหรับการจองคิวคลินิกความงามและสุขภาพ ที่ให้บริการลูกค้ากว่า 50,000 คนต่อเดือน</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">เป้าหมาย</h3>
            <p className="text-gray-700">
              ค้นหาสาเหตุที่ลูกค้าไม่กลับมาจองคิวซ้ำหลังจากใช้บริการครั้งแรก เพื่อปรับปรุงอัตราการกลับมาใช้บริการซ้ำ
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">วิธีที่ใช้</h3>
            <p className="text-gray-700">
              Text Analysis + Sentiment Analysis + Topic Modeling เพื่อวิเคราะห์ข้อมูลรีวิวและความคิดเห็นของลูกค้า
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ความท้าทายของธุรกิจ</h2>
          <p className="text-gray-700 mb-4">
            แอปพลิเคชันจองคิวคลินิกของเราประสบปัญหาอัตราการกลับมาใช้บริการซ้ำ (Retention Rate) ที่ต่ำกว่าเป้าหมาย โดยพบว่ามีลูกค้าเพียง 35%
            เท่านั้นที่กลับมาจองคิวซ้ำหลังจากใช้บริการครั้งแรก ซึ่งส่งผลกระทบต่อรายได้และการเติบโตของธุรกิจอย่างมีนัยสำคัญ
          </p>
          <p className="text-gray-700">
            เราต้องการเข้าใจสาเหตุที่แท้จริงว่าทำไมลูกค้าถึงไม่กลับมาใช้บริการซ้ำ
            โดยการวิเคราะห์ข้อมูลรีวิวและความคิดเห็นของลูกค้าที่มีต่อแอปพลิเคชันและบริการของคลินิก เพื่อนำไปสู่การปรับปรุงและพัฒนาที่ตรงจุด
          </p>
        </motion.div>
      </div>
    </section>
  )
}
