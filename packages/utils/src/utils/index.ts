import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function getEnvironment() {
  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement

  return isDOM ? "browser" : "server"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function raise(err: string): never {
  throw new Error(err)
}
