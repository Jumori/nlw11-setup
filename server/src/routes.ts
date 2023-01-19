import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return habits
  })
}
