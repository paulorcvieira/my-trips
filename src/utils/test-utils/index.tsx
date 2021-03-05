import { ReactElement } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import * as theme from 'styles/themes'

const customRender = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme.dark}>{ui}</ThemeProvider>)

export * from '@testing-library/react'
export { customRender as render }
