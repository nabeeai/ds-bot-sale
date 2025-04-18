"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Gift, Target, TrendingUp, Award, Zap } from "lucide-react"

export default function CampaignDesignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const campaigns = [
    {
      id: "vip",
      title: "แคมเปญสำหรับลูกค้า VIP",
      icon: <Award className="h-6 w-6 text-cyan-500" />,
      description:
        "แคมเปญที่ออกแบบเฉพาะสำหรับลูกค้า VIP เพื่อรักษาความภักดีและเพิ่มมูลค่าการซื้อ โดยมุ่งเน้นการสร้างประสบการณ์พิเศษและสิทธิประโยชน์เฉพาะกลุ่ม",
      strategies: [
        {
          title: "โปรแกรมสะสมแต้มพิเศษ",
          description: "สะสมแต้มเพิ่ม 2 เท่าสำหรับทุกการซื้อ และแลกของรางวัลพิเศษที่มีเฉพาะลูกค้า VIP เท่านั้น",
          kpi: "เพิ่มความถี่ในการซื้อ 15%",
          badge: "สิทธิพิเศษ",
        },
        {
          title: "บริการส่วนตัว (Personal Shopper)",
          description: "บริการผู้ช่วยช้อปปิ้งส่วนตัวที่ให้คำแนะนำและช่วยเลือกสินค้าตามความต้องการเฉพาะบุคคล",
          kpi: "เพิ่มมูลค่าตะกร้าเฉลี่ย 20%",
          badge: "ประสบการณ์",
        },
        {
          title: "ส่วนลดสินค้าใหม่ล่าสุด",
          description: "รับส่วนลด 15% สำหรับสินค้าใหม่ล่าสุดก่อนใคร และสิทธิ์ในการสั่งจองสินค้าลิมิเต็ดอิดิชั่น",
          kpi: "เพิ่มยอดขายสินค้าใหม่ 25%",
          badge: "ส่วนลด",
        },
      ],
      results: {
        engagement: "+28%",
        sales: "+35%",
        retention: "+22%",
      },
    },
    {
      id: "regular",
      title: "แคมเปญสำหรับลูกค้าประจำ",
      icon: <Target className="h-6 w-6 text-teal-500" />,
      description:
        "แคมเปญที่ออกแบบสำหรับลูกค้าประจำเพื่อเพิ่มความถี่ในการซื้อและมูลค่าการซื้อต่อครั้ง โดยมุ่งเน้นการสร้างแรงจูงใจให้ซื้อสินค้าในหมวดหมู่ใหม่",
      strategies: [
        {
          title: "โปรแกรมสะสมแต้มข้ามหมวดหมู่",
          description: "รับแต้มสะสมเพิ่ม 50% เมื่อซื้อสินค้าในหมวดหมู่ที่ไม่เคยซื้อมาก่อน",
          kpi: "เพิ่มการซื้อข้ามหมวดหมู่ 30%",
          badge: "สิทธิพิเศษ",
        },
        {
          title: "ส่วนลดตามความถี่",
          description: "รับส่วนลดเพิ่มขึ้นตามจำนวนครั้งที่ซื้อในเดือน เริ่มต้นที่ 5% และเพิ่มขึ้นสูงสุดถึง 15%",
          kpi: "เพิ่มความถี่ในการซื้อ 25%",
          badge: "ส่วนลด",
        },
        {
          title: "แนะนำสินค้าเฉพาะบุคคล",
          description: "ระบบแนะนำสินค้าอัตโนมัติตามพฤติกรรมการซื้อและความชอบส่วนบุคคล",
          kpi: "เพิ่มอัตราการคลิกผ่าน 40%",
          badge: "ประสบการณ์",
        },
      ],
      results: {
        engagement: "+32%",
        sales: "+28%",
        retention: "+18%",
      },
    },
    {
      id: "occasional",
      title: "แคมเปญสำหรับลูกค้าเป็นครั้งคราว",
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      description:
        "แคมเปญที่ออกแบบสำหรับลูกค้าเป็นครั้งคราวเพื่อเพิ่มความถี่ในการซื้อและกระตุ้นให้กลายเป็นลูกค้าประจำ โดยมุ่งเน้นการสร้างแรงจูงใจระยะสั้น",
      strategies: [
        {
          title: "โปรโมชั่นซื้อครั้งที่ 2 ลด 50%",
          description: "รับส่วนลด 50% สำหรับการซื้อครั้งที่ 2 ภายใน 14 วันหลังจากการซื้อครั้งแรก",
          kpi: "เพิ่มอัตราการซื้อซ้ำ 35%",
          badge: "ส่วนลด",
        },
        {
          title: "แคมเปญจับคู่สินค้า",
          description: "แนะนำสินค้าที่เข้ากันกับสินค้าที่เคยซื้อ พร้อมส่วนลดพิเศษเมื่อซื้อคู่กัน",
          kpi: "เพิ่มมูลค่าตะกร้าเฉลี่ย 20%",
          badge: "แนะนำ",
        },
        {
          title: "โปรแกรมสมาชิกเริ่มต้น",
          description: "สมัครสมาชิกฟรีและรับสิทธิประโยชน์ทันที เช่น ส่วนลด 10% สำหรับการซื้อครั้งต่อไป",
          kpi: "เพิ่มอัตราการสมัครสมาชิก 45%",
          badge: "สิทธิพิเศษ",
        },
      ],
      results: {
        engagement: "+45%",
        sales: "+22%",
        retention: "+30%",
      },
    },
    {
      id: "inactive",
      title: "แคมเปญสำหรับลูกค้าไม่ค่อยซื้อ",
      icon: <Zap className="h-6 w-6 text-red-500" />,
      description:
        "แคมเปญที่ออกแบบสำหรับลูกค้าไม่ค่อยซื้อเพื่อกระตุ้นให้กลับมาซื้อสินค้าอีกครั้ง โดยมุ่งเน้นการสร้างแรงจูงใจที่แข็งแกร่งและการสื่อสารที่ตรงประเด็น",
      strategies: [
        {
          title: "แคมเปญ Win-Back",
          description: "ส่วนลด 30% สำหรับการกลับมาซื้อสินค้าอีกครั้ง พร้อมส่งอีเมลและ SMS เตือนก่อนหมดเขตโปรโมชั่น",
          kpi: "เพิ่มอัตราการกลับมาซื้อ 25%",
          badge: "ส่วนลด",
        },
        {
          title: "สำรวจความคิดเห็น",
          description: "ส่งแบบสำรวจความคิดเห็นพร้อมเครดิตส่วนลด 100 บาทเมื่อตอบแบบสำรวจ",
          kpi: "อัตราการตอบกลับ 15%",
          badge: "ข้อมูล",
        },
        {
          title: "แนะนำสินค้าใหม่",
          description: "แนะนำสินค้าใหม่ที่ตรงกับความสนใจของลูกค้าพร้อมส่วนลดพิเศษ",
          kpi: "เพิ่มอัตราการคลิกผ่าน 20%",
          badge: "แนะนำ",
        },
      ],
      results: {
        engagement: "+18%",
        sales: "+12%",
        retention: "+15%",
      },
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">การออกแบบแคมเปญที่ตรงเป้าหมาย</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            หลังจากแบ่งกลุ่มลูกค้าด้วย K-Means Clustering เราได้ออกแบบแคมเปญการตลาดที่เฉพาะเจาะจงสำหรับแต่ละกลุ่มลูกค้า
            เพื่อเพิ่มประสิทธิภาพของแคมเปญและผลตอบแทนจากการลงทุน
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>แคมเปญตามกลุ่มลูกค้า</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="vip" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="vip">ลูกค้า VIP</TabsTrigger>
                  <TabsTrigger value="regular">ลูกค้าประจำ</TabsTrigger>
                  <TabsTrigger value="occasional">ลูกค้าเป็นครั้งคราว</TabsTrigger>
                  <TabsTrigger value="inactive">ลูกค้าไม่ค่อยซื้อ</TabsTrigger>
                </TabsList>

                {campaigns.map((campaign) => (
                  <TabsContent key={campaign.id} value={campaign.id} className="space-y-6">
                    <div className="flex items-center">
                      <div className="mr-4">{campaign.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{campaign.title}</h3>
                        <p className="text-gray-600">{campaign.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {campaign.strategies.map((strategy, index) => (
                        <Card key={index} className="border-t-4 border-t-cyan-500">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{strategy.title}</h4>
                              <Badge variant="outline" className="ml-2">
                                {strategy.badge}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>
                            <div className="bg-gray-100 p-2 rounded-md text-sm">
                              <span className="font-medium">เป้าหมาย:</span> {strategy.kpi}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">ผลลัพธ์ของแคมเปญ</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <div className="text-sm text-gray-600">การมีส่วนร่วม</div>
                          <div className="text-2xl font-bold text-cyan-500">{campaign.results.engagement}</div>
                        </div>
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <div className="text-sm text-gray-600">ยอดขาย</div>
                          <div className="text-2xl font-bold text-cyan-500">{campaign.results.sales}</div>
                        </div>
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <div className="text-sm text-gray-600">การรักษาลูกค้า</div>
                          <div className="text-2xl font-bold text-cyan-500">{campaign.results.retention}</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">กระบวนการออกแบบแคมเปญ</h3>
              <p className="text-gray-600 mb-4">
                เราใช้ข้อมูลจากการแบ่งกลุ่มลูกค้าด้วย K-Means Clustering เพื่อออกแบบแคมเปญที่ตรงกับความต้องการและพฤติกรรมของลูกค้าแต่ละกลุ่ม
                โดยมีขั้นตอนดังนี้
              </p>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    1
                  </span>
                  <span>วิเคราะห์ลักษณะเฉพาะของแต่ละกลุ่มลูกค้า</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    2
                  </span>
                  <span>กำหนดเป้าหมายและ KPI สำหรับแต่ละกลุ่ม</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    3
                  </span>
                  <span>ออกแบบแคมเปญที่ตรงกับความต้องการและพฤติกรรมของแต่ละกลุ่ม</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    4
                  </span>
                  <span>ทดสอบแคมเปญกับกลุ่มตัวอย่าง</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    5
                  </span>
                  <span>ปรับปรุงและขยายผลแคมเปญ</span>
                </li>
              </ol>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">ประโยชน์ของการออกแบบแคมเปญตามกลุ่มลูกค้า</h4>
                <ul className="space-y-3">
                  <li className="bg-white rounded-md p-3 shadow-sm">
                    <div className="font-medium text-gray-800 flex items-center">
                      <Gift className="h-4 w-4 text-cyan-500 mr-2" />
                      เพิ่มประสิทธิภาพของแคมเปญ
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      การออกแบบแคมเปญที่ตรงกับความต้องการของแต่ละกลุ่มลูกค้าช่วยเพิ่มอัตราการตอบสนองและประสิทธิภาพของแคมเปญ
                    </p>
                  </li>
                  <li className="bg-white rounded-md p-3 shadow-sm">
                    <div className="font-medium text-gray-800 flex items-center">
                      <Target className="h-4 w-4 text-cyan-500 mr-2" />
                      ลดต้นทุนการตลาด
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      การมุ่งเป้าไปที่กลุ่มลูกค้าที่มีโอกาสตอบสนองสูงช่วยลดการสูญเสียงบประมาณการตลาดและเพิ่ม ROI
                    </p>
                  </li>
                  <li className="bg-white rounded-md p-3 shadow-sm">
                    <div className="font-medium text-gray-800 flex items-center">
                      <TrendingUp className="h-4 w-4 text-cyan-500 mr-2" />
                      เพิ่มความพึงพอใจของลูกค้า
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      การนำเสนอข้อเสนอที่ตรงกับความต้องการช่วยเพิ่มความพึงพอใจและความภักดีของลูกค้า
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
