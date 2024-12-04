import { Inter } from 'next/font/google'
import { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FotoBoxx Exhibitions - #1 Exhibition Stand Builder in Dubai",
  description: "FotoBoxx Exhibitions is your go-to solution for Innovative Booth Design & Construction in Dubai",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <div className={`${inter.className} scroll-smooth`}>
      {children}
    </div>

      </body>
    </html>
    
  )
}

