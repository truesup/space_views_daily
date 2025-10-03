import { LucideIcon, Sparkles, Cable, Wallpaper } from 'lucide-react'
import ExplanationItem from '@/components/ui/ExplanationItem'

interface ExplanationItemInfo {
    icon: LucideIcon
    text: string
}

const ExplanationItemsInfo: ExplanationItemInfo[] = [
    {
        icon: Sparkles,
        text: 'Every day NASA unveils a new portrait of the stars.',
    },
    {
        icon: Cable,
        text: 'We connect directly to the cosmic archive.',
    },
    {
        icon: Wallpaper,
        text: 'You receive the picture and the insight it carries.',
    },
]

export default function ExplanationItemsBlock() {
    return (
        <>
            {ExplanationItemsInfo.map(elem => (
                <ExplanationItem
                    key={elem.text}
                    icon={elem.icon}
                    text={elem.text}
                />
            ))}
        </>
    )
}
