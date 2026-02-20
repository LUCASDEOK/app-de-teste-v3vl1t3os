import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, FileText, Settings, ArrowRight } from 'lucide-react'

const Index = () => {
  const recentActivities = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-success" />,
      text: 'Item A criado',
    },
    {
      icon: <Settings className="h-5 w-5 text-secondary-foreground" />,
      text: 'Configurações atualizadas',
    },
    {
      icon: <FileText className="h-5 w-5 text-secondary-foreground" />,
      text: 'Relatório gerado',
    },
  ]

  return (
    <div className="animate-fade-in space-y-8 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Bem-vindo ao Aplicativo de Teste!
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-base text-secondary-foreground">
          Explore as funcionalidades e o design responsivo deste ambiente de
          demonstração.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Progresso Atual
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4 pt-2">
            <Progress value={75} className="w-full h-3" />
            <span className="text-sm font-medium text-secondary-foreground">
              75% Tarefa Concluída
            </span>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {activity.icon}
                  <span className="text-sm text-secondary-foreground">
                    {activity.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Status do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-success" />
            <span className="font-semibold text-foreground">Ativo</span>
            <p className="text-sm text-secondary-foreground">
              Última verificação: há 1 minuto.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Link to="/details">
                Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Link to="/details">
                Configurações <Settings className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index
