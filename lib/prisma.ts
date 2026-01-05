import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// Ensure a single instance of PrismaClient is used across the app
const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

// Initialize Prisma Client with PostgreSQL adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

// Create or reuse the PrismaClient instance
const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

// In development, attach PrismaClient to the global object to prevent multiple instances
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma