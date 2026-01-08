// LIBRARIES
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// HELPER FUNCTION
import signToken from "@/app/api/auth/signToken";
import setAuthCookie from "@/app/api/auth/setAuthCookie";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const account = await prisma.account.findUnique({
            where: { email },
            include: { users: true },
        });

        if (!account) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 400 }
            );
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, account.password);

        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 400 }
            );
        }

        // Find user profile
        const userProfile = await prisma.user.findUnique({
            where: { accountId: account.id },
        });

        // Issue JWT for the new user
        const token = signToken({
            accountId: account.id,
            email: account.email,
            role: userProfile?.type || "guest",
        });
        
        // Set JWT as HttpOnly cookie
        await setAuthCookie(token);

        return NextResponse.json({ account });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}