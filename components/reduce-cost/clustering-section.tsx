"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Route, Truck } from "lucide-react"
import dynamic from "next/dynamic"

// ใช้ dynamic import สำหรับ Leaflet เพื่อหลีกเลี่ยงปัญหา SSR
const ClusterMapComponent = dynamic(() => import("../map/cluster-map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">กำลังโหลดแผนที่...</div>
    </div>
  ),
})

export default function ClusteringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("before")

  return (
    <section className="py-16 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">การจัดกลุ่มพื้นที่จัดส่ง</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราใช้เทคนิค Clustering เพื่อจัดกลุ่มจุดจัดส่งที่อยู่ในบริเวณใกล้เคียงกัน ช่วยให้สามารถวางแผนเส้นทางได้อย่างมีประสิทธิภาพมากขึ้น
            ลดระยะทางและเวลาในการเดินทาง
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>การจัดกลุ่มพื้นที่จัดส่ง</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="before" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="before">ก่อนการจัดกลุ่ม</TabsTrigger>
                  <TabsTrigger value="after">หลังการจัดกลุ่ม</TabsTrigger>
                  <TabsTrigger value="comparison">เปรียบเทียบ</TabsTrigger>
                </TabsList>

                <div className="h-[500px] relative">
                  <TabsContent value="before" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <ClusterMapComponent mapType="before" />
                    </div>
                  </TabsContent>
                  <TabsContent value="after" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <ClusterMapComponent mapType="after" />
                    </div>
                  </TabsContent>
                  <TabsContent value="comparison" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <ClusterMapComponent mapType="comparison" />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">จำนวนกลุ่ม</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        {activeTab === "before" ? "ไม่มีการจัดกลุ่ม" : "12 กลุ่ม"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Route className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">ระยะทางภายในกลุ่ม</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        {activeTab === "before" ? "N/A" : "ลดลง 35%"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Truck className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">ประสิทธิภาพการจัดส่ง</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        {activeTab === "before" ? "ต่ำ" : "สูงขึ้น 42%"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>วิธีการจัดกลุ่ม</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">K-Means Clustering</h3>
                  <p className="text-gray-600 text-sm">
                    เราใช้อัลกอริทึม K-Means Clustering เพื่อจัดกลุ่มจุดจัดส่งตามตำแหน่งทางภูมิศาสตร์
                    โดยกำหนดจำนวนกลุ่มที่เหมาะสมจากการวิเคราะห์ข้อมูล
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Hierarchical Clustering</h3>
                  <p className="text-gray-600 text-sm">
                    ใช้ Hierarchical Clustering เพื่อจัดกลุ่มย่อยภายในกลุ่มใหญ่
                    ช่วยให้สามารถจัดสรรรถได้อย่างเหมาะสมตามลำดับความสำคัญและความเร่งด่วน
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">DBSCAN (Density-Based Clustering)</h3>
                  <p className="text-gray-600 text-sm">
                    ใช้ DBSCAN เพื่อระบุพื้นที่ที่มีความหนาแน่นของจุดจัดส่งสูง ช่วยให้สามารถจัดสรรทรัพยากรได้อย่างเหมาะสมในพื้นที่ที่มีความต้องการสูง
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ประโยชน์ของการจัดกลุ่ม</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">ลดระยะทางการเดินทาง</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      การจัดกลุ่มช่วยลดระยะทางการเดินทางระหว่างจุดจัดส่ง เนื่องจากรถแต่ละคันจะรับผิดชอบจุดจัดส่งที่อยู่ใกล้กัน
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">เพิ่มประสิทธิภาพการใช้รถ</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      สามารถจัดสรรรถได้อย่างเหมาะสมตามปริมาณงานในแต่ละกลุ่ม ลดการใช้รถที่ไม่จำเป็นและเพิ่มประสิทธิภาพการขนส่ง
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">ลดเวลาจัดส่ง</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      การจัดส่งในพื้นที่ที่อยู่ใกล้กันช่วยลดเวลาในการเดินทาง ทำให้สามารถจัดส่งสินค้าได้เร็วขึ้น และรองรับปริมาณงานได้มากขึ้น
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">วางแผนได้ง่ายขึ้น</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      การจัดกลุ่มช่วยให้การวางแผนเส้นทางและการจัดสรรทรัพยากรทำได้ง่ายขึ้น สามารถปรับเปลี่ยนได้อย่างยืดหยุ่นตามสถานการณ์
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
