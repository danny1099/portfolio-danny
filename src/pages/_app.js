import { ThemeProvider } from 'next-themes'
import { HeadPage, RootLayout } from '@/components'
import { useLocales } from '@/hooks'
import '@/globals.css'

export default function App({ Component, pageProps, router }) {
  const t = useLocales({ search: router.pathname })

  return (
    <ThemeProvider>
      {/* Component to change meta tags for every page */}
      <HeadPage t={t} />

      <RootLayout>
        <Component {...pageProps} t={t} />
      </RootLayout>
    </ThemeProvider>
  )
}
