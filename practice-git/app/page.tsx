import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";
import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="p-6">
        <h2 className="mb-6 text-3xl font-bold">Dashboard</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <DashboardCard title="Users" value="1,245" />
          <DashboardCard title="Sales" value="$8,430" />
          <DashboardCard title="Orders" value="320" />
        </div>

        <WelcomeCard />
      </main>
    </div>
  );
}
