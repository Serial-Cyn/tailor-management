import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const { email, password, name } = await request.json();

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
                user: {
                    create: { name },
                },
            },
            include: { user: true },
        });

        return NextResponse.json({ account });

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Server error" }, 
            { status: 500 }
        );
    }
}