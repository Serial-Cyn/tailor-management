// LIBRARIES
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// HELPER FUNCTIONS
import SetAuthCookie from "@/app/api/auth/setAuthCookie";
import SignToken from "@/app/api/auth/signToken";
import VerifyToken from "@/app/api/auth/verifyToken";

export async function POST(request: NextRequest) {
    try {
        const { fname, lname, role } = await request.json();

        // Get email from cookies
        const token = request.cookies.get("access_token")?.value;

        // If no token, user is unauthorized
        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Verify JWT and extract accountId
        const decoded = VerifyToken(token);

        // If token is invalid, user is unauthorized
        if (!decoded) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const accountId = Number(decoded.accountId); // Extracted from token

        // Guard the script against invalid accountId
        if (Number.isNaN(accountId)) {
            return NextResponse.json(
                { error: "Invalid account ID" },
                { status: 400 }
            );
        }

        // Create user profile in the database
        const user = await prisma.user.create({
            data: {
                name: `${fname} ${lname}`,
                type: role,
                account: { connect: { id: accountId } },
            },
        });

        // Issue new JWT with updated role
        const new_token = SignToken({
            accountId: accountId,
            email: decoded.email,
            role: role,
        });

        // Set new JWT as HttpOnly cookie
        await SetAuthCookie(new_token);

        // Setup complete
        return NextResponse.json(
            { message: "Setup complete", user },
            { status: 201 }
        );

    } catch (error) {
        console.error("Error during setup:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}