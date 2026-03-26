import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher([
	"/",
	"/about",
	"/services",
	"/houses/(.*)",
	"/houses",
	"/admin(.*)",
	"/control/admin/dashboard/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
	if (isPublicRoute(req)) {
		return NextResponse.next(); // Allow public access
	}
	auth.protect(); // Protect non-public routes
});

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico).*)", // Better static exclusion
		"/admin(.*)", // Explicit admin route matching
	],
};
