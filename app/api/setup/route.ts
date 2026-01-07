import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
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
        let decoded: any;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET!);

        } catch {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }

        const accountId = decoded.accountId; // Extracted from token

        // Create user profile in the database
        const user = await prisma.user.create({
            data: {
                name: `${fname} ${lname}`,
                type: role,
                account: { connect: { id: accountId } },
            },
        });

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