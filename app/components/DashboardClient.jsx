// components/DashboardClient.jsx
'use client'

import dynamic from 'next/dynamic'


// load charts only in browser
const CottonChart     = dynamic(() => import('./CottonChart'),     { ssr: false })
const ExportChart     = dynamic(() => import('./ExportChart'),     { ssr: false })
const SilkChart       = dynamic(() => import('./SilkChart'),       { ssr: false })
const ProductionChart = dynamic(() => import('./ProductionChart'), { ssr: false })

export default function DashboardClient({
  cottonData,
  expData,
  silkData,
  prodData,
}) {
  return (
    <main className="p-8 space-y-16">

      <section>
        <h2 className="text-2xl font-semibold mb-4">State‑Wise Cotton Production</h2>
        <CottonChart data={cottonData} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cotton Exports (Oct 2020 – Apr 2021)</h2>
        <ExportChart data={expData} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Silk Textile Trends</h2>
        <SilkChart data={silkData} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Silk Production Trends</h2>
        <ProductionChart data={prodData} />
      </section>
    </main>
  )
}
