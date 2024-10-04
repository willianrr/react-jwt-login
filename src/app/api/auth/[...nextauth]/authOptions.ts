// authOptions.ts
import https from 'https'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'
import fetch from 'node-fetch'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid credentials')
        }
        try {
          const url = `https://api-onecloud.multicloud.tivit.com/fake/token?username=${encodeURIComponent(
            credentials.username,
          )}&password=${encodeURIComponent(credentials.password)}`

          const agent = new https.Agent({
            rejectUnauthorized: false,
          })

          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            agent,
          })

          if (!response.ok) {
            throw new Error('Invalid response from API')
          }
          const validToken: any = await response.json()

          cookies().set('Authorization', validToken.access_token)

          return validToken
        } catch (error) {
          throw new Error("Can't login, try again")
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session }) {
      return session
    },
  },
}
