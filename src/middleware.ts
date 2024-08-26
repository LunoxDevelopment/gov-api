import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { getToken } from "next-auth/jwt";

// const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  // Check if the request is for the `/manage` path
  if (req.nextUrl.pathname.startsWith('/manage')) {
    // Temporarily bypass the authentication check for development
    // const token = await getToken({ req, secret });

    // If there's no token, redirect to the login page
    // if (!token) {
    //   return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    // }

    // Allow all requests for development
    console.log("Authentication bypassed for development purposes.");
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Specify which paths you want the middleware to run on
export const config = {
  matcher: ['/manage/:path*'],
};
