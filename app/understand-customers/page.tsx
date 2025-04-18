import IntroSection from "@/components/understand-customers/intro-section"
import ReviewsSection from "@/components/understand-customers/reviews-section"
import WordCloudSection from "@/components/understand-customers/word-cloud-section"
import SentimentAnalysisSection from "@/components/understand-customers/sentiment-analysis-section"
import TopicModelingSection from "@/components/understand-customers/topic-modeling-section"
import DashboardSection from "@/components/understand-customers/dashboard-section"
import ConclusionSection from "@/components/understand-customers/conclusion-section"

export default function UnderstandCustomersPage() {
  return (
    <main className="min-h-screen bg-white">
      <IntroSection />
      <ReviewsSection />
      <WordCloudSection />
      <SentimentAnalysisSection />
      <TopicModelingSection />
      <DashboardSection />
      <ConclusionSection />
    </main>
  )
}
