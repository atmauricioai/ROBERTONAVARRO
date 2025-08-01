import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Roberto Navarro | Transforme sua Mentalidade",
  description:
    "Descubra as chaves para destravar uma mentalidade de riqueza e alcançar novos patamares no seu negócio.",
  generator: "Moitinho.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KB66J525" />
       <body className={`${montserrat.variable} font-montserrat`}>
        
       
<Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
