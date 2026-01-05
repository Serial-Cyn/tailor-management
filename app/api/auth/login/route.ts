import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const account = await prisma.account.findUnique({
            where: { email },
            include: { user: true },
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

        return NextResponse.json({ account });

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}