import { create } from 'zustand'
import { APODResponse, fetchAPOD } from '@/lib/api/apod'

const navigationScreens = ['greeting', 'howTo', 'datePick', 'final'] as const
type Screen = (typeof navigationScreens)[number]

interface GlobalState {
    selectedScreen: Screen
    isLoading: boolean
    goToNext: () => void
    goToPrev: () => void
    selectedDate: string | null
    setSelectedDate: (date: string) => void
    apodData: APODResponse | null
    error: string | null
    fetchAPODData: () => Promise<void>
}

export const useGlobalStore = create<GlobalState>((set, get) => ({
    selectedScreen: navigationScreens[0],

    isLoading: false,

    goToNext: () => {
        const { selectedScreen } = get()
        const currentIndex = navigationScreens.indexOf(selectedScreen)
        if (currentIndex < navigationScreens.length - 1) {
            set({ isLoading: true })
            setTimeout(() => {
                set({
                    isLoading: false,
                    selectedScreen: navigationScreens[currentIndex + 1],
                })
            }, 3000)
        }
    },

    goToPrev: () => {
        const { selectedScreen } = get()
        const currentIndex = navigationScreens.indexOf(selectedScreen)
        if (currentIndex > 0) {
            set({ isLoading: true })
            setTimeout(() => {
                set({
                    isLoading: false,
                    selectedScreen: navigationScreens[currentIndex - 1],
                })
            }, 3000)
        }
    },

    selectedDate: null,

    setSelectedDate: (date: string) => set({ selectedDate: date }),

    apodData: null,

    error: null,

    fetchAPODData: async () => {
        const { selectedDate } = get()
        if (!selectedDate) return

        set({ isLoading: true, error: null })

        const startTime = Date.now()

        try {
            const data = await fetchAPOD(selectedDate)

            const elapsed = Date.now() - startTime
            const minLoadingTime = 3000

            if (elapsed < minLoadingTime) {
                await new Promise(resolve =>
                    setTimeout(resolve, minLoadingTime - elapsed)
                )
            }

            set({
                apodData: data,
                isLoading: false,
                selectedScreen: 'final',
            })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Unknown error',
                isLoading: false,
            })
        }
    },
}))
