"use client"

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarAction = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const router = useRouter();
    const cart = useCart();

    if(!isMounted){
        return null
    }

    return (
        <div className="flex ml-auto items-center gap-x-4">
            <Button 
                onClick={() => router.push("/cart")}
                className="flex items-center px-4 py-2 rounded-full bg-black"
            >
                <ShoppingBag color="white" size={20}></ShoppingBag>
                <span className="font-semibold text-white ml-2 text-sm">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarAction;