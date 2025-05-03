export default function WindCard({ speed, deg, unit }: { speed: number; deg: number; unit: string }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h4 className="font-semibold text-sm mb-2">Wind Status</h4>
      <p className="text-xl font-bold">{speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
      <p className="text-sm text-gray-600">Direction: {deg}°</p>
    </div>
  );
}
