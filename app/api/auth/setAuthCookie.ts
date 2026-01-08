import { cookies } from "next/headers";

export default async function setAuthCookie(token: string) {
    (await
        // Set JWT as HttpOnly cookie
        cookies()).set("access_token", token, { 
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60, // 15 minutes
    });
}