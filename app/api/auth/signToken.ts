import jwt from "jsonwebtoken";

export default function SignToken(payload: object): string {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
    );

    return token;
}