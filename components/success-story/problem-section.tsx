import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function ProblemSection() {
  return (
    <section id="problem-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ปัญหาที่ต้องการแก้ไข</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          บริษัทชั้นนำในประเทศไทยกำลังเผชิญกับปัญหาอัตราการลาออกของพนักงานใหม่สูงถึง 28% ภายใน 90 วันแรกของการทำงาน
          ส่งผลให้เกิดต้นทุนมหาศาลและกระทบต่อประสิทธิภาพการดำเนินงาน
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">สถานการณ์ก่อนใช้วิทยาศาสตร์ข้อมูล</h3>
            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="bg-white rounded-md p-3 shadow-sm">
                  <div className="font-medium text-gray-800">อัตราการลาออกสูงถึง 28%</div>
                  <p className="text-sm text-gray-600">พนักงานใหม่ 28 จาก 100 คนลาออกภายใน 90 วันแรก</p>
                </li>
                <li className="bg-white rounded-md p-3 shadow-sm">
                  <div className="font-medium text-gray-800">ต้นทุนการสูญเสียสูง</div>
                  <p className="text-sm text-gray-600">ต้นทุนการจ้างงานเฉลี่ย 150,000 บาทต่อคน (4,700 ดอลลาร์)</p>
                </li>
                <li className="bg-white rounded-md p-3 shadow-sm">
                  <div className="font-medium text-gray-800">ความเสียหายรายปี</div>
                  <p className="text-sm text-gray-600">112 คนลาออกต่อปี คิดเป็นมูลค่า 17.4 ล้านบาท</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">ความท้าทายของฝ่าย HR</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-cyan-500 mr-3" />
                    <p className="text-gray-700">ต้องการลดต้นทุนการสูญเสียที่สูงถึง 17.4 ล้านบาทต่อปี</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
