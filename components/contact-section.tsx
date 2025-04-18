import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ติดต่อเรา</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            สนใจบริการวิทยาศาสตร์ข้อมูลของเรา? ติดต่อเราเพื่อรับการปรึกษาฟรีและเรียนรู้เพิ่มเติมว่าเราจะช่วยธุรกิจของคุณได้อย่างไร
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>ส่งข้อความถึงเรา</CardTitle>
                <CardDescription>กรอกแบบฟอร์มด้านล่างเพื่อติดต่อทีมของเรา</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        ชื่อ
                      </label>
                      <Input id="name" placeholder="กรุณากรอกชื่อของคุณ" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        บริษัท
                      </label>
                      <Input id="company" placeholder="กรุณากรอกชื่อบริษัทของคุณ" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        อีเมล
                      </label>
                      <Input id="email" type="email" placeholder="example@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        เบอร์โทรศัพท์
                      </label>
                      <Input id="phone" placeholder="0XX-XXX-XXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      บริการที่สนใจ
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">เลือกบริการที่คุณสนใจ</option>
                      <option value="segmentation">การแบ่งกลุ่มลูกค้า</option>
                      <option value="forecast">การพยากรณ์ข้อมูล</option>
                      <option value="dashboard">แดชบอร์ดวิเคราะห์ข้อมูล</option>
                      <option value="consulting">ที่ปรึกษาด้านข้อมูล</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      ข้อความ
                    </label>
                    <Textarea id="message" placeholder="กรุณากรอกรายละเอียดเพิ่มเติม" rows={5} />
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600">ส่งข้อความ</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">ข้อมูลติดต่อ</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">อีเมล</h4>
                    <p className="text-gray-600">contact@ibotnoi.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">โทรศัพท์</h4>
                    <p className="text-gray-600">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">ที่อยู่</h4>
                    <p className="text-gray-600">
                      อาคารดิจิทัล ชั้น 12
                      <br />
                      ถนนรัชดาภิเษก แขวงดินแดง
                      <br />
                      เขตดินแดง กรุงเทพฯ 10400
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">เวลาทำการ</h4>
                    <p className="text-gray-600">
                      จันทร์ - ศุกร์: 9:00 - 18:00 น.
                      <br />
                      เสาร์: 9:00 - 13:00 น.
                      <br />
                      อาทิตย์: ปิดทำการ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">คำถามที่พบบ่อย</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">บริการของคุณเหมาะกับธุรกิจขนาดเล็กหรือไม่?</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ใช่ เรามีแพ็คเกจสำหรับธุรกิจทุกขนาด ตั้งแต่ธุรกิจขนาดเล็กไปจนถึงองค์กรขนาดใหญ่
                    โดยปรับแต่งให้เหมาะกับความต้องการและงบประมาณของคุณ
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">ฉันต้องมีความรู้ด้านวิทยาศาสตร์ข้อมูลหรือไม่?</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ไม่จำเป็น ทีมของเราจะดูแลทุกขั้นตอนทางเทคนิค และนำเสนอผลลัพธ์ในรูปแบบที่เข้าใจง่ายสำหรับผู้ที่ไม่มีพื้นฐานด้านเทคนิค
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">ใช้เวลานานแค่ไหนในการเห็นผลลัพธ์?</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    ขึ้นอยู่กับความซับซ้อนของโครงการ แต่โดยทั่วไปคุณจะเห็นผลลัพธ์เบื้องต้นภายใน 2-4 สัปดาห์ และผลลัพธ์ที่สมบูรณ์ภายใน 1-3 เดือน
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">คุณรับประกันผลลัพธ์หรือไม่?</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    เรามุ่งมั่นที่จะส่งมอบผลลัพธ์ที่มีคุณภาพสูงและมีความแม่นยำ แต่ผลลัพธ์ทางธุรกิจขึ้นอยู่กับหลายปัจจัย
                    เราทำงานอย่างใกล้ชิดกับคุณเพื่อให้แน่ใจว่าคุณได้รับคุณค่าสูงสุดจากบริการของเรา
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
