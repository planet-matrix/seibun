"use client"

import { useMediaQuery } from "./useMediaQuery"

export function useSystemDark() {
  return useMediaQuery("(prefers-color-scheme: dark)")
}
