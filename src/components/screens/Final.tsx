import { useGlobalStore } from '@/zustand/store'
import { p } from 'framer-motion/client'

interface FinalScreenProps {}

export default function FinalScreen({}: FinalScreenProps) {
    const apodData = useGlobalStore(store => store.apodData)

    return (
        <div className="flex flex-col items-center justify-center gap-4 px-20 font-raleway text-white text-center">
            {apodData ? (
                <>
                    <p>{apodData.copyright}</p>
                    <p>{apodData.date}</p>
                    <p>{apodData.explanation}</p>
                    <p>{apodData.hdurl}</p>
                    <p>{apodData.media_type}</p>
                    <p>{apodData.title}</p>
                    <p>{apodData.url}</p>
                </>
            ) : (
                <p className="text-white text-center">
                    No data available. Please go back and select a date.
                </p>
            )}
        </div>
    )
}
