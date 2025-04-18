import DashboardHeader from "@/components/dashboard/dashboard-header"
import LiveDashboards from "@/components/dashboard/live-dashboards"
import CustomerDataTable from "@/components/dashboard/customer-data-table"
import DemoSimulation from "@/components/dashboard/demo-simulation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function InteractiveDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main className="pb-16">
        <DashboardHeader />
        <div className="container mx-auto px-4 space-y-12">
          <LiveDashboards />
          <CustomerDataTable />
          <DemoSimulation />
        </div>
      </main>
      <Footer />
    </div>
  )
}
