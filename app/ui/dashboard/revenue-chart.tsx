export default function RevenueChart({
  revenue,
}: {
  revenue: any; // Remplacez temporairement Revenue[] par any
}) {
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full bg-gray-200 p-4">
      <h2>Revenue Chart Placeholder</h2>
      {revenue.map((month: any) => (
        <div key={month.month}>
          <p>{month.month}: {month.revenue}</p>
        </div>
      ))}
    </div>
  );
}
