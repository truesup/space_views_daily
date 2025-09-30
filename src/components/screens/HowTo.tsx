interface HowToScreenProps {}

export default function HowToScreen({}: HowToScreenProps) {
    return (
        <div className="p-[120px] flex flex-col items-start justify-center gap-8">
            <p className="font-major text-white text-[60px] shadow-text-stroke uppercase">
                How does this app actually work?
            </p>

            <div className="flex flex-col items-start gap-2 text-white font-raleway text-[24px]">
                <p>
                    This application serves as your personal gateway to the
                    cosmos. It connects directly to NASA’s Astronomy Picture of
                    the Day archive — delivering stunning, real-time space
                    imagery and insights from official NASA data streams.
                </p>

                <p>Each visit brings you a new glimpse into the universe:</p>

                <ul>
                    <li>
                        Spectacular photos from satellites, space telescopes,
                        and rovers.
                    </li>
                    <li>
                        Scientific context to help you understand what you’re
                        seeing.
                    </li>
                    <li>
                        A moment to disconnect from the noise — and reconnect
                        with the stars.
                    </li>
                </ul>

                <p>
                    No distractions. No barriers. Just space — carefully
                    curated, thoughtfully explained, and seamlessly delivered to
                    ignite your curiosity, expand your perspective, and bring
                    the wonders of the universe a little closer each day.
                </p>
            </div>
        </div>
    )
}
