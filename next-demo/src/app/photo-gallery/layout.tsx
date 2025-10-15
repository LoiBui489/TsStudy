export default function PhotoGalleryLayout({ 
    children,
    modal
}: { 
    children: React.ReactNode ,
    modal: React.ReactNode
}) {
    return (<>
        {modal}
        {children}
    </>);
};
