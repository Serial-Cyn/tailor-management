import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("access token")?.value;

    // If no token, redirect to auth page
    if (!token) {
        return NextResponse.json(
            new URL("/auth", request.url)
        );
    }

    try {
        // Verify JWT to ensure it's valid
        jwt.verify(token, process.env.JWT_SECRET!);

        return NextResponse.next();

    } catch {
        // Invalid token, redirect to auth page
        return NextResponse.json(
            new URL("/auth", request.url)
        );
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};