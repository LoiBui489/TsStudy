import Image from "next/image";
import famousPlaceImages, { FamousPlaceImage } from "../famous-places";

export default async function PhotoDetail ({ params }: { params: Promise<{ photoId: string}>}) {
    const { photoId } = await params;
    const photo: FamousPlaceImage = famousPlaceImages.find((image) => image.id == photoId) ?? famousPlaceImages[0];

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div className="text-3xl font-bold my-4">{photo.name}</div>
                <Image src={photo.source} alt={photo.name} className="w-full object-cover aspect-square" />
                <div className="bg-white py-4">
                    <h3>Photographer</h3>
                    <h3>Location</h3>
                </div>
            </div>
        </div>
    );
};
