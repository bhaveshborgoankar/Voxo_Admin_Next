// import { NextResponse } from 'next/server';

// export const middleware = (request) => {
//     const allCookies = request.cookies.getAll();

//     const path = request.nextUrl.pathname;
//     console.log("allCookies,path", allCookies, path);
//     const cookie = request?.cookies.has("uat")
//     if (!cookie) {
//         return NextResponse.redirect(new URL('/auth/login', request.url))
//     } else NextResponse.next()
// };

// export const config = {
//     matcher: ["/users/:path*", "/"],
// };



// middleware.ts
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const allCookies = request.cookies.getAll();

    const path = request.nextUrl.pathname;
    const cookie = request?.cookies.has("uat")
    if (!cookie) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    } else NextResponse.next()

    if (path == "/auth/verify_otp" && !request.cookies.has("fpemail")) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (path == "/auth/update_password" && (!request.cookies.has("vo") || !request.cookies.has("fpemail"))) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/users/:path*", "/category/:path*", "/user/:path*", "/"],
    // matcher: ["/auth/:path*"],
};