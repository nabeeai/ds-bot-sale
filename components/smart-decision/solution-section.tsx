"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Server, BarChart3, ArrowRight } from "lucide-react"

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">โซลูชัน: Data Pipeline แบบอัตโนมัติ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราพัฒนาระบบ Data Pipeline ที่ดึงข้อมูลจากระบบต่างๆ มาประมวลผลและแสดงผลแบบเรียลไทม์
            ช่วยให้ผู้บริหารและทีมงานสามารถเข้าถึงข้อมูลที่ต้องการได้ทันที
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>กระบวนการทำงานของ Data Pipeline</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                  <div className="mb-8 md:mb-0 md:w-1/4 text-center">
                    <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">1. การรวบรวมข้อมูล</h3>
                    <p className="text-gray-600 text-sm">ดึงข้อมูลจากระบบคลังสินค้า ระบบขาย และระบบจัดซื้อแบบอัตโนมัติทุก 15 นาที</p>
                  </div>
                  <div className="hidden md:block w-1/6">
                    <ArrowRight className="h-8 w-8 text-cyan-500 mx-auto" />
                  </div>
                  <div className="mb-8 md:mb-0 md:w-1/4 text-center">
                    <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Server className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">2. การประมวลผล</h3>
                    <p className="text-gray-600 text-sm">
                      ทำความสะอาดข้อมูล คำนวณ KPI และวิเคราะห์แนวโน้มโดยอัตโนมัติด้วยอัลกอริทึมที่พัฒนาขึ้น
                    </p>
                  </div>
                  <div className="hidden md:block w-1/6">
                    <ArrowRight className="h-8 w-8 text-cyan-500 mx-auto" />
                  </div>
                  <div className="md:w-1/4 text-center">
                    <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">3. การแสดงผล</h3>
                    <p className="text-gray-600 text-sm">
                      แสดงผลข้อมูลบน Dashboard ที่ออกแบบให้เข้าใจง่าย สามารถเข้าถึงได้จากทุกอุปกรณ์
                    </p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-cyan-200 -z-10 hidden md:block"></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>ข้อมูลที่รวบรวมและวิเคราะห์</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">ข้อมูลการขาย</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• ยอดขายรายวัน/รายชั่วโมง แยกตามสินค้า/หมวดหมู่/ภูมิภาค</li>
                      <li>• อัตราการเติบโตของยอดขายเทียบกับช่วงเดียวกันของสัปดาห์/เดือน/ปีก่อน</li>
                      <li>• สินค้าขายดี 20 อันดับแรก และสินค้าขายไม่ดี 20 อันดับสุดท้าย</li>
                      <li>• แนวโน้มการขายของสินค้าแต่ละประเภท</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">ข้อมูลสินค้าคงคลัง</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• ปริมาณสินค้าคงเหลือแยกตามคลังสินค้า</li>
                      <li>• อัตราการหมุนเวียนสินค้า (Inventory Turnover)</li>
                      <li>• สินค้าที่ใกล้หมดสต็อก (ต่ำกว่าจุดสั่งซื้อ)</li>
                      <li>• สินค้าที่ค้างสต็อกนานเกิน 30/60/90 วัน</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">ข้อมูลการจัดซื้อ</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• คำสั่งซื้อที่อยู่ระหว่างดำเนินการ</li>
                      <li>• เวลานำในการจัดส่งของซัพพลายเออร์แต่ละราย</li>
                      <li>• ต้นทุนสินค้าและการเปลี่ยนแปลงของราคา</li>
                      <li>• ประสิทธิภาพของซัพพลายเออร์ (การส่งมอบตรงเวลา, คุณภาพ)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>ประโยชน์ของ Data Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <Database className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">ข้อมูลแบบเรียลไทม์</h4>
                      <p className="text-gray-600">
                        ข้อมูลถูกอัพเดททุก 15 นาที ทำให้ผู้บริหารและทีมงานสามารถเห็นสถานการณ์ปัจจุบันได้ตลอดเวลา
                        ช่วยให้ตัดสินใจได้อย่างรวดเร็วและแม่นยำ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <Server className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">ลดภาระงานด้านการรวบรวมข้อมูล</h4>
                      <p className="text-gray-600">
                        ระบบทำงานอัตโนมัติ ช่วยลดภาระงานของทีมในการรวบรวมและประมวลผลข้อมูล
                        ทำให้สามารถใช้เวลาไปกับการวิเคราะห์และวางแผนกลยุทธ์ได้มากขึ้น
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">การวิเคราะห์ขั้นสูง</h4>
                      <p className="text-gray-600">
                        ระบบสามารถวิเคราะห์แนวโน้มและรูปแบบที่ซับซ้อนได้อย่างรวดเร็ว
                        ช่วยให้ค้นพบโอกาสทางธุรกิจและปัญหาที่อาจเกิดขึ้นได้ก่อนที่จะสายเกินไป
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">ผลลัพธ์ที่ได้</h4>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-cyan-500">85%</div>
                        <p className="text-gray-600 text-sm">ลดเวลาในการตัดสินใจ</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-cyan-500">95%</div>
                        <p className="text-gray-600 text-sm">ความแม่นยำของข้อมูล</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-cyan-500">75%</div>
                        <p className="text-gray-600 text-sm">ลดเวลาในการทำรายงาน</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-cyan-500">100%</div>
                        <p className="text-gray-600 text-sm">การเข้าถึงข้อมูลจากทุกที่</p>
                      </div>
                    </div>
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
