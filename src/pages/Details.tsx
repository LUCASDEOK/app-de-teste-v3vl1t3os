import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  fullName: z.string().min(1, { message: 'Nome Completo é obrigatório.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  comments: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar os termos e condições.',
  }),
})

export default function DetailsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      comments: '',
      terms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success('Dados enviados com sucesso!')
    form.reset()
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 md:px-0 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold text-foreground">
          Página de Detalhes
        </h1>
        <p className="mt-2 text-base text-secondary-foreground">
          Preencha o formulário abaixo para testar a entrada de dados.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comentários</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Deixe seus comentários aqui..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Aceito os termos e condições</FormLabel>
                  <FormDescription>
                    Você concorda com nossos Termos de Serviço e Política de
                    Privacidade.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Enviar
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 rounded-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Link to="/">Voltar para Início</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
