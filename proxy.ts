import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// HELPER FUNCTIONS
import VerifyToken from "@/app/api/auth/verifyToken";

export default function proxy(request: NextRequest) {
    // const rolePath = {
    //     tailor: "/dashboard/tailor",
    //     manager: "/dashboard/manager",
    //     client: "/dashboard/client",
    //     admin: "/dashboard/admin",
    // };

    // const token = request.cookies.get("access_token")?.value;

    // // If no token, redirect to auth page
    // if (!token) {
    //     return NextResponse.redirect(new URL("/auth", request.url));
    // }

    // try {
    //     // Verify JWT to ensure it's valid
    //     const decoded = VerifyToken(token);

    //     // If valid, proceed to the requested dashboard route
    //     if (!decoded) {
    //         return NextResponse.redirect(new URL("/auth", request.url));
    //     }

    //     const requestedPath = request.nextUrl.pathname;
    //     const userRolePath = rolePath[decoded.role as keyof typeof rolePath];

    //     // Guard against invalid roles
    //     if (!userRolePath) {
    //         return NextResponse.redirect(new URL("/auth", request.url));
    //     }

    //     // If user role does not match the requested path, redirect to their role-specific dashboard
    //     if (!requestedPath.startsWith(userRolePath)) {
    //         return NextResponse.redirect(new URL(userRolePath, request.url));
    //     }
        
    //     return NextResponse.next();

    // } catch {
    //     // Invalid token, redirect to auth page
    //     return NextResponse.redirect(new URL("/auth", request.url));
    // }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};