import { MoveRight, ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useGlobalStore } from '@/zustand/store'
import DecryptedText from '@/components/ui/DecryptedText'

interface GreetingScreenProps {}

export default function GreetingScren({}: GreetingScreenProps) {
    const goToNextScreen = useGlobalStore(store => store.goToNext)

    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="flex items-center justify-center gap-6 1920:gap-8 1600:gap-6 1200:gap-5">
            {windowWidth > 1024 ? (
                <>
                    <DecryptedText
                        text="explore the universe"
                        speed={120}
                        maxIterations={70}
                        sequential={true}
                        revealDirection="start"
                        useOriginalCharsOnly={true}
                        animateOn="view"
                        parentClassName="bg-transparent"
                        className="text-[80px] font-major text-white uppercase shadow-text-stroke 1920:text-[76px] 1600:text-[70px] 1200:text-[56px]"
                        encryptedClassName="text-[80px] font-major text-white uppercase shadow-text-stroke 1920:text-[74px] 1600:text-[70px] 1200:text-[56px]"
                    />

                    <button
                        type="button"
                        className="opacity-0 h-[64px] aspect-square text-white border border-white rounded-full flex items-center justify-center cursor-pointer animate-fadeInAndSlideLeft [animation-delay:2.6s] hover:bg-white hover:text-black transition-all duration-300 1600:h-[60px] 1200:h-[52px]"
                        onClick={goToNextScreen}
                    >
                        <ChevronRight
                            color="currentColor"
                            className="size-12 1920:size-10 1600:size-9 1200:size-8"
                            strokeWidth={1}
                        />
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <p className="opacity-0 text-[56px] font-major text-white uppercase shadow-text-stroke animate-fadeInAndSlideUp 768:text-[46px] 480:text-[40px] 480:px-4">
                        explore
                    </p>
                    <p className="-mt-4 opacity-0 text-[56px] font-major text-white uppercase shadow-text-stroke animate-fadeInAndSlideUp [animation-delay:1s] 768:text-[46px] 480:-mt-0 480:text-[40px] 480:px-4">
                        the universe
                    </p>
                    <button
                        type="button"
                        className="mt-8 opacity-0 h-[44px] aspect-square flex items-center justify-center text-white rounded-full border border-white cursor-pointer animate-fadeInAndSlideUp [animation-delay:2s] hover:bg-white hover:text-black transition-all duration-300 768:mt-4 768:h-[40px] 480:mt-8 480:h-[36px]"
                        onClick={goToNextScreen}
                    >
                        <ChevronDown
                            color="currentColor"
                            className="size-7 768:size-6 480:size-5"
                            strokeWidth={1}
                        />
                    </button>
                </div>
            )}
        </div>
    )
}
