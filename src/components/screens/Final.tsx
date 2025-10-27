import { Undo2, FileText, Maximize, Camera } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useGlobalStore } from '@/zustand/store'
import IconButton from '@/components/ui/IconButton'

export default function FinalScreen() {
    const goToPrevScreen = useGlobalStore(store => store.goToPrev)
    const apodData = useGlobalStore(store => store.apodData)
    const error = useGlobalStore(store => store.error)

    const [isImageLoading, setIsImageLoading] = useState(true)

    useEffect(() => {
        setIsImageLoading(true)
    }, [apodData?.url])

    if (error) {
        return (
            <div>
                <p>Error</p>
                <p>{error}</p>
            </div>
        )
    }

    if (!apodData) {
        return (
            <div className="flex flex-col items-center gap-4 text-white">
                <p>No data available. Please go back and select new date.</p>
                <IconButton
                    icon={Undo2}
                    title="Go back to date selection"
                    onClick={goToPrevScreen}
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="w-3/4 text-center font-major shadow-text-stroke text-[58px] leading-[1]">
                {apodData.title}
            </h2>

            <div className="border border-white w-3/4 h-[400px] relative overflow-hidden">
                {apodData.media_type === 'image' ? (
                    <>
                        {isImageLoading && (
                            <p className="h-full w-full flex items-center justify-center text-center font-raleway text-white animate-pulse">
                                Content is loading...
                            </p>
                        )}
                        <Image
                            src={apodData.hdurl || apodData.url}
                            alt={apodData.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                            onLoad={() => setIsImageLoading(false)}
                        />
                    </>
                ) : apodData.media_type === 'video' ? (
                    <iframe
                        src={apodData.url}
                        title={apodData.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center font-raleway text-white text-xl">
                        media_type: other
                    </div>
                )}

                {apodData.copyright && (
                    <p className="absolute bottom-[8px] right-[16px] font-raleway text-[12px] text-white z-10">
                        © {apodData.copyright}
                    </p>
                )}
            </div>

            <div className="w-3/4 flex items-center justify-between">
                <IconButton
                    icon={Undo2}
                    title="Go back to date selection"
                    onClick={goToPrevScreen}
                />
                <div className="flex items-center justify-center gap-5">
                    {apodData.media_type !== 'video' && (
                        <IconButton
                            icon={Maximize}
                            title="Open in HD rezolution"
                        />
                    )}
                    <IconButton icon={FileText} title="Read explanation" />
                </div>
            </div>
        </div>
    )
}
