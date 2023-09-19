"use client"

import { Image } from "@/types";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import GalleryTap from "./gallery-tap";
import NextImage from "next/image";

interface GalleryProps{
    images: Image[]
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto w-full hidden mt-6 max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTap key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-square">
              {
                images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <div className="aspect-square relative w-full h-full overflow-hidden sm:rounded-lg">
                      <NextImage
                          fill
                          src={image.url}
                          alt=""
                          className="object-cover object-center"
                      />
                    </div>
                  </Tab.Panel>
                ))
              }
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery