import { Button } from "@/components/ui/button"
import { BarChart3, Database, BrainCircuit, ArrowRight } from "lucide-react"

export default function DashboardHeader() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              ทดลองใช้งานฟีเจอร์ใหม่
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              แดชบอร์ดโต้ตอบ<span className="text-cyan-200">วิทยาศาสตร์ข้อมูล</span>
            </h1>
            <p className="text-lg text-cyan-50">
              สัมผัสประสบการณ์การวิเคราะห์ข้อมูลแบบเรียลไทม์ ค้นพบข้อมูลเชิงลึกที่มีคุณค่า และทดลองใช้โมเดล AI ของเราได้ทันที
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">แดชบอร์ดและกราฟแบบเรียลไทม์</h3>
              <p className="text-cyan-100">ดูข้อมูลและแนวโน้มแบบเรียลไทม์ด้วยกราฟโต้ตอบที่ปรับแต่งได้ตามความต้องการของคุณ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ตารางข้อมูลลูกค้า</h3>
              <p className="text-cyan-100">ค้นหา กรอง และวิเคราะห์ข้อมูลลูกค้าได้อย่างง่ายดายด้วยเครื่องมือจัดการข้อมูลขั้นสูง</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-cyan-200 text-cyan-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">การจำลองและทดลอง</h3>
              <p className="text-cyan-100">ทดลองใช้โมเดล AI ของเราและดูผลลัพธ์ทันทีด้วยเครื่องมือจำลองที่ใช้งานง่าย</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-300 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-900 mb-2">เริ่มต้นใช้งานวันนี้</h3>
              <p className="text-cyan-800 mb-4">ค้นพบพลังของข้อมูลและเพิ่มประสิทธิภาพการตัดสินใจทางธุรกิจของคุณ</p>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50 w-full">ติดต่อเรา</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
