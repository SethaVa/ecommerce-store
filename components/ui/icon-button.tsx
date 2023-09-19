import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react"

interface IconButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    icon: React.ReactElement,
    className?: string
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={
                cn(
                    'rounded-full flex items-center justify-center bg-white shadow-md border p-2 transition hover:scale-110',
                    className
                )
            }
        >{icon}</button>
    )
}

export default IconButton;