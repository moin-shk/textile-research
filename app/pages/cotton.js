// pages/cotton.js
import styles from './styles/cotton.module.css'
import { supabase } from './lib/supabaseClient'
import dynamic from 'next/dynamic'

// Load the client chart only in the browser
const CottonChart = dynamic(() => import('../components/CottonChart'), {
  ssr: false,
})

export default function CottonPage({ records }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>State‑Wise Cotton Production</h1>
      <div className={styles.chartWrapper}>
        <CottonChart data={records} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('state_wise_cotton_production')
    .select('*')
    .order('State', { ascending: true })

  if (error) console.error(error)

  return {
    props: { records: data ?? [] },
  }
}
