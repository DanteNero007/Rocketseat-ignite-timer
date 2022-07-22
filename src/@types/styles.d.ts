import 'styled-components'
import { defaultGreen } from '../styles/themes/defaultGreen'
import { defaultTheme } from '../styles/themes/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
