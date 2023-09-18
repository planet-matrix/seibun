import type { Metadata } from "next"
import { ThemeProvider } from "@hyoban/components"

import "@hyoban/components/index.css"
import "@hyoban/tailwind-config/globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
