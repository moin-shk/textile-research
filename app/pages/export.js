// pages/export.js
import { supabase } from '../lib/supabaseClient'
import ExportChart from '../components/ExportChart'

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('cotton_export')
    .select('Country, "October 2020 - April 2021"')
    .order('Country', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
  }

  return { props: { records: data || [] } }
}

export default function ExportPage({ records }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-6">Cotton Exports by Country</h1>
      <ExportChart data={records} />
    </main>
  )
}
