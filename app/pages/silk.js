// pages/silk.js
import { supabase } from '../lib/supabaseClient'
import SilkChart from '../components/SilkChart'

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('silk_textile')
    .select(
      'Particulars, Unit, "2017-18", "2018-19", "2019-20", "2020-21", "2021-22", "2022-23"'
    )
    .order('Particulars', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
  }

  return { props: { records: data || [] } }
}

export default function SilkPage({ records }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-6">Silk Textile Production Trends</h1>
      <SilkChart data={records} />
    </main>
  )
}
