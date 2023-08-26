import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"

import { getEnvironment, useEffectEvent } from "../utils"

export function useLocalStorage<T>(key: string, initialValue: T) {
  if (getEnvironment() === "server") {
    throw Error("useLocalStorage is a client-side only hook.")
  }

  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key)
      return (item ? JSON.parse(item) : initialValue) as T
    } catch (error) {
      console.warn(error)
      return initialValue
    }
  }, [key, initialValue])

  const [localState, setLocalState] = useState(readValue)
  const handleSetState = useCallback<Dispatch<SetStateAction<T>>>(
    (value) => {
      try {
        const nextState =
          typeof value === "function"
            ? (value as (localState: T) => T)(localState)
            : value
        window.localStorage.setItem(key, JSON.stringify(nextState))
        setLocalState(nextState)
        window.dispatchEvent(new Event("local-storage"))
      } catch (e) {
        console.warn(e)
      }
    },
    [key, localState],
  )

  const onStorageChange = useEffectEvent(() => {
    setLocalState(readValue())
  })

  useEffect(() => {
    window.addEventListener("storage", onStorageChange)
    window.addEventListener("local-storage", onStorageChange)

    return () => {
      window.removeEventListener("storage", onStorageChange)
      window.removeEventListener("local-storage", onStorageChange)
    }
  }, [])

  return [localState, handleSetState] as const
}
