import { Star } from 'lucide-react'

interface LoadingScreenProps {}

export default function LoadingScreen({}: LoadingScreenProps) {
    return (
        <div className="w-dvw flex items-center justify-center">
            <Star
                color="#fff"
                width={40}
                height={40}
                className="animate-spin"
                strokeWidth={0.2}
            />
        </div>
    )
}
