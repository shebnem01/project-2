import { NextRequest, NextResponse } from "next/server";
import { jwtVerifyToken } from "./lib/auth";

const AUTH_PAGES = ['/login', '/register', '/forgot-password'];

const isAuthPages = (url: string) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get('token') ?? { value: null };

    const hasVerifiedToken = token && await jwtVerifyToken(token);
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            return NextResponse.next();

        }
        return NextResponse.redirect(new URL('/', url))
    }

    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/login', url))
    }
    console.log(hasVerifiedToken);
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/login',
        '/register',
        '/cart',
        '/wishlist',
        '/profile',

    ]
}