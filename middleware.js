import { NextResponse } from 'next/server';

export const middleware = (request) => {
    // const url = request.nextUrl
    const cookie = request?.cookies.has("uat")
    console.log("cookie", "request", request?.cookies.has("uat"));
    if (cookie) {
        console.log("gdgdgdgdgd", request.url);
        return NextResponse.redirect(new URL('/auth/login', request.url))
    } else NextResponse.next()
};

export const config = {
    matcher: ["/auth/:path*"],
};