import ParticlesBackground from '@/components/ui/ParticlesBackground'
import GreetingScreen from '@/components/screens/Greeting'

export default function HomePage() {
    return (
        <div className="relative w-full h-full">
            <ParticlesBackground
                particleColors={['#ffffff', '#ffffff']}
                particleCount={1500}
                particleSpread={36}
                speed={0.04}
                particleBaseSize={98}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />

            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <GreetingScreen />
            </div>
        </div>
    )
}
