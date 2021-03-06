import App from 'next/app'
import { Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'context/ThemeContext'
import { IntroProvider } from 'context/IntroContext'
import { makeGlobalStyles } from 'shared/styles'

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <ThemeProvider>
        <GlobalStyles />
        <IntroProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </IntroProvider>
      </ThemeProvider>
    )
  }
}
