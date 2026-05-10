import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const password = req.cookies.get("site_password")?.value;

  const correctPassword = "mama123"; // change later if you want

  // allow access if already logged in
  if (password === correctPassword) {
    return NextResponse.next();
  }

  // allow login page
  if (req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // block everything else
  return NextResponse.redirect(new URL("/login", req.url));
}

// apply to all pages except static files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};