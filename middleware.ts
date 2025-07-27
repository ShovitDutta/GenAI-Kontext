import { auth } from "./auth";
import { NextResponse } from "next/server";
export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { pathname } = req.nextUrl;
    if (isLoggedIn && pathname === "/") return NextResponse.redirect(new URL("/home", req.url));
});
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/private/:path*"],
};
