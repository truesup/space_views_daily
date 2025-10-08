import { LucideIcon } from 'lucide-react'

interface ExplanationItemProps {
    className?: string
    text: string
    icon: LucideIcon
}

export default function ExplanationItem({
    className = '',
    text,
    icon: Icon,
}: ExplanationItemProps) {
    return (
        <div
            className={`${className} flex flex-col items-center justify-center gap-5 max-w-[320px]`}
        >
            <Icon
                strokeWidth={0.2}
                className="w-[220px] h-[220px] text-white"
            />
            <p className="font-raleway text-[24px] text-white text-center">
                {text}
            </p>
        </div>
    )
}
