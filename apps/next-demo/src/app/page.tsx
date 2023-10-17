import { AppearanceSwitch } from "@planet-matrix/components"
import { cn } from "planet-matrix/components"
import { Tweet } from "react-tweet"

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-24",
      )}
    >
      <Tweet id="1705579477068325180" />
      <AppearanceSwitch enableTransition />
    </main>
  )
}
