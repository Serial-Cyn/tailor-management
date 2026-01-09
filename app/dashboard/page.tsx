// LIBRARIES
import { cookies } from "next/headers"

// HELPER FUNCTIONS
import VerifyToken from "@/app/api/auth/verifyToken";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    // Get access token from cookies
    const token = (await cookies()).get("access_token")?.value;

    // If no token, redirect to auth
    if (!token) {
        return redirect("/auth");
    }

    // Verify token
    const decode = await VerifyToken(token!);

    // If token is invalid, redirect to auth
    if (!decode) {
        return redirect("/auth");
    }

    // Get role from decoded token
    const role = decode.role;
    const normalizeRole = typeof role === "string" ? role.toLowerCase() : null;

    // Redirect based on role
    switch (normalizeRole) {
        case "tailor":
            return redirect("/dashboard/tailor");
        case "manager":
            return redirect("/dashboard/manager");
        case "client":
            return redirect("/dashboard/client");
        case "admin":
            return redirect("/dashboard/admin");
        default:
            return redirect("/auth");
    }
}