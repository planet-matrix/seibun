import {
  AppearanceSwitch,
  Button,
  Checkbox,
  Input,
  TailwindIndicator,
} from "@hyoban/components"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <main className="prose prose-neutral dark:prose-invert">
        <h2>Button</h2>
        <p className="flex items-center gap-x-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="ghost">Ghost</Button>
        </p>
        <h2>Input</h2>
        <p className="flex items-center gap-x-4">
          <Input placeholder="placeholder" />
        </p>
        <h2>Checkbox & Label</h2>
        <p>
          <CheckboxDemo />
        </p>
      </main>
      <AppearanceSwitch className="mt-10" enableTransition />
      <TailwindIndicator />
    </div>
  )
}
