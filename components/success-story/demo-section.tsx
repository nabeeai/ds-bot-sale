"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { BrainCircuit, RefreshCw, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function DemoSection() {
  const [isCalculating, setIsCalculating] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [retentionScore, setRetentionScore] = useState(0)

  // Form state
  const [experience, setExperience] = useState("3-5")
  const [distance, setDistance] = useState<number[]>([15])
  const [previousJobDuration, setPreviousJobDuration] = useState<number[]>([24])
  const [technicalScore, setTechnicalScore] = useState<number[]>([75])
  const [cultureFit, setCultureFit] = useState("medium")
  const [hasRelevantExperience, setHasRelevantExperience] = useState(true)

  const handleCalculate = () => {
    setIsCalculating(true)

    // Simulate API call or calculation time
    setTimeout(() => {
      // Simple algorithm to calculate retention score based on inputs
      let score = 0

      // Experience factor
      if (experience === "0-2") score += 15
      else if (experience === "3-5") score += 25
      else if (experience === "5+") score += 20

      // Distance factor (inverse relationship - closer is better)
      score += Math.max(0, 30 - distance[0] * 0.6)

      // Previous job duration (longer is better)
      score += Math.min(15, previousJobDuration[0] * 0.5)

      // Technical score
      score += technicalScore[0] * 0.15

      // Culture fit
      if (cultureFit === "low") score += 5
      else if (cultureFit === "medium") score += 15
      else if (cultureFit === "high") score += 25

      // Relevant experience bonus
      if (hasRelevantExperience) score += 10

      // Cap at 100
      score = Math.min(100, Math.max(0, score))

      setRetentionScore(Math.round(score))
      setIsCalculating(false)
      setShowResults(true)
    }, 1500)
  }

  const handleReset = () => {
    setExperience("3-5")
    setDistance([15])
    setPreviousJobDuration([24])
    setTechnicalScore([75])
    setCultureFit("medium")
    setHasRelevantExperience(true)
    setShowResults(false)
  }

  return (
    <section id="demo-section" className="bg-gray-50 py-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ทดลองใช้โมเดลทำนายการรักษาพนักงาน</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ลองป้อนข้อมูลของผู้สมัครและดูผลการทำนายโอกาสที่ผู้สมัครจะอยู่กับองค์กรในระยะยาว เพื่อลดอัตราการลาออก 28% ในช่วง 90 วันแรก
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>ข้อมูลผู้สมัคร</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">ประสบการณ์ทำงาน</Label>
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="เลือกช่วงประสบการณ์" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 ปี</SelectItem>
                        <SelectItem value="3-5">3-5 ปี</SelectItem>
                        <SelectItem value="5+">มากกว่า 5 ปี</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>ระยะทางจากที่พักถึงที่ทำงาน (กม.)</Label>
                      <span className="text-sm text-gray-500">{distance[0]} กม.</span>
                    </div>
                    <Slider value={distance} min={1} max={50} step={1} onValueChange={setDistance} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>ระยะเวลาในงานก่อนหน้า (เดือน)</Label>
                      <span className="text-sm text-gray-500">{previousJobDuration[0]} เดือน</span>
                    </div>
                    <Slider
                      value={previousJobDuration}
                      min={0}
                      max={60}
                      step={1}
                      onValueChange={setPreviousJobDuration}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>คะแนนทักษะเทคนิค</Label>
                      <span className="text-sm text-gray-500">{technicalScore[0]}/100</span>
                    </div>
                    <Slider value={technicalScore} min={0} max={100} step={1} onValueChange={setTechnicalScore} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="culture-fit">ความสอดคล้องกับวัฒนธรรมองค์กร</Label>
                    <Select value={cultureFit} onValueChange={setCultureFit}>
                      <SelectTrigger id="culture-fit">
                        <SelectValue placeholder="เลือกระดับความสอดคล้อง" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">ต่ำ</SelectItem>
                        <SelectItem value="medium">ปานกลาง</SelectItem>
                        <SelectItem value="high">สูง</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="relevant-experience"
                        checked={hasRelevantExperience}
                        onCheckedChange={setHasRelevantExperience}
                      />
                      <Label htmlFor="relevant-experience">มีประสบการณ์ในอุตสาหกรรมที่เกี่ยวข้อง</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 min-w-[150px]"
                  onClick={handleCalculate}
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      กำลังคำนวณ...
                    </>
                  ) : (
                    <>
                      <BrainCircuit className="h-4 w-4 mr-2" />
                      ทำนายผล
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleReset} disabled={isCalculating}>
                  รีเซ็ต
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>ผลการทำนาย</CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="h-full flex items-center justify-center py-12">
                  <div className="text-center">
                    <BrainCircuit className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">ป้อนข้อมูลและกดทำนายผล</h3>
                    <p className="text-gray-500 max-w-md">ระบบจะวิเคราะห์ข้อมูลและทำนายโอกาสที่ผู้สมัครจะอยู่กับองค์กรในระยะยาว</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                      <span className="text-3xl font-bold text-cyan-500">{retentionScore}%</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">โอกาสอยู่กับองค์กรในระยะยาว</h3>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    {retentionScore >= 75 ? (
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">โอกาสสูง</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            ผู้สมัครรายนี้มีแนวโน้มสูงที่จะอยู่กับองค์กรในระยะยาว ช่วยลดความเสี่ยงจากอัตราการลาออก 28% ในช่วง 90 วันแรก
                          </p>
                        </div>
                      </div>
                    ) : retentionScore >= 50 ? (
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">โอกาสปานกลาง</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            ผู้สมัครรายนี้มีแนวโน้มปานกลางที่จะอยู่กับองค์กรในระยะยาว ควรพิจารณาปัจจัยอื่นประกอบเพื่อลดความเสี่ยงจากการลาออก
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">โอกาสต่ำ</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            ผู้สมัครรายนี้มีแนวโน้มสูงที่จะลาออกในช่วง 90 วันแรก ซึ่งอาจทำให้เกิดต้นทุนการสูญเสีย 150,000 บาท
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">ปัจจัยที่มีผลต่อการทำนาย</h4>
                    <ul className="space-y-2 text-sm">
                      {cultureFit === "high" && (
                        <li className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          ความสอดคล้องกับวัฒนธรรมองค์กรสูง
                        </li>
                      )}
                      {cultureFit === "low" && (
                        <li className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          ความสอดคล้องกับวัฒนธรรมองค์กรต่ำ
                        </li>
                      )}
                      {distance[0] > 30 && (
                        <li className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          ระยะทางจากที่พักถึงที่ทำงานไกล
                        </li>
                      )}
                      {distance[0] <= 10 && (
                        <li className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          ระยะทางจากที่พักถึงที่ทำงานใกล้
                        </li>
                      )}
                      {previousJobDuration[0] < 12 && (
                        <li className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          ระยะเวลาในงานก่อนหน้าสั้น
                        </li>
                      )}
                      {previousJobDuration[0] >= 36 && (
                        <li className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          ระยะเวลาในงานก่อนหน้ายาว
                        </li>
                      )}
                      {technicalScore[0] >= 85 && (
                        <li className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          คะแนนทักษะเทคนิคสูง
                        </li>
                      )}
                      {hasRelevantExperience && (
                        <li className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          มีประสบการณ์ในอุตสาหกรรมที่เกี่ยวข้อง
                        </li>
                      )}
                      {!hasRelevantExperience && (
                        <li className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          ไม่มีประสบการณ์ในอุตสาหกรรมที่เกี่ยวข้อง
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
