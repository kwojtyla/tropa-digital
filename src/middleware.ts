import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

// const publicRoutes = ["/login"];

export async function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl;
  // const cookieStore = await cookies();
  // // if (publicRoutes.includes(pathname)) {
  // //   return NextResponse.next();
  // // }
  // const sessionCookie: RequestCookie | undefined = cookieStore.get("jwt");
  // if (!sessionCookie) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api|healthcheck|manifest.json).*)",
  ],
};
