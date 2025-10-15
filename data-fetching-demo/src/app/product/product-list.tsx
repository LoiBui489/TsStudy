'use client';

import { ProductRes } from "../prisma-db";
import Link from "next/link";
import { remove } from "@/action/product";
import { useOptimistic } from "react";

export default function ProductList({ products }: { products: ProductRes[] }) {
    // Update UI when the fetching still run in the background
    const [optimisticProducts, setOptimisticProducts] = useOptimistic(
        products,
        (currentProducts, productId) => {
            return currentProducts.filter((product) => product.id !== productId)
        }
    );

    const removeProduct = async (id: string) => {
        setOptimisticProducts(id);
        await remove(Number(id));
    }

    return (
        <ul className="space-y-4 p-4">
            {optimisticProducts.map((product) => (
                <li key={product.id}
                    className="p-4 bg-gray-700 shadow-lg rounded-lg text-white">
                    <Link href={`/product/update/${product.id}`}>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price.toString()}</p>
                    </Link>
                    <form action={removeProduct.bind(null, product.id)}>
                        <button type="submit"
                                className="px-4 rounded-md bg-red-500 hover:bg-red-700 text-white">
                            Delete
                        </button>
                    </form>
                </li>
            ))}
        </ul>
    );
};
