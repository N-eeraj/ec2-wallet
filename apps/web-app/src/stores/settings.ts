import {
  create,
} from "zustand"

type Theme = "light" | "dark"

interface SettingsStore {
  theme: Theme
  toggleTheme: () => void
  soundEnabled: boolean
  toggleSound: () => void
}

const settingsStore = create<SettingsStore>()((set) => ({
  theme: (() => {
    const theme = JSON.parse(localStorage.getItem("theme") || "null") as Theme ?? "light"
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    return theme
  })(),
  toggleTheme: () => set((state) => {
    const theme = state.theme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", JSON.stringify(theme))
    return {
      theme,
    }
  }),
  soundEnabled: JSON.parse(localStorage.getItem("soundEnabled") ?? "null") ?? true,
  toggleSound: () => set((state) => {
    const soundEnabled = !state.soundEnabled
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled))
    return {
      soundEnabled,
    }
  }),
}))

export default settingsStore
