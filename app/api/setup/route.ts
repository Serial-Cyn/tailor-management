import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    // Let the script know that we are expecting a JWT payload with an accountId to prevent TS errors
    interface AuthTokenPayload extends jwt.JwtPayload {
        accountId: string;
    }

    try {
        const { fname, lname, role } = await request.json();

        // Get email from cookies
        const token = request.cookies.get("access token")?.value;

        // If no token, user is unauthorized
        if (!token) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Verify JWT and extract accountId
        let decoded: AuthTokenPayload;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthTokenPayload;

        } catch {
            return NextResponse.json(
                { error: "Invalid token" },
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

        // RETURN STATEMENT
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