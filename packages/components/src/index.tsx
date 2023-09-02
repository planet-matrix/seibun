import { cn, useDark } from "@hyoban/utils"

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

export * from "./button"
export * from "./input"
