// pages/production.js
import { supabase } from '../lib/supabaseClient'
import ProductionChart from '../components/ProductionChart'

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('silk_production')
    .select(
      'Year, "Mulberry Silk", "Vanya (Non-Mulberry) Silk-Tasar", "Vanya (Non-Mulberry) Silk-Eri", "Vanya (Non-Mulberry) Silk-Muga", "Total (Mulberry+ Vanya)", "Silk Yarn-Spun Silk Yarn", "Silk Yarn-Noil Yarn", "Silk Yarn-Total"'
    )
    .order('Year', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
  }

  return { props: { records: data || [] } }
}

export default function ProductionPage({ records }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-6">Silk Production Trends</h1>
      <ProductionChart data={records} />
    </main>
  )
}
