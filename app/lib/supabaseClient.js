import { createClient } from '@supabase/supabase-js'

const supabaseUrl   = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey   = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase env vars. ' +
    'Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set'
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey)
