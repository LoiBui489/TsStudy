import { Prisma } from "@prisma/client";
import { getProducts, ProductRes } from "../prisma-db";
import ProductList from "./product-list";

type Product = {
    id: number,
    title: string,
    price: Prisma.Decimal,
    description: string | null
};

export default async function ProductPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams;
    const data: Product[] = await getProducts(query);
    const products: ProductRes[] = data.map((row) => ({
        id: row.id.toString(),
        title: row.title,
        price: row.price.toString(),
        description: row.description ?? ""
    }))

    return <ProductList products={products} />;
};
