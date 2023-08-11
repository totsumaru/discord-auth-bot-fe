import {createMiddlewareClient} from '@supabase/auth-helpers-nextjs'
import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({req, res})

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {data: {session}} = await supabase.auth.getSession()

  // if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/login'
  //   return NextResponse.redirect(redirectUrl)
  // }
  //
  // if (!session && req.nextUrl.pathname.startsWith('/config')) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/login'
  //   return NextResponse.redirect(redirectUrl)
  // }
  //
  // if (!session && req.nextUrl.pathname === '/') {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/login'
  //   return NextResponse.redirect(redirectUrl)
  // }

  return res
}
