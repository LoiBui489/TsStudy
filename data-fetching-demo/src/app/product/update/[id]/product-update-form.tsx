'use client';

import { FormState, update } from "@/action/product";
import { ProductRes } from "@/app/prisma-db";
import Submit from "@/components/submit";
import { useActionState } from "react";

export default function UpdateProductForm( { product }: { product: ProductRes } ) {
    const initialState: FormState = { error: {} };
    const updateProductAction = update.bind(null, Number(product.id));
    const [state, formAction, isPending] = useActionState(updateProductAction, initialState);

    return (
        <div className="container h-screen content-center">
            <form action={formAction} className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_title" id="floating_title" 
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${state.error.title ? "border-red-500" : "border-gray-300"} dark:border-gray-300} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                            placeholder=" " defaultValue={product.title} required />
                    <label htmlFor="floating_title" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product title</label>
                    {state.error.title && <p className="text-red-500">{state.error.title}</p>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_price" id="floating_price" 
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${state.error.price ? "border-red-500" : "border-gray-300"} dark:border-gray-300} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} 
                            placeholder=" " defaultValue={product.price.toString()} required />
                    <label htmlFor="floating_price" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    {state.error.price && <p className="text-red-500">{state.error.price}</p>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_description" id="floating_description" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " defaultValue={product.description ?? ""} />
                    <label htmlFor="floating_description" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <Submit title="Update product" />
            </form>
        </div>
    );
};