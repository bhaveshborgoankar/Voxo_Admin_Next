import { NextResponse } from 'next/server';

export const middleware = (request) => {
    const url = request.nextUrl
    const cookie = request.cookies.get('uat')?.value
    // if (cookie == undefined) {
    //     console.log("gdgdgdgdgd", request.url);
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // console.log("cookie", cookie, "=>>", request.redirect('/login'))

};

export const config = {
    matcher: ["/auth/:path*"],
};