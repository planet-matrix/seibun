import { useCallback, useRef } from "react"

export function useEffectEvent<T extends (...args: unknown[]) => unknown>(
  callback: T,
) {
  const ref = useRef(callback)

  ref.current = callback

  return useCallback((...args: Parameters<T>) => {
    ref.current(...args)
  }, [])
}
