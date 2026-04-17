import type { Metadata, Viewport } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  variable: '--font-nunito-sans',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bsfasesores.vercel.app'),
  title: 'BSF Asesores | Protección Patrimonial y Seguros de Vida',
  description: 'Firma financiera líder con más de 25 años de experiencia. Especialistas en seguros de vida, gastos médicos mayores y planes de retiro. Protegemos tu futuro y el de tu familia.',
  keywords: ['seguros de vida', 'asesores financieros México', 'planes de retiro CDMX', 'gastos médicos mayores', 'protección patrimonial', 'BSF Asesores'],
  authors: [{ name: 'BSF Asesores' }],
  openGraph: {
    title: 'BSF Asesores | Protección Inteligente para tu Futuro',
    description: 'Asegura tu patrimonio con los expertos. Más de 25 años brindando tranquilidad y seguridad financiera.',
    type: 'website',
    locale: 'es_MX',
    images: ['/images/Logo_BSF.png'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
