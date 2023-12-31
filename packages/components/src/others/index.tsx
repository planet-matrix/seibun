import { useEffect, useState } from "react"

import { useDark } from "../hooks"
import { cn } from "../utils"

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function transitionDark(
  event: MouseEvent,
  isDark: boolean,
  toggleDark: () => void,
) {
  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (!isAppearanceTransition) {
    toggleDark()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    return new Promise((resolve) => {
      resolve(toggleDark())
    })
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: isDark
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      },
    )
  })
}

export function AppearanceSwitch(
  props: React.HTMLAttributes<HTMLButtonElement> & {
    enableTransition?: boolean
  },
) {
  const { enableTransition = false, ...rest } = props
  const { isDark, toggleDark } = useDark()

  return (
    <button
      {...rest}
      onClick={
        enableTransition
          ? (e) => {
              transitionDark(e.nativeEvent, !!!isDark, toggleDark)
            }
          : toggleDark
      }
      className={cn(
        "flex hover:text-teal-600 transition-colors",
        props.className,
      )}
    >
      <div
        className={cn(
          "i-lucide-sun scale-100 dark:scale-0",
          !enableTransition &&
            "transition-transform duration-500 rotate-0 dark:-rotate-90",
        )}
      />
      <div
        className={cn(
          "i-lucide-moon absolute scale-0 dark:scale-100",
          !enableTransition &&
            "transition-transform duration-500 rotate-90 dark:rotate-0",
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="change-theme"
        dangerouslySetInnerHTML={{
          __html: `!function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("use-dark")||"system";('"dark"'===t||e&&'"light"'!==t)&&document.documentElement.classList.toggle("dark",!0)}()`,
        }}
      ></script>
      {children}
    </>
  )
}

// @ts-expect-error
const isProduction = import.meta.env?.MODE
  ? // @ts-expect-error
    import.meta.env.MODE === "production"
  : process.env["NODE_ENV"] === "production"

export function TailwindIndicator() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout: number | null
    const handleResize = () => {
      if (timeout) clearTimeout(timeout)
      setShow(true)
      timeout = window.setTimeout(() => {
        setShow(false)
      }, 2000)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  if (isProduction) return null

  return (
    <div
      className={cn(
        "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        show ? "flex" : "hidden",
      )}
    >
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
