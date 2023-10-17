import * as React from "react"

import { cn } from "../"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconClassName?: string | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconClassName, ...props }, ref) => {
    if (!iconClassName) {
      return (
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      )
    } else {
      return (
        <div className={cn("relative w-full", className)}>
          <Input className="pl-9" ref={ref} {...props} />
          <span
            className={cn(
              "text-muted-foreground absolute inset-0 top-1/2 -translate-y-1/2 left-2",
              iconClassName,
            )}
          ></span>
        </div>
      )
    }
  },
)
Input.displayName = "Input"

export { Input }
