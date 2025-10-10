import { ChevronRight } from 'lucide-react'
import { useGlobalStore } from '@/zustand/store'
import DecryptedText from '@/components/ui/DecryptedText'
import ChevronButton from '@/components/ui/IconButton'

export default function GreetingScreen() {
    const goToNextScreen = useGlobalStore(store => store.goToNext)

    return (
        <div className="flex items-center justify-center gap-6 1920:gap-8 1600:gap-6 1440:gap-4">
            <DecryptedText
                text="explore the universe"
                speed={120}
                maxIterations={70}
                sequential={true}
                revealDirection="start"
                useOriginalCharsOnly={true}
                animateOn="view"
                parentClassName="bg-transparent"
                className="text-[80px] font-major text-white uppercase shadow-text-stroke 1920:text-[76px] 1600:text-[66px]"
                encryptedClassName="text-[80px] font-major text-white uppercase shadow-text-stroke 1920:text-[74px] 1600:text-[66px]"
            />
            <ChevronButton
                type="button"
                icon={ChevronRight}
                onClick={goToNextScreen}
                className="opacity-0 animate-fadeInAndSlideLeft [animation-delay:2.6s]"
            />
        </div>
    )
}
