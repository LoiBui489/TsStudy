export default function ProductDetailLayout({ 
    children,
 }: {
    children: React.ReactNode,
 }) {
    return (
        <>
            {children}
            <p>Product Features</p>
            <p>Carousel here</p>
        </>
    )
};
