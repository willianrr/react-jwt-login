import jwt from 'jsonwebtoken'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
export async function middleware(request: NextRequest) {
  const Authorization = request.cookies.get('Authorization')

  if (!Authorization) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const secret = process.env.SECRET

  if (!secret) {
    throw new Error('SECRET environment variable is not defined')
  }

  const decodedToken = jwt.verify(Authorization.value, secret) as jwt.JwtPayload
  const userRole = decodedToken.role

  console.log(userRole)

  try {
  } catch (error) {
    console.error('Error during token validation:', error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/', '/painel/:path*'],
}
