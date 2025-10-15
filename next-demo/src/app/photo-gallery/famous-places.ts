import { StaticImageData } from "next/image";
import chinaWall from './photos/china_wall.webp';
import eiffeltTower from './photos/eiffelt_tower.webp'
import kremlin from './photos/kremlin.webp';
import pisa from './photos/pisa.webp';
import pyramidsGiza from './photos/pyramids_giza.webp';

export type FamousPlaceImage = {
    id: string,
    source: StaticImageData,
    name: string
}

const famousPlaceImages: FamousPlaceImage[] = [
    {
        id: "1",
        source: chinaWall,
        name: "The Greate Wall of China"
    },
    {
        id: "2",
        source: eiffeltTower,
        name: "Eiffel Tower"
    },
    {
        id: "3",
        source: kremlin,
        name: "Kremlin"
    },
    {
        id: "4",
        source: pisa,
        name: "Lean Tower of Pisa"
    },
    {
        id: "5",
        source: pyramidsGiza,
        name: "Giza Pyramid"
    }
]

export default famousPlaceImages;