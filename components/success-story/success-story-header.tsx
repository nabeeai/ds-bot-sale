"use client"

import { Button } from "@/components/ui/button"
import { Users, TrendingDown, BrainCircuit } from "lucide-react"

export default function SuccessStoryHeader() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              กรณีศึกษาความสำเร็จ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ลด<span className="text-cyan-200">การลาออกของพนักงานใหม่</span> ด้วยวิทยาศาสตร์ข้อมูล
            </h1>
            <p className="text-lg text-cyan-50">
              ดูวิธีที่เราใช้การวิเคราะห์ข้อมูลขั้นสูงเพื่อลดอัตราการลาออกของพนักงานใหม่จาก 28% เหลือเพียง 12% ภายใน 90 วันแรก
              ช่วยประหยัดค่าใช้จ่ายกว่า 11 ล้านบาทต่อปี
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">อัตราการลาออกสูง</h3>
              <p className="text-cyan-100">28% ของพนักงานใหม่ลาออกภายใน 90 วันแรก ทำให้เกิดต้นทุนสูงและกระทบต่อประสิทธิภาพ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ผลลัพธ์ที่น่าประทับใจ</h3>
              <p className="text-cyan-100">ลดอัตราการลาออกเหลือเพียง 12% และประหยัดค่าใช้จ่ายกว่า 11 ล้านบาทต่อปี</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">โมเดลการเรียนรู้ของเครื่อง</h3>
              <p className="text-cyan-100">ใช้อัลกอริทึมการเรียนรู้ของเครื่องเพื่อทำนายความเสี่ยงในการลาออกของพนักงานใหม่</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-300 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-900 mb-2">สนใจใช้บริการ?</h3>
              <p className="text-cyan-800 mb-4">ค้นพบวิธีที่เราสามารถช่วยธุรกิจของคุณแก้ปัญหาด้วยวิทยาศาสตร์ข้อมูล</p>
              <Button
                className="bg-white text-cyan-600 hover:bg-cyan-50 w-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                ติดต่อเรา
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
