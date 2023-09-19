"use client"

import { Product } from "@/types"
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Currency from "./currency";

interface ProductCardProps{
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter()

    const handleClick = () => {
        router.push(`/product/${data.id}`);
    }
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        
        cart.addItem(data);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer border rounded-lg p-3 space-y-3">
            <div className="rounded-lg relative bg-gray-100 aspect-square">
                <Image 
                    src={`${data?.images[0].url}`}
                    alt=""
                    fill
                    className="object-cover rounded-md aspect-square"
                />
                <div className="opacity-0 absolute w-full bottom-5 px-6 transition group-hover:opacity-100">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            icon={<Expand size={20} className=" text-gray-600" />}
                            onClick={onPreview}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className=" text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>

            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard;