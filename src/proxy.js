import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
    '/account/profile',
    '/account/settings',
    '/create',
    '/explore',
    '/feed',
])

// Custom sign-in path
const SIGN_IN_PATH = '/account/signin'
const HOME_PATH = '/feed'

export default clerkMiddleware(async (auth, req) => {
    const { isAuthenticated, redirectToSignIn } = await auth()

    const { pathname } = req.nextUrl

    if (!isAuthenticated && isProtectedRoute(req)) {
        if (pathname === SIGN_IN_PATH) {
            return NextResponse.next()
        }

        return redirectToSignIn({ redirectUrl: SIGN_IN_PATH })
    }

    if (isAuthenticated && pathname === SIGN_IN_PATH) {
        const url = req.nextUrl.clone()
        url.pathname = HOME_PATH
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico)).*)',
        '/(api|trpc)(.*)'
    ],
}
