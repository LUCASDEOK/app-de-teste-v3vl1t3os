import { supabase } from '@/lib/supabase/client'

export const invokeLogA = async () => {
  const { data, error } = await supabase.functions.invoke('log-a', {
    method: 'POST',
  })

  return { data, error }
}
