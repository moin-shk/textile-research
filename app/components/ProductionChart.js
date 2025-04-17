'use client'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

export default function ProductionChart({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">No production data available.</p>
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Year"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={60}
        />
        <YAxis />
        <Tooltip formatter={(v) => v.toLocaleString()} />
        <Legend verticalAlign="top" height={36} />
        {[
          'Mulberry Silk',
          'Vanya (Non-Mulberry) Silk-Tasar',
          'Vanya (Non-Mulberry) Silk-Eri',
          'Vanya (Non-Mulberry) Silk-Muga',
          'Total (Mulberry+ Vanya)',
        ].map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            name={key}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
