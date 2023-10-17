import { cn } from "@planet-matrix/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as React from "react"

import { Label } from "../label"

import type { CheckedState } from "@radix-ui/react-checkbox"

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <span className="i-lucide-check w-4 h-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName

type Merge<P, T> = Omit<P, keyof T> & T

export type CheckboxGroupProps<T extends string | number> = Merge<
  React.ComponentPropsWithoutRef<"div">,
  {
    options: {
      label: string
      value: T
    }[]
    checked: T[]
    onCheckedChange: (checked: T[]) => void
    defaultCheckedAll?: boolean
    checkAllText?: string
  }
>

export function CheckboxGroup<T extends string | number>(
  props: CheckboxGroupProps<T>,
) {
  const {
    options,
    checked: value,
    onCheckedChange: onChange,
    className = "",
    defaultCheckedAll = false,
    checkAllText = "Check All",
    ...rest
  } = props

  const allChecked: CheckedState =
    value.length === options.length
      ? true
      : value.length === 0
      ? false
      : "indeterminate"

  const handleAllCheckedChange = (checked: boolean) => {
    if (checked) {
      onChange(options.map((option) => option.value))
    } else {
      onChange([])
    }
  }

  const onAllCheckedChange = React.useRef<typeof handleAllCheckedChange>(
    handleAllCheckedChange,
  )
  onAllCheckedChange.current = handleAllCheckedChange

  React.useEffect(() => {
    if (defaultCheckedAll) {
      onAllCheckedChange.current(true)
    }
  }, [defaultCheckedAll, options.length])

  return (
    <div
      className={cn("flex items-center flex-wrap gap-2", className)}
      {...rest}
    >
      <Checkbox
        checked={allChecked}
        onCheckedChange={handleAllCheckedChange}
        id="check-all"
      />
      <Label htmlFor="check-all">{checkAllText}</Label>

      {options.map((option) => (
        <span key={String(option.value)} className="flex items-center gap-2">
          <Checkbox
            checked={value.includes(option.value)}
            onCheckedChange={(checked) => {
              if (checked) {
                onChange([...value, option.value])
              } else {
                onChange(value.filter((v) => v !== option.value))
              }
            }}
            id={String(option.value)}
            value={option.value as string}
          />
          <Label htmlFor={String(option.value)}>{option.label}</Label>
        </span>
      ))}
    </div>
  )
}

CheckboxGroup.displayName = "CheckboxGroup"
