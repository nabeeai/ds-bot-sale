import SuccessStoryHeader from "@/components/success-story/success-story-header"
import ProblemSection from "@/components/success-story/problem-section"
import ApproachSection from "@/components/success-story/approach-section"
import ResultsSection from "@/components/success-story/results-section"
import DemoSection from "@/components/success-story/demo-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SuccessStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <SuccessStoryHeader />
        <div className="container mx-auto px-4 py-12 space-y-16">
          <ProblemSection />
          <ApproachSection />
          <ResultsSection />
          <DemoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
