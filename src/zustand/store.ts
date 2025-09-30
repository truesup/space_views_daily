import { create } from 'zustand'

const navigationScreens = ['greeting', 'howTo', 'datePick', 'final'] as const
type Screen = (typeof navigationScreens)[number]

interface GlobalState {
    selectedScreen: Screen
    isLoading: boolean
    goToNext: () => void
    goToPrev: () => void
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
            }, 3500)
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
            }, 1200)
        }
    },
}))
