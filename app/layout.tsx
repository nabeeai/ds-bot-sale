import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iBOTNOI - บริการวิทยาศาสตร์ข้อมูล",
  description: "บริการวิทยาศาสตร์ข้อมูลที่ช่วยให้ธุรกิจของคุณเติบโตด้วยการวิเคราะห์ข้อมูลขั้นสูงและเทคโนโลยี AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
