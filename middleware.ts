import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default withAuth(
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "ADMIN",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};

type TokenPayload = {
  id: string;
  role: "SUPER_ADMIN" | "ADMIN" | "EDITOR";
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    // Allow login page
    if (pathname.startsWith("/admin/login")) {
      return NextResponse.next();
    }

    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as TokenPayload;

      // Role-based route restriction
      if (
        pathname.startsWith("/admin/users") &&
        decoded.role !== "SUPER_ADMIN"
      ) {
        return NextResponse.redirect(
          new URL("/admin", req.url)
        );
      }

      if (
        pathname.startsWith("/admin/settings") &&
        decoded.role !== "SUPER_ADMIN"
      ) {
        return NextResponse.redirect(
          new URL("/admin", req.url)
        );
      }

      if (
        pathname.startsWith("/admin/posts") &&
        decoded.role === "EDITOR"
      ) {
        return NextResponse.next(); // editors can manage posts
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}