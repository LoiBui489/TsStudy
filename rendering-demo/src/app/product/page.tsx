import Link from "next/link";
import ProductList from "./product-list/page";
import Review from "./review/page";
import { Suspense } from "react";

export default function Product() {
    return (
        <div>
            <h1>Product</h1>
            {/* This called Streaming */}
            {/* Replace unloaded component with fallback component */}
            {/* The page don't need to load all before display to the client */}
            <Suspense fallback={<p>Loading products...</p>}>
                <ProductList />
            </Suspense>
            <Suspense fallback={<p>Loading review...</p>}>
                <Review />
            </Suspense>
        </div>
    )
};
