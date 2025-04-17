// app/page.tsx
import DashboardClient from '../components/DashboardClient'
import { supabase }    from '../lib/supabaseClient'

export default async function DashboardPage() {
  const [
    { data: cottonData = [], error: cottonErr },
    { data: expData    = [], error: expErr    },
    { data: silkData   = [], error: silkErr   },
    { data: prodData   = [], error: prodErr   },
  ] = await Promise.all([
    supabase.from('State_wise_cotton_production').select('*').order('State', { ascending: true }),
    supabase.from('cotton_export').select('*').order('Country', { ascending: true }),
    supabase.from('silk_textile').select('*').order('Particulars', { ascending: true }),
    supabase.from('silk_production').select('*').order('Year', { ascending: true }),
  ])

  if (cottonErr) console.error('Cotton fetch error:', cottonErr)
  if (expErr)    console.error('Export fetch error:', expErr)
  if (silkErr)   console.error('Silk textile fetch error:', silkErr)
  if (prodErr)   console.error('Silk production fetch error:', prodErr)

  return (
    <DashboardClient
      cottonData={cottonData}
      expData={expData}
      silkData={silkData}
      prodData={prodData}
    />
  )
}
