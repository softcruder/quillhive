import './globals.css'
import { Baskervville } from 'next/font/google'
import Sidebar from './components/Sidebar'
import AppHeader from './components/AppHeader'

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: '400'
})

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
      <AppHeader logo='/public/vercel.svg' pathToProfilePicture='/public/next.svg'/>
      <Sidebar  logo='https://google.com'/>
      <body className={baskervville.className}>{children}</body>
    </html>
  )
}
