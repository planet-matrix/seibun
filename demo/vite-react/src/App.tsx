import { Button } from "@hyoban/components"
import { cn, useDark } from "@hyoban/utils"

export default function App() {
  const { isDark, toggleDark } = useDark()

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Button onClick={toggleDark} variant="outline">
        <span
          className={cn("text-2xl", isDark ? "i-lucide-moon" : "i-lucide-sun")}
        ></span>
      </Button>
    </div>
  )
}
