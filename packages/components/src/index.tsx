import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { ClassValue } from "clsx"

export * from "./accordion"
export * from "./button"
export * from "./checkbox"
export * from "./form"
export * from "./input"
export * from "./label"
export * from "./others"
export * from "./radio-group"
export * from "./select"
export * from "./separator"
export * from "./switch"
export * from "./table"
export * from "./textarea"
export * from "./tooltip"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
