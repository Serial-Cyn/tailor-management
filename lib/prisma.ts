import { PrismaClient } from "@prisma/client/extension";

// Extend the global object to include PrismaClient
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

// Create a new Prisma Client instance or use the existing one in development
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query"],
    });

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}