import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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

        // Issue JWT for the new user
        const token = jwt.sign(
            { accountId: account.id, email: account.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "15m" }
        );

        // Set JWT as HttpOnly cookie
        (await
            // Set JWT as HttpOnly cookie
            cookies()).set("access token", token, { 
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Server error" }, 
            { status: 500 }
        );
    }
}