import Link from "next/link";

export const metadata = {
    title: "Product",
}

export default function Product() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        display: "inline-block",
        margin: "5px",
    };

    const productId = 300;

    return (
        <ul>
            <li><Link style={linkStyle} href="product/1">Product 1</Link></li>
            <li><Link style={linkStyle} href="product/2">Product 2</Link></li>
            {/* The "replace" option will replace the current url stack instead of adding a new one, in conclusion is "Back to the Start" */}
            {/* Example:
                    Start: http://localhost:3000
                    Go to: http://localhost:3000/product
                    Go to: http://localhost:3000/product/1
                    Back -> http://localhost:3000/product
                    But go to: http://localhost:3000/product/3
                    Back -> http://localhost:3000
             */}
            <li><Link style={linkStyle} href="product/3" replace>Product 3</Link></li>
            <li><span style={linkStyle}>...</span></li>
            <li><Link style={linkStyle} href={`product/${productId}`}>Product {productId}</Link></li>
        </ul>
    );
};
