"use client"

import { useEffect } from "react"

import { useLocalStorage } from "./useLocalStorage"
import { useSystemDark } from "./useSystemDark"

const themeOptions = ["system", "light", "dark"] as const
export type Theme = (typeof themeOptions)[number]

function isDarkMode(setting: Theme, isSystemDark: boolean | undefined) {
  return setting === "dark" || (isSystemDark && setting !== "light")
}

export function useDark() {
  const [setting, setSetting] = useLocalStorage<Theme>("use-dark", "system")
  const isSystemDark = useSystemDark()

  useEffect(() => {
    const isDark = isDarkMode(setting, isSystemDark)
    if (isDark) {
      document.documentElement.classList.toggle("dark", true)
    } else {
      document.documentElement.classList.toggle("dark", false)
    }

    if (
      (setting === "dark" && isSystemDark) ||
      (setting === "light" && !isSystemDark)
    ) {
      setSetting("system")
    }
  }, [setting, isSystemDark, setSetting])

  const toggleDark = () => {
    if (setting === "system") {
      setSetting(isSystemDark ? "light" : "dark")
    } else {
      setSetting("system")
    }
  }

  return {
    isDark: isDarkMode(setting, isSystemDark),
    toggleDark,
  }
}
