"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IntroSection from "@/components/reduce-cost/intro-section"
import GeospatialAnalysisSection from "@/components/reduce-cost/geospatial-analysis-section"
import ClusteringSection from "@/components/reduce-cost/clustering-section"
import TimeAnalysisSection from "@/components/reduce-cost/time-analysis-section"
import ResultsDashboardSection from "@/components/reduce-cost/results-dashboard-section"
import NextStepsSection from "@/components/reduce-cost/next-steps-section"

export default function ReduceCostPage() {
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
          <GeospatialAnalysisSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ClusteringSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TimeAnalysisSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ResultsDashboardSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <NextStepsSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
