import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useEffect } from "react"

import { useSystemDark } from "./useSystemDark"

const themeOptions = ["system", "light", "dark"] as const
export type Theme = (typeof themeOptions)[number]

const appearanceAtom = atomWithStorage<Theme>("use-dark", "system")

export function useDark() {
  const [setting, setSetting] = useAtom(appearanceAtom)
  const isDark = useSystemDark()

  useEffect(() => {
    const isDarkMode = setting === "dark" || (isDark && setting !== "light")
    if (isDarkMode) {
      document.documentElement.classList.toggle("dark", true)
    } else {
      document.documentElement.classList.toggle("dark", false)
    }

    if ((setting === "dark" && isDark) || (setting === "light" && !isDark)) {
      setSetting("system")
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
