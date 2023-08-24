import { cn, useDark } from "@hyoban/utils"

export default function App() {
  const { isDark, toggleDark } = useDark()

  return (
    <div>
      <button
        className={cn("text-2xl", isDark ? "i-lucide-moon" : "i-lucide-sun")}
        onClick={toggleDark}
      ></button>
    </div>
  )
}
