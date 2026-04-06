type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
