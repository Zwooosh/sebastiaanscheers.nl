import App from 'next/app'
import { css, Global } from '@emotion/core'
import { ThemeProvider, withTheme } from 'emotion-theming'

import { themeDark, Theme } from '@/theme'

const makeGlobalStyles = (theme: Theme) => css`
  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    outline: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={themeDark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
