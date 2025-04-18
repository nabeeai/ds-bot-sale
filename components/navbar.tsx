"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="iBOTNOI Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-cyan-500">iBOTNOI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-500 transition-colors">
              หน้าหลัก
            </Link>
            <Link href="/interactive-dashboard" className="text-gray-700 hover:text-cyan-500 transition-colors">
              แดชบอร์ดข้อมูล
            </Link>
            <Link href="/success-story" className="text-gray-700 hover:text-cyan-500 transition-colors">
              กรณีศึกษา
            </Link>
            <Link
              href="/#contact"
              className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-cyan-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              หน้าหลัก
            </Link>
            <Link
              href="/interactive-dashboard"
              className="block text-gray-700 hover:text-cyan-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              แดชบอร์ดโต้ตอบ
            </Link>
            <Link
              href="/success-story"
              className="block text-gray-700 hover:text-cyan-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              กรณีศึกษา
            </Link>
            <Link
              href="/#contact"
              className="block bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              ติดต่อเรา
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
