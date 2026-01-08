import jwt from "jsonwebtoken";

export default function verifyToken(token: string) {
    let decoded: jwt.JwtPayload;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;

        return decoded;
        
    } catch {
        return null;
    }
}