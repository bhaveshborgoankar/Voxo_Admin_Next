import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const cookie = request?.cookies.has("uat")
    if (!cookie) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    } else NextResponse.next()
};

export const config = {
    matcher: ["/users/:path*", "/"],
};