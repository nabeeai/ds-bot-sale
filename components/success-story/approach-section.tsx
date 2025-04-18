"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Database, FileSpreadsheet, BarChart3, BrainCircuit, Users } from "lucide-react"

export default function ApproachSection() {
  const [activeTab, setActiveTab] = useState("data-collection")

  return (
    <section id="approach-section" className="bg-gray-50 py-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">วิธีการแก้ปัญหาด้วยวิทยาศาสตร์ข้อมูล</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          เราใช้กระบวนการวิทยาศาสตร์ข้อมูลเพื่อวิเคราะห์และสร้างโมเดลทำนายความเสี่ยงในการลาออกของพนักงานใหม่ภายใน 90 วันแรก
          เพื่อลดอัตราการลาออกและประหยัดต้นทุนกว่า 17 ล้านบาทต่อปี
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8">
        <Card
          className={`cursor-pointer transition-all ${activeTab === "data-collection" ? "border-cyan-500 shadow-md" : ""}`}
          onClick={() => setActiveTab("data-collection")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Database className="h-4 w-4 mr-2 text-cyan-500" />
              1. การเก็บข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">รวบรวมข้อมูลพนักงานใหม่ย้อนหลัง 2 ปี และปัจจัยที่เกี่ยวข้อง</p>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${activeTab === "data-analysis" ? "border-cyan-500 shadow-md" : ""}`}
          onClick={() => setActiveTab("data-analysis")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <FileSpreadsheet className="h-4 w-4 mr-2 text-cyan-500" />
              2. การวิเคราะห์ข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">วิเคราะห์ปัจจัยที่ส่งผลต่อการลาออกในช่วง 90 วันแรก</p>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${activeTab === "model-building" ? "border-cyan-500 shadow-md" : ""}`}
          onClick={() => setActiveTab("model-building")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <BrainCircuit className="h-4 w-4 mr-2 text-cyan-500" />
              3. การสร้างโมเดล
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">พัฒนาโมเดล AI ทำนายความเสี่ยงในการลาออกของพนักงานใหม่</p>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer transition-all ${activeTab === "implementation" ? "border-cyan-500 shadow-md" : ""}`}
          onClick={() => setActiveTab("implementation")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2 text-cyan-500" />
              4. การนำไปใช้
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500">บูรณาการโมเดลเข้ากับกระบวนการคัดเลือกและดูแลพนักงานใหม่</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="data-collection" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">การเก็บข้อมูล</h3>
                  <p className="text-gray-600 mb-4">
                    เราเริ่มต้นด้วยการรวบรวมข้อมูลย้อนหลัง 2 ปีเกี่ยวกับพนักงานใหม่ทั้งหมด 850 คน โดยมุ่งเน้นที่:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>ข้อมูลประชากรศาสตร์ (อายุ, เพศ, ระดับการศึกษา, ที่อยู่, ระยะทางจากที่ทำงาน)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>ประวัติการทำงาน (ประสบการณ์, ตำแหน่งก่อนหน้า, ระยะเวลาในแต่ละงาน)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>ข้อมูลการสัมภาษณ์ (คะแนนการสัมภาษณ์, ความเห็นของผู้สัมภาษณ์)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>ข้อมูลการลาออก (ระยะเวลาการทำงาน, เหตุผลในการลาออก)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>ข้อมูลการปรับตัวในช่วง 90 วันแรก (การเข้าร่วมกิจกรรม, การมีส่วนร่วมในทีม)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">ข้อมูลสำคัญที่พบ</h4>
                  <ul className="space-y-3">
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
                    <li className="bg-white rounded-md p-3 shadow-sm">
                      <div className="font-medium text-gray-800">ช่วงเวลาวิกฤต</div>
                      <p className="text-sm text-gray-600">45% ของการลาออกเกิดขึ้นในช่วง 30 วันแรก</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data-analysis" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">การวิเคราะห์ข้อมูล</h3>
                  <p className="text-gray-600 mb-4">
                    หลังจากรวบรวมข้อมูลแล้ว เราได้ทำการวิเคราะห์เพื่อค้นหาปัจจัยที่มีความสัมพันธ์กับการลาออกในช่วง 90 วันแรก:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>การวิเคราะห์สหสัมพันธ์ระหว่างตัวแปรต่างๆ กับการลาออกในช่วง 90 วันแรก</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>การวิเคราะห์ความแปรปรวน (ANOVA) เพื่อเปรียบเทียบกลุ่มพนักงานที่ลาออกและไม่ลาออก</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>การวิเคราะห์องค์ประกอบ (Factor Analysis) เพื่อลดมิติของข้อมูล</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>การวิเคราะห์การอยู่รอด (Survival Analysis) เพื่อศึกษาระยะเวลาก่อนการลาออก</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-3">ปัจจัยสำคัญที่ส่งผลต่อการลาออก</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">ระยะทางจากที่พักถึงที่ทำงาน (85%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">ความสอดคล้องกับวัฒนธรรมองค์กร (78%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">ระยะเวลาในงานก่อนหน้า (72%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">การมีส่วนร่วมในกิจกรรมองค์กร (65%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="ml-3 text-sm font-medium">ความสัมพันธ์กับหัวหน้างาน (60%)</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">น่าสนใจ:</span> ปัจจัยที่คาดว่าจะมีผลสูง เช่น เงินเดือน และระดับการศึกษา
                      กลับมีความสัมพันธ์กับการลาออกน้อยกว่าที่คาดไว้
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="model-building" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">การสร้างโมเดล</h3>
                  <p className="text-gray-600 mb-4">
                    จากข้อมูลและการวิเคราะห์ เราได้พัฒนาโมเดลการเรียนรู้ของเครื่องเพื่อทำนายความเสี่ยงที่พนักงานใหม่จะลาออกภายใน 90 วันแรก:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        1
                      </span>
                      <span>แบ่งข้อมูลเป็นชุดฝึกสอน (70%) และชุดทดสอบ (30%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        2
                      </span>
                      <span>
                        ทดลองใช้อัลกอริทึมหลายแบบ: Random Forest, Gradient Boosting, Logistic Regression, Neural Networks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        3
                      </span>
                      <span>ปรับแต่งพารามิเตอร์ด้วย Grid Search และ Cross-Validation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        4
                      </span>
                      <span>เลือกโมเดล Gradient Boosting ที่ให้ความแม่นยำสูงสุด (AUC = 0.87)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        5
                      </span>
                      <span>ตรวจสอบความเอนเอียงของโมเดลและปรับแก้เพื่อความเป็นธรรม</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">ประสิทธิภาพของโมเดล</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="text-sm text-gray-500">ความแม่นยำ (Accuracy)</div>
                      <div className="text-2xl font-bold text-cyan-500">85%</div>
                    </div>
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="text-sm text-gray-500">ความไว (Sensitivity)</div>
                      <div className="text-2xl font-bold text-cyan-500">82%</div>
                    </div>
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="text-sm text-gray-500">ความจำเพาะ (Specificity)</div>
                      <div className="text-2xl font-bold text-cyan-500">88%</div>
                    </div>
                    <div className="bg-white rounded-md p-4 shadow-sm">
                      <div className="text-sm text-gray-500">AUC-ROC</div>
                      <div className="text-2xl font-bold text-cyan-500">0.87</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-md p-4 shadow-sm">
                    <h5 className="font-medium text-gray-800 mb-2">ตัวแปรสำคัญในโมเดล</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ระยะทางจากที่พักถึงที่ทำงาน (Feature Importance: 0.18)</li>
                      <li>• ความสอดคล้องกับวัฒนธรรมองค์กร (Feature Importance: 0.15)</li>
                      <li>• ระยะเวลาในงานก่อนหน้า (Feature Importance: 0.12)</li>
                      <li>• การมีส่วนร่วมในกิจกรรมองค์กร (Feature Importance: 0.10)</li>
                      <li>• ความสัมพันธ์กับหัวหน้างาน (Feature Importance: 0.09)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">การนำไปใช้</h3>
                  <p className="text-gray-600 mb-4">
                    เราได้บูรณาการโมเดลเข้ากับกระบวนการทำงานของฝ่ายทรัพยากรบุคคลผ่านขั้นตอนต่อไปนี้:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        1
                      </span>
                      <span>พัฒนาแดชบอร์ดสำหรับฝ่าย HR ที่แสดงคะแนนความเสี่ยงในการลาออกของพนักงานใหม่</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        2
                      </span>
                      <span>ปรับปรุงกระบวนการคัดเลือกโดยเพิ่มการประเมินปัจจัยที่มีผลต่อการลาออก</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        3
                      </span>
                      <span>สร้างโปรแกรมการดูแลพนักงานใหม่เฉพาะบุคคลตามระดับความเสี่ยง</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                        4
                      </span>
                      <span>ฝึกอบรมผู้จัดการและพี่เลี้ยงให้เข้าใจวิธีการใช้ข้อมูลจากโมเดลเพื่อลดความเสี่ยง</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-3">ตัวอย่างการใช้งานในกระบวนการดูแลพนักงานใหม่</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">พนักงานใหม่: นายสมชาย ใจดี</h5>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          ความเสี่ยงต่ำ: 15%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">ระยะทาง:</span> 5 กม.
                        </div>
                        <div>
                          <span className="text-gray-500">งานก่อนหน้า:</span> 3 ปี
                        </div>
                        <div>
                          <span className="text-gray-500">วัฒนธรรม:</span>
                          <span className="text-green-600"> สอดคล้องสูง</span>
                        </div>
                        <div>
                          <span className="text-gray-500">การมีส่วนร่วม:</span>
                          <span className="text-green-600"> สูง</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">พนักงานใหม่: นางสาวสมหญิง รักงาน</h5>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          ความเสี่ยงปานกลาง: 45%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">ระยะทาง:</span> 25 กม.
                        </div>
                        <div>
                          <span className="text-gray-500">งานก่อนหน้า:</span> 1 ปี
                        </div>
                        <div>
                          <span className="text-gray-500">วัฒนธรรม:</span>
                          <span className="text-green-600"> สอดคล้องดี</span>
                        </div>
                        <div>
                          <span className="text-gray-500">การมีส่วนร่วม:</span>
                          <span className="text-yellow-600"> ปานกลาง</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">พนักงานใหม่: นายวิชัย เปลี่ยนงานบ่อย</h5>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          ความเสี่ยงสูง: 75%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">ระยะทาง:</span> 40 กม.
                        </div>
                        <div>
                          <span className="text-gray-500">งานก่อนหน้า:</span> 6 เดือน
                        </div>
                        <div>
                          <span className="text-gray-500">วัฒนธรรม:</span>
                          <span className="text-red-600"> ไม่สอดคล้อง</span>
                        </div>
                        <div>
                          <span className="text-gray-500">การมีส่วนร่วม:</span>
                          <span className="text-red-600"> ต่ำ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row rounded-md shadow-sm gap-2 sm:gap-0 w-full sm:w-auto" role="group">
          <Button
            variant={activeTab === "data-collection" ? "default" : "outline"}
            className={`${activeTab === "data-collection" ? "bg-cyan-500 hover:bg-cyan-600" : ""} 
                 ${activeTab === "data-collection" ? "" : "border-b sm:border-b-0 sm:border-r"} 
                 rounded-md sm:rounded-r-none sm:rounded-l-md w-full sm:w-auto`}
            onClick={() => setActiveTab("data-collection")}
          >
            <Database className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">การเก็บข้อมูล</span>
          </Button>
          <Button
            variant={activeTab === "data-analysis" ? "default" : "outline"}
            className={`${activeTab === "data-analysis" ? "bg-cyan-500 hover:bg-cyan-600" : ""} 
                 ${activeTab === "data-analysis" ? "" : "border-b sm:border-b-0 sm:border-r"} 
                 rounded-md sm:rounded-none w-full sm:w-auto`}
            onClick={() => setActiveTab("data-analysis")}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">การวิเคราะห์</span>
          </Button>
          <Button
            variant={activeTab === "model-building" ? "default" : "outline"}
            className={`${activeTab === "model-building" ? "bg-cyan-500 hover:bg-cyan-600" : ""} 
                 ${activeTab === "model-building" ? "" : "border-b sm:border-b-0 sm:border-r"} 
                 rounded-md sm:rounded-none w-full sm:w-auto`}
            onClick={() => setActiveTab("model-building")}
          >
            <BrainCircuit className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">การสร้างโมเดล</span>
          </Button>
          <Button
            variant={activeTab === "implementation" ? "default" : "outline"}
            className={`${activeTab === "implementation" ? "bg-cyan-500 hover:bg-cyan-600" : ""} 
                 rounded-md sm:rounded-l-none sm:rounded-r-md w-full sm:w-auto`}
            onClick={() => setActiveTab("implementation")}
          >
            <Users className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">การนำไปใช้</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
