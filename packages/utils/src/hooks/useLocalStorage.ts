import { useEffect, useState } from "react"

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState] as const
}
