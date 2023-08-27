import { useEffect } from "react"

import { getEnvironment } from "../utils"
import { useLocalStorage } from "./useLocalStorage"
import { useSystemDark } from "./useSystemDark"

const themeOptions = ["system", "light", "dark"] as const
export type Theme = (typeof themeOptions)[number]

export function useDark() {
  const [setting, setSetting] = useLocalStorage<Theme>("use-dark", "system")
  const isDark = useSystemDark()

  useEffect(() => {
    const isDarkMode = setting === "dark" || (isDark && setting !== "light")
    if (isDarkMode) {
      document.documentElement.classList.toggle("dark", true)
    } else {
      document.documentElement.classList.toggle("dark", false)
    }

    if (getEnvironment() === "server") {
      if ((setting === "dark" && isDark) || (setting === "light" && !isDark)) {
        setSetting("system")
      }
    }
  }, [setting, isDark, setSetting])

  const toggleDark = () => {
    if (setting === "system") {
      setSetting(isDark ? "light" : "dark")
    } else {
      setSetting("system")
    }
  }

  return {
    isDark: setting === "dark" || (isDark && setting !== "light"),
    toggleDark,
  }
}
