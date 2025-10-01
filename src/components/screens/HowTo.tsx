import { easeInOut, motion, LayoutGroup } from 'framer-motion'
import { Sparkles, Cable, Wallpaper, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HowToScreenProps {}

export default function HowToScreen({}: HowToScreenProps) {
    const [isContentShown, setIsContentShown] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsContentShown(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <LayoutGroup>
            <motion.div
                className="px-[200px] w-full flex flex-col items-center justify-center gap-20 1920:px-[132px] 1600:px-[104px] 1600:gap-18"
                layout
                transition={{
                    layout: { duration: 1, ease: easeInOut, type: 'tween' },
                }}
            >
                <motion.h2
                    layout
                    transition={{
                        layout: { duration: 1, ease: easeInOut, type: 'tween' },
                    }}
                    className="font-major text-white text-[70px] shadow-text-stroke uppercase 1920:text-[64px] 1600:text-[58px]"
                >
                    How does this app actually work?
                </motion.h2>

                {isContentShown && (
                    <>
                        <motion.div
                            layout
                            className="w-full flex items-center justify-evenly"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: easeInOut }}
                        >
                            <div className="flex flex-col items-center justify-center gap-5 max-w-[320px]">
                                <Sparkles
                                    strokeWidth={0.2}
                                    color="#fff"
                                    width={220}
                                    height={220}
                                />
                                <p className="font-raleway text-[24px] text-white text-center">
                                    Every day NASA unveils a new portrait of the
                                    stars.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5 max-w-[320px]">
                                <Cable
                                    strokeWidth={0.2}
                                    color="#fff"
                                    width={220}
                                    height={220}
                                />
                                <p className="font-raleway text-[24px] text-white text-center">
                                    We connect directly to the cosmic archive.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5 max-w-[320px]">
                                <Wallpaper
                                    strokeWidth={0.2}
                                    color="#fff"
                                    width={220}
                                    height={220}
                                />
                                <p className="font-raleway text-[24px] text-white text-center">
                                    You receive the picture and the insight it
                                    carries.
                                </p>
                            </div>
                        </motion.div>

                        <motion.button
                            layout
                            className="mt-4 p-3 border border-white rounded-full text-white font-raleway text-[20px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: easeInOut,
                                delay: 3,
                            }}
                        >
                            <ChevronDown
                                color="currentColor"
                                className="size-7 768:size-6 480:size-5"
                                strokeWidth={1}
                            />
                        </motion.button>
                    </>
                )}
            </motion.div>
        </LayoutGroup>
    )
}
