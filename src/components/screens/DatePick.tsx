import { motion, LayoutGroup } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function DatePickScreen() {
    const [isContentShown, setIsContentShown] = useState<boolean>(false)

    useEffect(() => {
        const timer = window.setTimeout(() => setIsContentShown(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <LayoutGroup>
            <motion.div
                className="w-full flex flex-col items-center justify-center gap-40 1920:gap-32 1600:gap-24 1440:gap-20"
                layout
                transition={{
                    layout: { duration: 1, ease: 'easeInOut', type: 'tween' },
                }}
            >
                <div className="flex flex-col items-center justify-center gap-0">
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
                        Pick a day, reveal the cosmos
                    </motion.h2>

                    <motion.p
                        layout
                        className="font-raleway lowercase text-white text-[26px] 1920:text-[24px] 1600:text-[20px] 1440:text-[18px]"
                    >
                        | Since Jun 16, 1995 |
                    </motion.p>
                </div>

                {isContentShown && (
                    <motion.form
                        layout
                        className="font-raleway text-white text-[30px] border-b border-white flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <input
                            type="text"
                            placeholder="dd"
                            className="text-inherit text-center border border-black border-b-0 rounded-tl-lg rounded-tr-lg focus:outline-0"
                        />
                        <input
                            type="text"
                            placeholder="mm"
                            className="text-inherit text-center border border-black border-b-0 rounded-tl-lg rounded-tr-lg focus:outline-0"
                        />
                        <input
                            type="text"
                            placeholder="yyyy"
                            className="text-inherit text-center border border-black border-b-0 rounded-tl-lg rounded-tr-lg focus:outline-0"
                        />
                    </motion.form>
                )}
            </motion.div>
        </LayoutGroup>
    )
}
