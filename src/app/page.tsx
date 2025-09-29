import ParticlesBackground from '@/components/ui/ParticlesBackground'

export default function HomePage() {
    return (
        <div className="relative w-full h-full">
            <ParticlesBackground
                particleColors={['#ffffff', '#ffffff']}
                particleCount={1000}
                particleSpread={30}
                speed={0.04}
                particleBaseSize={140}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />

            {/* дальше основные экраны идут */}
        </div>
    )
}
