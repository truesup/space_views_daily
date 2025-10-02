import { ChevronRight } from 'lucide-react'
import { useGlobalStore } from '@/zustand/store'
import DecryptedText from '@/components/ui/DecryptedText'

interface GreetingScreenProps {}

export default function GreetingScren({}: GreetingScreenProps) {
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

            <button
                type="button"
                className="opacity-0 p-3 text-white border border-white rounded-full flex items-center justify-center cursor-pointer animate-fadeInAndSlideLeft [animation-delay:2.6s] hover:bg-white hover:text-black transition-all duration-300 1920:p-2.5 1440:p-2"
                onClick={goToNextScreen}
            >
                <ChevronRight
                    color="currentColor"
                    className="size-10 1600:size-8 1440:size-8"
                    strokeWidth={1}
                />
            </button>
        </div>
    )
}
