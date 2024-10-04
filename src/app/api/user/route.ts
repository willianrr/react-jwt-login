import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const Authorization = cookieStore.get('Authorization')
  if (!Authorization) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Authorization.value}`,
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Fetch error:', error)
    throw new Error('Network response was not ok ' + error)
  }
}
