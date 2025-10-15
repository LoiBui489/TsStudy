// Middleware help to intercept and control the request and response
// Middleware let you specify paths where it should be active
// Custom matcher config
// Conditional statement

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // Conditional statement
    // if (req.nextUrl.pathname === "/user") {
    //     return NextResponse.redirect(new URL("/hello", req.url));
    // }

    // Custom matcher config
    // return NextResponse.redirect(new URL("/user/user-detail", req.url));

    // rewrite keep the "req.nextUrl.pathname" but show the new path in the "new URL()" 
    // return NextResponse.rewrite(new URL("/user/user-detail", req.url));

    // Handle Cookies and Headers
    // const res = NextResponse.next();
    // const theme = req.cookies.get("theme");
    // if (!theme) {
    //     res.cookies.set("theme", "light");
    // }
    // res.headers.set("custom-header", "custom-value");
    // return res;
};

// Custom matcher config
// export const config = { 
//     matcher: ["/notification/api"] 
// };