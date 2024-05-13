import { PrismaClient } from "@prisma/client"

export class ProductsRepository {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createProduct({ name, description, price, imageUrl }) {
        const product = await this.prisma.product.create({
            data: {
                name,
                description,
                price,
                imageUrl
            }
        })

        return product
    }

    async getProducts() {
        const products = await this.prisma.product.findMany()

        return products
    }

    async updateProduct({ id, name, description, price, imageUrl }) {
        const product = await this.prisma.product.update({
            where: {
                id
            },
            data: {
                name,
                description,
                price,
                imageUrl,
            }
        })

        return product
    }

    async deleteProduct(id) {
        await this.prisma.product.delete({ where: { id } })
    }
}