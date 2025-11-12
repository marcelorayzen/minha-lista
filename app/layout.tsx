import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Minha-lista',
  description: 'Aplicativo de Lista de Tarefas - Minha-lista',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
