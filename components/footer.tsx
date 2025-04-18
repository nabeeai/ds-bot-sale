import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="iBOTNOI Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">iBOTNOI</span>
            </Link>
            <p className="text-gray-400 mb-4">
              บริการวิทยาศาสตร์ข้อมูลที่ช่วยให้ธุรกิจของคุณเติบโตด้วยการวิเคราะห์ข้อมูลขั้นสูงและเทคโนโลยี AI
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">บริการของเรา</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#dashboard" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  แดชบอร์ดวิเคราะห์ข้อมูล
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  ที่ปรึกษาด้านข้อมูล
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  การวิเคราะห์ข้อความและความรู้สึก
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  กรณีศึกษา
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  บล็อก
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  ร่วมงานกับเรา
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-cyan-500 mt-0.5 mr-2" />
                <span className="text-gray-400">contact@ibotnoi.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-500 mt-0.5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">02-123-4567</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-500 mt-0.5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  อาคารดิจิทัล ชั้น 12
                  <br />
                  ถนนรัชดาภิเษก แขวงดินแดง
                  <br />
                  เขตดินแดง กรุงเทพฯ 10400
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} iBOTNOI. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
              เงื่อนไขการใช้งาน
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
              นโยบายคุกกี้
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
