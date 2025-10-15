import { notFound } from "next/navigation";

export default async function ReviewDetail({ 
    params 
}: Readonly<{ 
    params: Promise<{ 
        productId: string; 
        reviewId: string; 
    }>; 
}>) {
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        // Render the nearest "not-found.tsx"
        notFound();
    }
    return <h1>Review detail { reviewId } for product { productId }</h1>
};
