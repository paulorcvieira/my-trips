import { PropsWithChildren } from 'react'

import { ToastProvider } from './toast'
import { AuthProvider } from './auth'

const AppProvider = ({ children }: PropsWithChildren<unknown>) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
)

export default AppProvider
