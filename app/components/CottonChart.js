'use client'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts'

export default function CottonChart({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">No cotton data available.</p>
  }

  // pick the first year for demonstration
  const year = [...new Set(data.map((d) => d.Year))][0]
  const filtered = data.filter((d) => d.Year === year)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={filtered} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="State" />
        <YAxis />
        <Tooltip formatter={(v) => v.toLocaleString()} />
        <Bar
          dataKey="Quantity Procured (in lakh Bales)"
          name="Quantity (lakh Bales)"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
