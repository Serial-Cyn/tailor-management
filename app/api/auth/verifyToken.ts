import jwt from "jsonwebtoken";

export default function VerifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;

        return decoded;
        
    } catch {
        return null;
    }
}