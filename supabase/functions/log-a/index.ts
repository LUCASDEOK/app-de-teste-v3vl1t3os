import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Ação solicitada
  console.log('a')

  return new Response(
    JSON.stringify({ success: true, message: "Logged 'a' to console" }),
    {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    },
  )
})
