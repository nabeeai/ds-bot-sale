"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Route, Truck, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

// ใช้ dynamic import สำหรับ Leaflet เพื่อหลีกเลี่ยงปัญหา SSR
const MapComponent = dynamic(() => import("../map/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">กำลังโหลดแผนที่...</div>
    </div>
  ),
})

export default function GeospatialAnalysisSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("current-routes")
  const [showOptimized, setShowOptimized] = useState(false)

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">การวิเคราะห์เส้นทางเชิงพื้นที่</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราใช้การวิเคราะห์ข้อมูลเชิงพื้นที่ (Geospatial Analysis) เพื่อศึกษาเส้นทางการขนส่งปัจจุบัน
            และค้นหาโอกาสในการปรับปรุงเพื่อลดระยะทาง ค่าน้ำมัน และเวลาจัดส่ง
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>แผนที่เส้นทางการขนส่ง</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="current-routes" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="current-routes">เส้นทางปัจจุบัน</TabsTrigger>
                  <TabsTrigger value="heatmap">แผนที่ความหนาแน่น</TabsTrigger>
                  <TabsTrigger value="optimized-routes">เส้นทางที่ปรับปรุงแล้ว</TabsTrigger>
                </TabsList>

                <div className="h-[500px] relative">
                  <TabsContent value="current-routes" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <MapComponent mapType="current-routes" />
                    </div>
                  </TabsContent>
                  <TabsContent value="heatmap" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <MapComponent mapType="heatmap" />
                    </div>
                  </TabsContent>
                  <TabsContent value="optimized-routes" className="absolute inset-0 m-0">
                    <div className="bg-white rounded-lg p-4 h-full">
                      <MapComponent mapType="optimized-routes" />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Route className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">ระยะทางรวม</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        {activeTab === "optimized-routes" ? "8,750" : "12,500"} กม./วัน
                      </div>
                      {activeTab === "optimized-routes" && (
                        <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">-30%</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Truck className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">จำนวนรถที่ใช้</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        {activeTab === "optimized-routes" ? "380" : "500"} คัน/วัน
                      </div>
                      {activeTab === "optimized-routes" && (
                        <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">-24%</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-cyan-500 mr-2" />
                      <h3 className="font-medium">จุดจัดส่งต่อวัน</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">2,500 จุด</div>
                      {activeTab === "optimized-routes" && (
                        <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">100%</div>
                      )}
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
          className="mt-12 bg-gray-50 p-6 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">การวิเคราะห์เส้นทางที่ไม่มีประสิทธิภาพ</h3>
              <p className="text-gray-600 mb-4">
                จากการวิเคราะห์เส้นทางการขนส่งปัจจุบัน เราพบปัญหาสำคัญที่ทำให้เกิดการสิ้นเปลืองค่าน้ำมันและเวลาจัดส่ง ดังนี้
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    1
                  </span>
                  <span>เส้นทางซ้ำซ้อนและตัดกันไปมา ทำให้เกิดการเดินทางที่ไม่จำเป็น</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    2
                  </span>
                  <span>การจัดสรรจุดจัดส่งให้กับรถแต่ละคันไม่เหมาะสม ทำให้บางคันมีระยะทางมากเกินไป</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    3
                  </span>
                  <span>ไม่มีการคำนึงถึงปัจจัยด้านการจราจรและช่วงเวลาที่เหมาะสมในการจัดส่ง</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-100 text-cyan-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    4
                  </span>
                  <span>ขาดการจัดกลุ่มจุดจัดส่งที่อยู่ในบริเวณใกล้เคียงกัน</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">วิธีการปรับปรุงเส้นทาง</h4>
                <ul className="space-y-3">
                  <li className="bg-cyan-50 rounded-md p-3">
                    <div className="font-medium text-gray-800 flex items-center">
                      <Route className="h-4 w-4 text-cyan-500 mr-2" />
                      การจัดเส้นทางใหม่ด้วยอัลกอริทึม Routing Optimization
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      ใช้อัลกอริทึม Vehicle Routing Problem (VRP) เพื่อหาเส้นทางที่สั้นที่สุดในการเข้าถึงจุดจัดส่งทั้งหมด
                    </p>
                  </li>
                  <li className="bg-cyan-50 rounded-md p-3">
                    <div className="font-medium text-gray-800 flex items-center">
                      <MapPin className="h-4 w-4 text-cyan-500 mr-2" />
                      การจัดกลุ่มจุดจัดส่งตามพื้นที่
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      ใช้ Clustering Algorithm เพื่อจัดกลุ่มจุดจัดส่งที่อยู่ในบริเวณใกล้เคียงกัน และมอบหมายให้รถคันเดียวกัน
                    </p>
                  </li>
                  <li className="bg-cyan-50 rounded-md p-3">
                    <div className="font-medium text-gray-800 flex items-center">
                      <Truck className="h-4 w-4 text-cyan-500 mr-2" />
                      การจัดสรรรถให้เหมาะสมกับพื้นที่
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      จัดสรรรถให้เหมาะสมกับพื้นที่และปริมาณงาน เพื่อลดการใช้รถที่ไม่จำเป็นและเพิ่มประสิทธิภาพการขนส่ง
                    </p>
                  </li>
                </ul>
                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-cyan-500 hover:bg-cyan-600"
                    onClick={() => {
                      setActiveTab("optimized-routes")
                      setShowOptimized(true)
                    }}
                  >
                    <span>ดูเส้นทางที่ปรับปรุงแล้ว</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
