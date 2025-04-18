"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IntroSection from "@/components/smart-decision/intro-section"
import DailyDataSection from "@/components/smart-decision/daily-data-section"
import SolutionSection from "@/components/smart-decision/solution-section"
import DashboardSection from "@/components/smart-decision/dashboard-section"
import ResultsSection from "@/components/smart-decision/results-section"
import ConclusionSection from "@/components/smart-decision/conclusion-section"

export default function SmartDecisionPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <motion.div
          style={{ opacity }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-50 to-white -z-10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IntroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DailyDataSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SolutionSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <DashboardSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ResultsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <ConclusionSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
