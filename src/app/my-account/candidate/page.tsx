import MainLayout from '@/components/Dashboard/Candidate/Mainlayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600 mt-2">Welcome back</p>
        </div>
      </div>
    </MainLayout>
  );
}