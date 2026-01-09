import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// HELPER FUNCTIONS
import VerifyToken from "@/app/api/auth/verifyToken";

export default function proxy(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;

    // If no token, redirect to auth page
    if (!token) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    try {
        // Verify JWT to ensure it's valid
        const decoded = VerifyToken(token);

        // If valid, proceed to the requested dashboard route
        if (!decoded) {
            return NextResponse.redirect(new URL("/auth", request.url));
        }
        
        return NextResponse.next();

    } catch {
        // Invalid token, redirect to auth page
        return NextResponse.redirect(new URL("/auth", request.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};