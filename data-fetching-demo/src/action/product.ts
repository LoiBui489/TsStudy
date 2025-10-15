'use server';

import { addProduct, deleteProduct, ProductReq, updateProduct } from "@/app/prisma-db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ProductFormError = {
    title?: string,
    price?: string,
    description?: string
}

export type FormState = {
    error: ProductFormError
}

export async function addNew(prevState: FormState, formData: FormData) {
    // Mark as server action
    // Benefits:
    // Simplified the code
    // Improved security
    // Better performance
    // Progressive Enhancement: Form keep working even if JS is disabled
    // 'use server';

    const title = formData.get("floating_title") as string;
    const price = formData.get("floating_price") as string;
    const description = formData.get("floating_description") as string;
    const error: ProductFormError = {};

    if (!title) {
        error.title = "Title is required";
    }
    if (!price) {
        error.price = "Price is required";
    }
    if (Object.keys(error).length > 0) {
        return { error };
    }

    const product: ProductReq = {
        title: title,
        price: Prisma.Decimal(price),
        description: description,
    };
    await addProduct(product);
    redirect("/product");
}

export async function update(id: number, prevState: FormState, formData: FormData) {
    // Mark as server action
    // Benefits:
    // Simplified the code
    // Improved security
    // Better performance
    // Progressive Enhancement: Form keep working even if JS is disabled
    // 'use server';

    const title = formData.get("floating_title") as string;
    const price = formData.get("floating_price") as string;
    const description = formData.get("floating_description") as string;
    const error: ProductFormError = {};

    if (!title) {
        error.title = "Title is required";
    }
    if (!price) {
        error.price = "Price is required";
    }
    if (Object.keys(error).length > 0) {
        return { error };
    }

    const product: ProductReq = {
        title: title,
        price: Prisma.Decimal(price),
        description: description,
    };
    await updateProduct(product, id);
    redirect("/product");
}

export async function remove(id: number) {
    await deleteProduct(id);
    revalidatePath("/product");
}