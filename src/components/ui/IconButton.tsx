import { LucideIcon } from 'lucide-react'
import { ComponentPropsWithoutRef } from 'react'

interface ChevronButtonProps extends ComponentPropsWithoutRef<'button'> {
    icon: LucideIcon
}

export default function ChevronButton({
    className = '',
    icon: Icon,
    ...nativeProps
}: ChevronButtonProps) {
    return (
        <button
            {...nativeProps}
            className={`${className} p-4 text-white border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300 1920:p-3 1440:p-2.5`}
        >
            <Icon
                strokeWidth={1}
                color="currentColor"
                className="size-8 1600:size-7 1440:size-6"
            />
        </button>
    )
}
