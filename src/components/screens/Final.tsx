import { Undo2, FileText, Maximize } from 'lucide-react'
import { useGlobalStore } from '@/zustand/store'
import IconButton from '@/components/ui/IconButton'

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
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="w-full text-center font-major shadow-text-stroke text-[58px] leading-[1]">
                {apodData.title}
            </h2>

            <div className="border border-white w-3/4 h-[400px] relative">
                <p className="absolute bottom-[8px] right-[16px] font-raleway text-[12px] text-white">
                    © {apodData.copyright}
                </p>
            </div>

            <div className="w-3/4 flex items-center justify-between">
                <IconButton icon={Undo2} title="Go back to date selection" />
                <div className="flex items-center justify-center gap-5">
                    <IconButton icon={Maximize} title="Open in HD rezolution" />
                    <IconButton icon={FileText} title="Read explanation" />
                </div>
            </div>
        </div>
    )
}
