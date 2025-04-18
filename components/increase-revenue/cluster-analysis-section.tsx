"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, ShoppingBag, Clock, CreditCard, Zap } from "lucide-react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js"
import { Pie, Scatter } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title)

export default function ClusterAnalysisSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for pie chart
  const pieData = {
    labels: ["กลุ่มที่ 1: ลูกค้า VIP", "กลุ่มที่ 2: ลูกค้าประจำ", "กลุ่มที่ 3: ลูกค้าเป็นครั้งคราว", "กลุ่มที่ 4: ลูกค้าไม่ค่อยซื้อ"],
    datasets: [
      {
        data: [15, 30, 40, 15],
        backgroundColor: [
          "rgba(0, 191, 255, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(0, 191, 255, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // Sample data for scatter plot
  const scatterData = {
    datasets: [
      {
        label: "กลุ่มที่ 1: ลูกค้า VIP",
        data: Array.from({ length: 50 }, () => ({
          x: 80 + Math.random() * 20,
          y: 80 + Math.random() * 20,
        })),
        backgroundColor: "rgba(0, 191, 255, 0.6)",
      },
      {
        label: "กลุ่มที่ 2: ลูกค้าประจำ",
        data: Array.from({ length: 100 }, () => ({
          x: 50 + Math.random() * 30,
          y: 50 + Math.random() * 30,
        })),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "กลุ่มที่ 3: ลูกค้าเป็นครั้งคราว",
        data: Array.from({ length: 150 }, () => ({
          x: 20 + Math.random() * 40,
          y: 20 + Math.random() * 40,
        })),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
      {
        label: "กลุ่มที่ 4: ลูกค้าไม่ค่อยซื้อ",
        data: Array.from({ length: 80 }, () => ({
          x: 5 + Math.random() * 20,
          y: 5 + Math.random() * 20,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  }

  const scatterOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "ความถี่ในการซื้อ",
        },
        min: 0,
        max: 100,
      },
      y: {
        title: {
          display: true,
          text: "มูลค่าการซื้อ",
        },
        min: 0,
        max: 100,
      },
    },
  }

  const clusterInfo = [
    {
      id: "vip",
      name: "กลุ่มที่ 1: ลูกค้า VIP",
      percentage: "15%",
      color: "bg-cyan-500",
      icon: <CreditCard className="h-5 w-5 text-cyan-500" />,
      description:
        "ลูกค้ากลุ่มนี้มีมูลค่าการซื้อสูงและซื้อบ่อยครั้ง เป็นกลุ่มที่สร้างรายได้หลักให้กับธุรกิจ แม้จะมีจำนวนเพียง 15% ของลูกค้าทั้งหมด แต่สร้างรายได้ถึง 40% ของรายได้ทั้งหมด",
      characteristics: [
        "มูลค่าการซื้อเฉลี่ย: 15,000 บาท/เดือน",
        "ความถี่ในการซื้อ: 5-6 ครั้ง/เดือน",
        "ระยะเวลาเป็นลูกค้า: มากกว่า 1 ปี",
        "หมวดหมู่สินค้าที่ซื้อ: หลากหลาย",
      ],
    },
    {
      id: "regular",
      name: "กลุ่มที่ 2: ลูกค้าประจำ",
      percentage: "30%",
      color: "bg-teal-500",
      icon: <ShoppingBag className="h-5 w-5 text-teal-500" />,
      description: "ลูกค้ากลุ่มนี้มีความถี่ในการซื้อสูง แต่มูลค่าการซื้อต่อครั้งปานกลาง เป็นกลุ่มที่มีความภักดีต่อแบรนด์และมีโอกาสเติบโตเป็นลูกค้า VIP ได้",
      characteristics: [
        "มูลค่าการซื้อเฉลี่ย: 5,000 บาท/เดือน",
        "ความถี่ในการซื้อ: 3-4 ครั้ง/เดือน",
        "ระยะเวลาเป็นลูกค้า: 6 เดือน - 1 ปี",
        "หมวดหมู่สินค้าที่ซื้อ: 2-3 หมวดหมู่",
      ],
    },
    {
      id: "occasional",
      name: "กลุ่มที่ 3: ลูกค้าเป็นครั้งคราว",
      percentage: "40%",
      color: "bg-orange-500",
      icon: <Clock className="h-5 w-5 text-orange-500" />,
      description:
        "ลูกค้ากลุ่มนี้มีความถี่ในการซื้อปานกลางถึงต่ำ และมูลค่าการซื้อต่อครั้งปานกลาง เป็นกลุ่มที่มีศักยภาพในการเติบโตหากได้รับการกระตุ้นที่เหมาะสม",
      characteristics: [
        "มูลค่าการซื้อเฉลี่ย: 2,000 บาท/เดือน",
        "ความถี่ในการซื้อ: 1-2 ครั้ง/เดือน",
        "ระยะเวลาเป็นลูกค้า: 3-6 เดือน",
        "หมวดหมู่สินค้าที่ซื้อ: 1-2 หมวดหมู่",
      ],
    },
    {
      id: "inactive",
      name: "กลุ่มที่ 4: ลูกค้าไม่ค่อยซื้อ",
      percentage: "15%",
      color: "bg-red-500",
      icon: <Zap className="h-5 w-5 text-red-500" />,
      description: "ลูกค้ากลุ่มนี้มีความถี่ในการซื้อต่ำและมูลค่าการซื้อต่อครั้งต่ำ อาจเป็นลูกค้าใหม่หรือลูกค้าที่กำลังจะหายไป ต้องการการกระตุ้นเป็นพิเศษ",
      characteristics: [
        "มูลค่าการซื้อเฉลี่ย: น้อยกว่า 1,000 บาท/เดือน",
        "ความถี่ในการซื้อ: น้อยกว่า 1 ครั้ง/เดือน",
        "ระยะเวลาเป็นลูกค้า: น้อยกว่า 3 เดือน",
        "หมวดหมู่สินค้าที่ซื้อ: 1 หมวดหมู่",
      ],
    },
  ]

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">การวิเคราะห์ลูกค้าด้วย K-Means Clustering</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            เราใช้อัลกอริทึม K-Means Clustering เพื่อแบ่งกลุ่มลูกค้าตามพฤติกรรมการซื้อ
            ทำให้เราสามารถเข้าใจลูกค้าได้ดีขึ้นและออกแบบแคมเปญที่ตรงกับความต้องการของแต่ละกลุ่ม
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-cyan-500" />
                  การแบ่งกลุ่มลูกค้า
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-full h-64">
                      <Pie data={pieData} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {clusterInfo.map((cluster) => (
                      <div key={cluster.id} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${cluster.color} mr-2`}></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{cluster.name}</div>
                        </div>
                        <div className="text-sm font-semibold">{cluster.percentage}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      การแบ่งกลุ่มลูกค้าด้วย K-Means ช่วยให้เราเข้าใจพฤติกรรมและความต้องการของลูกค้าแต่ละกลุ่มได้ดีขึ้น
                      ทำให้สามารถออกแบบแคมเปญการตลาดที่ตรงเป้าหมายได้อย่างมีประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>รายละเอียดกลุ่มลูกค้า</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vip" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="vip">กลุ่มที่ 1</TabsTrigger>
                    <TabsTrigger value="regular">กลุ่มที่ 2</TabsTrigger>
                    <TabsTrigger value="occasional">กลุ่มที่ 3</TabsTrigger>
                    <TabsTrigger value="inactive">กลุ่มที่ 4</TabsTrigger>
                  </TabsList>

                  {clusterInfo.map((cluster) => (
                    <TabsContent key={cluster.id} value={cluster.id} className="space-y-4">
                      <div className="flex items-center mb-4">
                        <div className={`w-4 h-4 rounded-full ${cluster.color} mr-2`}></div>
                        <h3 className="text-xl font-semibold">{cluster.name}</h3>
                        <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {cluster.percentage} ของลูกค้าทั้งหมด
                        </span>
                      </div>

                      <p className="text-gray-700">{cluster.description}</p>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">ลักษณะเฉพาะ:</h4>
                        <ul className="space-y-1">
                          {cluster.characteristics.map((characteristic, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-cyan-500 mr-2">•</span>
                              <span className="text-gray-700">{characteristic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>การกระจายตัวของลูกค้าตามความถี่และมูลค่าการซื้อ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <Scatter data={scatterData} options={scatterOptions} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  แผนภาพนี้แสดงการกระจายตัวของลูกค้าตามความถี่ในการซื้อ (แกน X) และมูลค่าการซื้อ (แกน Y)
                  ซึ่งเป็นปัจจัยหลักที่ใช้ในการแบ่งกลุ่มลูกค้าด้วย K-Means Clustering
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
