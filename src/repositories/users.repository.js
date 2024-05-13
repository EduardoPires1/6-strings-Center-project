import { PrismaClient } from "@prisma/client"

export class UsersRepository {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createUser({ name, email, password }) {
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                password,
                admin: false
            }
        })

        return user
    }

    async getAllUsers(){
        const users = await this.prisma.user.findMany()
        return users
    }

    async getUser() {
        const user = await this.prisma.user.findFirst()

        return user
    }

    async getUserByEmail(email) {
        const user = await this.prisma.user.findUnique({ where: { email } })

        return user
    }

    async updateUser({ id, name, email, password }) {
        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password,
            }
        })

        return user
    }

    async deleteUser(id) {
        await this.prisma.user.delete({ where: { id } })
    }
}