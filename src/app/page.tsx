'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useGlobalStore } from '@/zustand/store'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import LoadingScreen from '@/components/screens/Loading'
import GreetingScreen from '@/components/screens/Greeting'
import HowToScreen from '@/components/screens/HowTo'

export default function HomePage() {
    const selectedScreen = useGlobalStore(store => store.selectedScreen)
    const isLoading = useGlobalStore(store => store.isLoading)

    return (
        <div className="relative w-full h-full">
            <ParticlesBackground
                particleColors={['#ffffff', '#ffffff']}
                particleCount={1500}
                particleSpread={36}
                speed={0.04}
                particleBaseSize={105}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />

            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <LoadingScreen />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={selectedScreen}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            {selectedScreen === 'greeting' && (
                                <GreetingScreen />
                            )}
                            {selectedScreen === 'howTo' && <HowToScreen />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
