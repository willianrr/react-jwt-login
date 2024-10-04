import NextAuth from 'next-auth/next'
import { authOptions } from './authOptions'

const handler = (req: any, res: any) => NextAuth(req, res, authOptions)

export { handler as GET, handler as POST }
