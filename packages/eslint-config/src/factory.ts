import gitignore from "eslint-config-flat-gitignore"
import type { FlatESLintConfigItem } from "eslint-define-config"
import * as fs from "node:fs"

import {
  importExport,
  next,
  prettier,
  react,
  reactRefresh,
  tailwind,
  typescript,
} from "./configs"

export function hyoban() {
  const isUsingReact = isPackageExists("react")
  const isUsingTailwind = isPackageExists("tailwindcss")
  const isUsingVite = isPackageExists("vite")
  const isUsingNext = isPackageExists("next")
  const isUsingFastRefresh = isUsingReact && isUsingVite && !isUsingNext

  const isGitignoreExists = isFileExists(".gitignore")
  const isEslintignoreExists = isFileExists(".eslintignore")
  const ignoreFiles = [
    ...(isGitignoreExists ? [".gitignore"] : []),
    ...(isEslintignoreExists ? [".eslintignore"] : []),
  ]

  const configs: FlatESLintConfigItem[] = [
    gitignore({
      files: ignoreFiles,
    }),
    ...typescript(),
    ...importExport(),
    ...(isUsingTailwind ? tailwind() : []),
    ...(isUsingReact ? react() : []),
    ...(isUsingFastRefresh ? reactRefresh() : []),
    ...(isUsingNext ? next() : []),
    ...prettier,
  ]
  return configs
}

function isFileExists(path: string): boolean {
  try {
    fs.statSync(path)
    return true
  } catch (error) {
    return false
  }
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
