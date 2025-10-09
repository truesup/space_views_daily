import Image from 'next/image'
import { useGlobalStore } from '@/zustand/store'

export default function FinalScreen() {
    const goToPrevScreen = useGlobalStore(store => store.goToPrev)
    const apodData = useGlobalStore(store => store.apodData)
    const error = useGlobalStore(store => store.error)

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
                <p>No data available. Please go back and select a date.</p>
                <button onClick={goToPrevScreen}>go back</button>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center gap-5">
            <div>
                <h2>{apodData.title}</h2>
                <p>{apodData.explanation}</p>
            </div>

            <div></div>
        </div>
    )
}

// {
//     apodData.media_type === 'image' ? (
//         <div className="relative w-full max-w-1/2 h-3/4 aspect-video">
//             <Image
//                 src={apodData.hdurl || apodData.url}
//                 alt={apodData.title}
//                 fill
//                 className="object-fill border border-white"
//                 sizes=""
//                 priority
//             />
//         </div>
//     ) : (
//         <div className="w-full max-w-1/2 max-h-3/4 aspect-video">
//             <iframe
//                 src={apodData.url}
//                 title={apodData.title}
//                 className="w-full h-full"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//             />
//         </div>
//     )
// }
