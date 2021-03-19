import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import AppProvider from 'contexts'
import GlobalStyle from 'styles/global'
import { light, dark } from 'styles/themes'
import usePersistedState from 'utils/use-persisted-state'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence initial={false}>
            <>
              <Head>
                <meta
                  name="google-site-verification"
                  content="91HXkCGqHC-l_kIYPurM2YAJ95PRPX_15YxmUi8Fehg"
                />
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
                color={theme.colors.highlight}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
              />
              <Component
                key={router.route}
                toggleTheme={toggleTheme}
                {...pageProps}
              />
            </>
          </AnimatePresence>
        </AnimateSharedLayout>
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
