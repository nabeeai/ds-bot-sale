"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import ForecastSection from "@/components/forecast-section"
import DashboardSection from "@/components/dashboard-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ValueSection from "@/components/value-section"
import TeamSection from "@/components/team-section"
import ClientsSection from "@/components/clients-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ValueSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ForecastSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <DashboardSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <TeamSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ClientsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
