import { AppearanceSwitch } from "@hyoban/components"
import { cn } from "@hyoban/utils"

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
      )}
    >
      <AppearanceSwitch />
    </main>
  )
}
