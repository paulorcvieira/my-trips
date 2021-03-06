import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useCallback } from 'react'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'contexts'
import GlobalStyle from 'styles/global'
import * as themes from 'styles/themes'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = useCallback(() => {
    setTheme(!theme)
  }, [setTheme])

  return (
    <ThemeProvider theme={theme ? themes.dark : themes.light}>
      <AppProvider>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence initial={false}>
            <Head>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossOrigin=""
              />
              <meta name="theme-color" content="#06092b" />
            </Head>
            <DefaultSeo {...SEO} />
            <NextNprogress
              color={themes.dark.colors.highlight}
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <Component
              toggleTheme={toggleTheme}
              {...pageProps}
              key={router.route}
            />
          </AnimatePresence>
        </AnimateSharedLayout>
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
