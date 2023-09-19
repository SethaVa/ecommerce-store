import { cn } from "@/lib/utils";
import { Image } from "@/types";
import { Tab } from "@headlessui/react";
import NextImage from "next/image";
import React from "react";

interface GalleryTapProps{
    image: Image
}

const GalleryTap: React.FC<GalleryTapProps> = ({
    image
}) => {
    return (
        <Tab
            className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
        >
            {
                ({selected}) => (
                    <div>
                        <span className="rounded-md absolute w-full h-full inset-0 overflow-hidden aspect-square">
                            <NextImage 
                                fill
                                src={image.url}
                                alt=""
                                className="object-cover object-center"
                            />
                        </span>
                        <span 
                            className={
                                cn(
                                    "absolute rounded-md inset-2 right-2 ring-offset-2",
                                    selected? 'ring-black': "ring-transparent"
                                )
                            }
                        />
                    </div>
                )
            }
        </Tab>
    )
}

export default GalleryTap