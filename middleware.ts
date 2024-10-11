import { NextRequest, NextResponse } from "next/server";
import { jwtVerifyToken } from "./lib/jwt";

const AUTH_PAGES = ['/login', '/register', '/forgot-password'];
const ADMIN_PAGES = ['/dashboard'];


const isAuthPages = (url: string) => AUTH_PAGES.some((page) => url.startsWith(page));
const isAdminPages = (url: string) => ADMIN_PAGES.some(page => url.startsWith(page));


export async function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get('token') ?? { value: null };


    const hasVerifiedToken = token && await jwtVerifyToken(token);
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);
    const isAdminPageRequested = isAdminPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            return NextResponse.next();

        }
        return NextResponse.redirect(new URL('/', url))
    }
 
    if (isAdminPageRequested) {
        if (!hasVerifiedToken || hasVerifiedToken.role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/login', url))
        }
    }
    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/login', url))
    }

    return NextResponse.next();
}
export const config = {
    matcher: [
        '/login',
        '/register',
        '/cart',
        '/wishlist',
        '/profile',
        '/dashboard/:path*'

    ]
}