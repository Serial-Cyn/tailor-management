// LIBRARIES
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// HELPER FUNCTIONS
import SignToken from "@/app/api/auth/signToken";
import SetAuthCookie from "@/app/api/auth/setAuthCookie";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Check if user already exists
        const existing = await prisma.account.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 rounds of salt

        // Create new user
        const account = await prisma.account.create({
            data: {
                email,
                password: hashedPassword,
            },
            include: { users: true },
        });

        // Ensure account creation was successful
        if (!account) {
            return NextResponse.json(
                { error: "Failed to create account" },
                { status: 500 }
            );
        }

        // Create initial cookie for setup process
        const token = SignToken({
            accountId: account.id,
            email: account.email,
            role: "setup", // Temporary role for setup
        });

        // Set JWT as HttpOnly cookie
        await SetAuthCookie(token);

        return NextResponse.json(
            { message: "Registration successful" },
            { status: 201 }
        );

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Server error" }, 
            { status: 500 }
        );
    }
}