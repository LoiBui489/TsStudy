import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type ProductReq = {
    title: string,
    price: Prisma.Decimal,
    description: string | null
}

export type ProductRes = {
    id: string
    title: string,
    price: string,
    description: string | null
}

export async function getProducts(query?: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (query) {
        return prisma.product.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { description: { contains: query } }
                ]
            }
        });
    }

    return prisma.product.findMany();
}

export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prisma.product.findUnique({ where: { id } });
}

export async function addProduct(prodcut: ProductReq) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prisma.product.create({ data: prodcut });
}

export async function updateProduct(product: ProductReq, id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prisma.product.update({ where: { id }, data: product });
}

export async function deleteProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return prisma.product.delete({ where: { id } });
}