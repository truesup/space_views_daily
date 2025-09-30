import { create } from 'zustand'

const navigationScreens = ['greeting', 'howTo', 'datePick', 'final'] as const

type Screen = (typeof navigationScreens)[number]

interface GlobalState {
    selectedScreen: Screen
    setSelectedScreen: (screen: Screen) => void
    goToNext: () => void
    goToPrev: () => void
}

export const useGlobalStore = create<GlobalState>((set, get) => ({
    selectedScreen: navigationScreens[0],

    setSelectedScreen: screen => set({ selectedScreen: screen }),

    goToNext: () => {
        const { selectedScreen } = get()
        const currentIndex = navigationScreens.indexOf(selectedScreen)
        if (currentIndex < navigationScreens.length - 1) {
            set({ selectedScreen: navigationScreens[currentIndex + 1] })
        }
    },

    goToPrev: () => {
        const { selectedScreen } = get()
        const currentIndex = navigationScreens.indexOf(selectedScreen)
        if (currentIndex > 0) {
            set({ selectedScreen: navigationScreens[currentIndex - 1] })
        }
    },
}))
