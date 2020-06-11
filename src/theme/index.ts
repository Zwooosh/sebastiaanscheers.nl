import breakpoints from './breakpoints'
import { colorsDark, colorsLight } from './colors'
import radii from './radii'
import shadows from './shadows'
import sizes, { baseSizes } from './sizes'
import typography from './typography'
import zIndices from './zIndices'
import variants from './variants'
import { useTheme, ThemeProvider, ThemeVariants } from './context'

const themeDark = {
  breakpoints,
  zIndices,
  radii,
  colors: colorsDark,
  ...typography,
  sizes,
  shadows,
  space: baseSizes,
  variants,
}

const themeLight = {
  ...themeDark,
  colors: colorsLight,
}

export type Theme = typeof themeDark
const themes: { [key in ThemeVariants]: Theme } = {
  dark: themeDark,
  light: themeLight,
}

export const themeSelect = (mode: ThemeVariants) =>
  (themes[mode] || themeDark) as Theme

export { ThemeProvider, useTheme }
