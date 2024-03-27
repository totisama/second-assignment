import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/css/bootstrap.min.css'
import '@/css/bootstrap-icons.css'
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { Modal } from '@/components/modal'
import { ModalProvider } from '@/context/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crispy Kitchen ',
  description: 'Crispy Kitchen - Bootstrap 5 HTML Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: 'relative' }}>
        <ModalProvider>
          <NavBar />
          {children}
          <Footer />
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
}
