import { AppearanceSwitch, Button } from "@hyoban/components"

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <main className="prose prose-neutral dark:prose-invert">
        <h1>Button</h1>
        <div className="flex items-center gap-x-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </main>
      <AppearanceSwitch className="mt-10" />
    </div>
  )
}
