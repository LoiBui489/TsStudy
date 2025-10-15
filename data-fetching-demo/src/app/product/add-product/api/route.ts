import { addProduct, ProductReq } from "@/app/prisma-db";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
    const body = await req.json();
    const product: ProductReq = {
        title: body.title,
        price: Prisma.Decimal(body.price),
        description: body.description,
    };

    const newProduct = await addProduct(product);

    return new Response(JSON.stringify(newProduct), { 
        headers: { "Content-Type": "application/json" },
        status: 201 
    });
}