import gitignore from "eslint-config-flat-gitignore"
import type { FlatESLintConfigItem } from "eslint-define-config"
import * as fs from "node:fs"

import {
  next,
  prettier,
  react,
  reactRefresh,
  tailwind,
  typescript,
  ignores,
} from "./configs"

export function hyoban() {
  const isUsingReact = isPackageExists("react")
  const isUsingTailwind = isPackageExists("tailwindcss")
  const isUsingVite = isPackageExists("vite")
  const isUsingNext = isPackageExists("next")
  const isUsingFastRefresh = isUsingReact && isUsingVite && !isUsingNext

  const isGitignoreExists = fs.existsSync(".gitignore")
  const isEslintignoreExists = fs.existsSync(".eslintignore")
  const ignoreFiles = [
    ...(isGitignoreExists ? [".gitignore"] : []),
    ...(isEslintignoreExists ? [".eslintignore"] : []),
  ]

  const configs: FlatESLintConfigItem[] = [
    ignoreFiles.length > 0
      ? gitignore({
          files: ignoreFiles,
        })
      : {},
    ...ignores(),
    ...typescript(),
    ...(isUsingTailwind ? tailwind() : []),
    ...(isUsingReact ? react() : []),
    ...(isUsingFastRefresh ? reactRefresh() : []),
    ...(isUsingNext ? next() : []),
    ...prettier,
  ]
  return configs
}

function isPackageExists(pkg: string): boolean {
  const pwd = process.cwd()
  const packageJsonPath = `${pwd}/package.json`
  try {
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf-8")
    const packageJson = JSON.parse(packageJsonContent)
    const dependencies = packageJson.dependencies ?? {}
    const devDependencies = packageJson.devDependencies ?? {}
    return pkg in dependencies || pkg in devDependencies
  } catch (error) {
    return false
  }
}
