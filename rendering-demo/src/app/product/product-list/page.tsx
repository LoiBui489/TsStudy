import Link from "next/link";

export default async function ProductList() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            <Link href={"/product/1"}>Product 1</Link>
            <Link href={"/product/2"}>Product 2</Link>
            <Link href={"/product/3"}>Product 3</Link>
        </div>
    );
};
