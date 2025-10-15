import { getProduct, ProductRes } from "@/app/prisma-db";
import UpdateProductForm from "./product-update-form";
import { notFound } from "next/navigation";

// Need to seprate because can't use ReactHook in Server Component and Client Component can't be async
export default async function UpdateProduct( { params }: { params: Promise<{ id: string }> } ) {
    const { id } = await params;
    const data = await getProduct(Number(id));

    if (!data) {
        return notFound();
    }

    const product: ProductRes = {
        id: data.id.toString(),
        title: data.title,
        price: data.price.toString(),
        description: data.description ?? ""
    };

    return <UpdateProductForm product={product} />;
};