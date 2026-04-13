import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Terminal } from 'lucide-react'
import { invokeLogA } from '@/services/log-a'
import { useToast } from '@/hooks/use-toast'

export default function Index() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleInvoke = async () => {
    setLoading(true)
    try {
      const { error } = await invokeLogA()

      if (error) {
        throw error
      }

      toast({
        title: 'Função invocada com sucesso!',
        description:
          "Verifique os logs da Edge Function no painel do Supabase para visualizar o console.log('a').",
      })
    } catch (error: any) {
      toast({
        title: 'Erro ao invocar a função',
        description:
          error.message || 'Não foi possível comunicar com a Edge Function.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            Supabase Edge Function
          </CardTitle>
          <CardDescription>
            Teste a execução de código remoto diretamente no seu backend.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10 space-y-6 bg-muted/30 rounded-b-lg border-t">
          <div className="text-center space-y-2 max-w-sm">
            <p className="text-sm text-muted-foreground">
              Ao clicar no botão abaixo, a aplicação fará uma requisição para a
              Edge Function <strong>log-a</strong>.
            </p>
          </div>
          <Button
            size="lg"
            onClick={handleInvoke}
            disabled={loading}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {loading
              ? 'Executando no servidor...'
              : "Executar console.log('a')"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
