import {
  AppearanceSwitch,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  TailwindIndicator,
} from "@planet-matrix/components"
import { useState } from "react"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function CheckboxDemo() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <CheckboxGroup
        options={[
          {
            label: "Apple",
            value: "apple",
          },
          {
            label: "Banana",
            value: "banana",
          },
        ]}
        checked={value}
        onCheckedChange={(value) => setValue(value)}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <main className="prose prose-neutral dark:prose-invert">
        <h2>Button</h2>
        <div className="flex items-center gap-x-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <h2>Input</h2>
        <div className="flex flex-col items-center gap-4">
          <Input placeholder="default" />
          <Input iconClassName="i-lucide-user" placeholder="with icon" />
        </div>
        <h2>Checkbox & Label</h2>
        <div>
          <CheckboxDemo />
        </div>
        <h2>Separator</h2>
        <Separator orientation="horizontal" />
        <h2>Select</h2>
        <div>
          <SelectDemo />
        </div>
      </main>
      <AppearanceSwitch className="mt-10" enableTransition />
      <TailwindIndicator />
    </div>
  )
}
