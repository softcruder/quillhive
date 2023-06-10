import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quillhive',
  description: 'Unleash Your Words, Connect Your World.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Sidebar  logo='https://google.com'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
