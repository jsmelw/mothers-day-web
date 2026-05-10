import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const password = req.cookies.get("site_password")?.value;

  const correctPassword = "mama123";

  if (password === correctPassword) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|textures/|.*\\..*).*)"],
};
