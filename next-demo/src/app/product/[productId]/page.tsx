// Uncomment when 'use client' is used
// 'use client';

import { Metadata } from "next";
// import { use } from "react";

type SearchParams = Promise<{ lang?: "en" | "vi" | "jp" }>;
type Params = Promise<{ productId: string }>;
type Props = { params: Params, searchParams: SearchParams };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params;
    const productTitle = `Product ${productId}`;

    return {
        title: {
            // The title that overide the parent's template title 
            absolute: `${productTitle}`,
        },
    };
}

export default async function ProductDetail({ 
// export default function ProductDetail({ 
    params,
    searchParams 
}: Props) {
    const { productId } = await params;
    const { lang = "vi" } = await searchParams;
    // const { productId } = use(params as any) as Params;
    return (<>
        <h1>Product detail: { productId }</h1>
        <h2>Reading in { lang == "en" ? "English" : lang == "vi" ? "Tiếng Việt" : "日本語" }</h2>
    </>);
};
