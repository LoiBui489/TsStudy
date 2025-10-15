import Image from "next/image";
import Link from "next/link";
import famousPlaceImages from "./famous-places";

export default function PhotoGallery() {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-4">Most Famous Places In The World</h1>
            <div className="flex gap-5 flex-wrap justify-center">
                {famousPlaceImages.map((image) => (
                    <Link key={image.id} href={`/photo-gallery/${image.id}`}>
                        <Image src={image.source} 
                                alt={image.name}
                                width={200}
                                height={200}
                                priority={image.id === "1"}
                                className="object-cover aspect-square" />
                    </Link>
                ))}
            </div>
        </div>
    );
};
