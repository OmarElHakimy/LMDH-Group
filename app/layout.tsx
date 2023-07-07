import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "./components/layout/Nav"
import Header from './components/layout/header'
import Footer from "./components/layout/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LMDH Group',
  description: 'LMDH Group Lorem ipsum ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
