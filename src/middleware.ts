import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateSession } from "./app/lib/auth-server";
import { decrypt } from "./app/lib/auth-client";

const publicRoutes = ["/login", "/register", "/forgot-password"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const sessionCookie = req.cookies.get("session");

  if (!sessionCookie) {
    if (!publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  const session = await decrypt(sessionCookie.value);

  if (!session) {
    if (!publicRoutes.includes(pathname)) {
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.set("session", "", { expires: new Date(0) });
      return response;
    }
    return NextResponse.next();
  }

  if (new Date() > new Date(session.expires)) {
    if (!publicRoutes.includes(pathname)) {
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.set("session", "", { expires: new Date(0) });
      return response;
    }
    return NextResponse.next();
  }

  if (pathname === "/login" && session.user) {
    return NextResponse.redirect(new URL("/eventos", req.url));
  }

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  return await updateSession(req);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api|healthcheck|manifest.json).*)",
  ],
};
