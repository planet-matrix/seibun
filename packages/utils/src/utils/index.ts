export function getEnvironment() {
  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement

  return isDOM ? "browser" : "server"
}

export function raise(err: string): never {
  throw new Error(err)
}
