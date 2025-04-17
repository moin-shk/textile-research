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

export default function ExportChart({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">No export data available.</p>
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Country"
          interval={0}
          angle={-45}
          textAnchor="end"
          height={100}
        />
        <YAxis />
        <Tooltip formatter={(v) => v.toLocaleString()} />
        <Bar
          dataKey="October 2020 - April 2021"
          name="Exports (Units)"
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
