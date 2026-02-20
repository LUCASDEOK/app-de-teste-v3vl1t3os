import { Outlet } from 'react-router-dom'
import { TestTube } from 'lucide-react'

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b h-14 md:h-16 flex items-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
      <TestTube className="h-6 w-6 md:h-8 md:w-8 text-primary" />
      <h1 className="ml-3 text-xl md:text-2xl font-bold text-foreground">
        Aplicativo de Teste
      </h1>
    </div>
  </header>
)

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-secondary-foreground">
      © {new Date().getFullYear()} Aplicativo de Teste. Todos os direitos
      reservados.
    </div>
  </footer>
)

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-14 md:pt-16">
        <div className="container mx-auto py-6 sm:py-8 lg:py-12">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
