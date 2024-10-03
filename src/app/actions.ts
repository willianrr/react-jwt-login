'use server'

import { cookies } from 'next/headers'
export async function removeCookie(cookie: string) {
  cookies().delete(cookie)
}
