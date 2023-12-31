"use client"
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavbarProps{
    data: Category[]
}

const MainNavbar = ({
    data
}: MainNavbarProps) => {
    const pathname = usePathname()

    const routes = data.map((category) => ({
        href: `/category/${category.id}`,
        label: category.name,
        active: pathname === `/category/${category.id}`
    }));

    return (
        <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {
                routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={
                            cn(
                                'text-sm font-semibold transition-colors hover:text-black',
                                route.active? 'text-black': ' text-neutral-500'
                            )
                        }
                    >
                        {route.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default MainNavbar;