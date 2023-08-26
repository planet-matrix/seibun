import { useCallback, useRef } from "react"

export function getEnvironment() {
  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement

  return isDOM ? "browser" : "server"
}

export function useEffectEvent<T extends (...args: unknown[]) => unknown>(
  callback: T,
) {
  const ref = useRef(callback)

  ref.current = callback

  return useCallback((...args: Parameters<T>) => {
    ref.current(...args)
  }, [])
}
