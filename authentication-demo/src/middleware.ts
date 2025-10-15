import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Role } from "../types/global";

// Protect the route pass in. Redirect to sign-in page if not signed in
const isProtectedRoute = createRouteMatcher(["/user-profile"]);
// const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // const { userId, redirectToSignIn } = await auth();
  // if (!userId && !isPublicRoute(req)) {
  //   // More handling here 

  //   return redirectToSignIn();
  // }
  if (isAdminRoute(req)) { 
    if (((await auth()).sessionClaims?.metadata as { role?: Role })?.role !== "admin") {
      const url = new URL("/", req.url);
      return NextResponse.redirect(url);
    }
  }

  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  // if (!isPublicRoute(req)) {
  //   await auth.protect();
  // }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};