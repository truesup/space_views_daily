import { motion, LayoutGroup } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useGlobalStore } from '@/zustand/store'
import ExplanationItemsBlock from '@/components/ui/ExplanationItemsBlock'
import ChevronButton from '@/components/ui/IconButton'

export default function HowToScreen() {
    const goToNextScreen = useGlobalStore(store => store.goToNext)

    const [isContentShown, setIsContentShown] = useState<boolean>(false)

    useEffect(() => {
        const timer = window.setTimeout(() => setIsContentShown(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <LayoutGroup>
            <motion.div
                className="w-full flex flex-col items-center justify-center gap-20 1920:gap-16 1600:gap-14 1440:gap-12"
                layout
                transition={{
                    layout: { duration: 1, ease: 'easeInOut', type: 'tween' },
                }}
            >
                <motion.h2
                    layout
                    transition={{
                        layout: {
                            duration: 1,
                            ease: 'easeInOut',
                            type: 'tween',
                        },
                    }}
                    className="font-major text-white text-[70px] text-center shadow-text-stroke uppercase 1920:text-[64px] 1600:text-[58px] 1440:text-[52px]"
                >
                    How does this app actually work?
                </motion.h2>

                {isContentShown && (
                    <>
                        <motion.div
                            layout
                            className="w-full flex flex-col items-center justify-center gap-20 1920:gap-16 1600:gap-14 1440:gap-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <div className="flex items-center justify-center gap-60 1920:gap-46 1600:gap-32 1440:gap-22">
                                <ExplanationItemsBlock />
                            </div>

                            <ChevronButton
                                type="button"
                                icon={ChevronDown}
                                onClick={goToNextScreen}
                                className="mt-9 opacity-0 animate-fadeIn [animation-delay:3s] 1920:mt-8 1600:mt-4 1440:mt-2"
                            />
                        </motion.div>
                    </>
                )}
            </motion.div>
        </LayoutGroup>
    )
}
