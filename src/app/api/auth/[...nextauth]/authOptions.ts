// authOptions.ts
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log(credentials)
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid credentials')
        }
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}/token?username=${credentials.username}&password=${credentials.password}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            },
          )
          console.log('RESPONSE', response)
          const res = await response.json()
          cookies().set('Authorization', res.data)

          return res.data
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
