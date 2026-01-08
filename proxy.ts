import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";

// HELPER FUNCTIONS
import VerifyToken from "@/app/api/auth/verifyToken";

export default function proxy(request: NextRequest) {
    const token = request.cookies.get("access_token")?.value;

    // If no token, redirect to auth page
    if (!token) {
        return redirect("/auth");
    }

    try {
        // Verify JWT to ensure it's valid
        const decoded = VerifyToken(token);

        // If valid, proceed to the requested dashboard route
        if (!decoded) {
            return redirect("/auth");
        }
        
        return NextResponse.next();

    } catch {
        // Invalid token, redirect to auth page
        return redirect("/auth");
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};