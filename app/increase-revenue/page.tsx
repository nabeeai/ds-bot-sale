"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IntroSection from "@/components/increase-revenue/intro-section"
import ClusterAnalysisSection from "@/components/increase-revenue/cluster-analysis-section"
import CampaignDesignSection from "@/components/increase-revenue/campaign-design-section"
import ResultsDashboardSection from "@/components/increase-revenue/results-dashboard-section"
import NextStepsSection from "@/components/increase-revenue/next-steps-section"

export default function IncreaseRevenuePage() {
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
          <ClusterAnalysisSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CampaignDesignSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ResultsDashboardSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <NextStepsSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
