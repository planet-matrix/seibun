import { cn } from "@hyoban/utils"
import { useDark } from "@hyoban/utils/hooks"

export function AppearanceSwitch(
  props: React.HTMLAttributes<HTMLButtonElement>,
) {
  const { toggleDark } = useDark()

  return (
    <button
      {...props}
      onClick={toggleDark}
      className={cn("flex text-2xl", props.className)}
    >
      <div className="i-lucide-sun rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <div className="i-lucide-moon absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
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

export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}

export * from "./button"
export * from "./input"
