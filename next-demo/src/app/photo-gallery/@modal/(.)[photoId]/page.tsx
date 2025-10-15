// This called parallel intercepting route
// Layout will render the Modal and the Children but because of there is no photoId, the default.tsx will be rendered instead
// When click on an image, because the photoId is incepted, the route will update to "photo-gallery/id" but open a modal instead of navigating
// Reload will trigger the navigation

import Modal from "@/components/modal";
import famousPlaceImages, { FamousPlaceImage } from "../../famous-places";
import Image from "next/image";

export default async function PhotoDetailModal({ params }: { params: Promise<{ photoId: string }> }) {
    const { photoId } = await params;
    const photo: FamousPlaceImage = famousPlaceImages.find((image) => image.id == photoId) ?? famousPlaceImages[0];

    return (
      <Modal>
        <Image src={photo.source} alt={photo.name} className="w-full object-cover aspect-square" />
        <div className="bg-white py-4">
            <div className="text-3xl font-bold my-4">{photo.name}</div>
            <h3>Photographer</h3>
            <h3>Location</h3>
        </div>
      </Modal>  
    );
};
