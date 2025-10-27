import { Star } from 'lucide-react'

export default function LoadingScreen() {
    return (
        <div className={`w-dvw flex items-center justify-center`}>
            <Star
                color="#fff"
                className="w-[32px] h-[32px] animate-spin 1920:w-[28px] 1920:h-[28px] 1600:w-[24px] 1600:h-[24px] 1440:w-[20px] 1440:h-[20px]"
                strokeWidth={1}
            />
        </div>
    )
}
