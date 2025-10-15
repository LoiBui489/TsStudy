// Work alongside dynamic route to generate static routes at build time instead of request time
// The code mean "/product/1" and "/product/2" are generated at build time
// Run on production to see the result
// The time will change every time refresh at "/product/3"
export async function generateStaticParams() {
    return [
        { productId: "1" },
        { productId: "2" }
        // If the route is /product/[categoryId]/[productId]
        // { productId: "1", categoryId: "1" }
    ];
}

// true: NextJS will statically generate the page at request time for any dynamic route that not in generateStaticParams()
// false: Return 404 error for any dynamic route that not in generateStaticParams()
export const dynamicParams = true;

export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return <h1>Product {productId} at {new Date().toLocaleString()}</h1>;
};
