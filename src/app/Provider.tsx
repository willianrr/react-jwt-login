import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Provider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
