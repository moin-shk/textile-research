// components/SilkChart.js
'use client'

import React from 'react'
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

export default function SilkChart({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No textile data available.</p>
  }

  const years = ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23']

  const numericData = data.map(row => {
    const cleaned = { Particulars: row.Particulars }
    years.forEach(y => {
      const raw = row[y]
      const num = parseFloat(String(raw).replace(/,/g, ''))
      cleaned[y] = isNaN(num) ? 0 : num
    })
    return cleaned
  })

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={numericData}
        margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Particulars"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={80}
        />
        <YAxis />
        <Tooltip formatter={value => value.toLocaleString()} />
        <Legend verticalAlign="top" height={36} />
        {years.map(y => (
          <Line key={y} type="monotone" dataKey={y} name={y} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
