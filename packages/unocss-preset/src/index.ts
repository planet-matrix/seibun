import { h, variantGetParameter } from "@unocss/preset-mini/utils"
import { presetIcons, presetTypography, presetUno } from "unocss"

import type { Preset, VariantContext, VariantObject } from "unocss"
import type { Theme } from "unocss/preset-mini"

const variantGroupDataAttribute: VariantObject = {
  name: "group-data",
  match(matcher, ctx: VariantContext<Theme>) {
    const variant = variantGetParameter(
      "group-data-",
      matcher,
      ctx.generator.config.separators,
    )

    if (!variant) return
    const [match, rest] = variant
    if (!match) return

    const dataAttribute = h.bracket(match) ?? ctx.theme.data?.[match] ?? ""
    if (dataAttribute) {
      return {
        matcher: `group-[[data-${dataAttribute}]]:${rest}`,
      }
    }
    return
  },
}

const handleMatchNumber = (v: string, defaultVal = "0") =>
  h.bracket.cssvar.global.auto.fraction
    .number(v || defaultVal)
    ?.replace("%", "")
const handleMatchRem = (v: string, defaultVal = "full") =>
  h.bracket.cssvar.global.auto.fraction.rem(v || defaultVal)

function presetShadcn(): Preset<Theme> {
  return {
    name: "unocss-preset-shadcn",
    preflights: [
      {
        getCSS: () => `
          @keyframes shadcn-down { from{ height: 0 } to { height: var(--radix-accordion-content-height)} }
          @keyframes shadcn-up { from{ height: var(--radix-accordion-content-height)} to { height: 0 } }
          @keyframes shadcn-enter { from{ opacity: var(--un-enter-opacity, 1); transform: translate3d(var(--un-enter-translate-x, 0), var(--un-enter-translate-y, 0), 0) scale3d(var(--un-enter-scale, 1), var(--un-enter-scale, 1), var(--un-enter-scale, 1)) rotate(var(--un-enter-rotate, 0)) } }
          @keyframes shadcn-exit { to{ opacity: var(--un-exit-opacity, 1); transform: translate3d(var(--un-exit-translate-x, 0), var(--un-exit-translate-y, 0), 0) scale3d(var(--un-exit-scale, 1), var(--un-exit-scale, 1), var(--un-exit-scale, 1)) rotate(var(--un-exit-rotate, 0)) } }
        `,
      },
    ],
    variants: [variantGroupDataAttribute.match],
    rules: [
      [
        "accordion-down",
        {
          animation: "shadcn-down 0.2s ease-out",
        },
      ],
      [
        "accordion-up",
        {
          animation: "shadcn-up 0.2s ease-out",
        },
      ],
      [
        "animate-in",
        {
          "animation-name": "shadcn-enter",
          "animation-duration": "var(--un-animate-duration)",
          "--un-animate-duration": "150ms",
          "--un-enter-opacity": "initial",
          "--un-enter-scale": "initial",
          "--un-enter-rotate": "initial",
          "--un-enter-translate-x": "initial",
          "--un-enter-translate-y": "initial",
        },
      ],
      [
        "animate-out",
        {
          "animation-name": "shadcn-exit",
          "animation-duration": "var(--un-animate-duration)",
          "--un-animate-duration": "150ms",
          "--un-exit-opacity": "initial",
          "--un-exit-scale": "initial",
          "--un-exit-rotate": "initial",
          "--un-exit-translate-x": "initial",
          "--un-exit-translate-y": "initial",
        },
      ],
      [
        /^fade-in-?(.+)?$/,
        ([, d]) => ({
          "--un-enter-opacity": `${
            Number(handleMatchNumber(d as string) || 0) / 100
          }`,
        }),
      ],
      [
        /^fade-out-?(.+)?$/,
        ([, d]) => ({
          "--un-exit-opacity": `${
            Number(handleMatchNumber(d as string) || 0) / 100
          }`,
        }),
      ],
      [
        /^zoom-in-?(.+)?$/,
        ([, d]) => ({
          "--un-enter-scale": `${
            Number(handleMatchNumber(d as string) || 0) / 100
          }`,
        }),
      ],
      [
        /^zoom-out-?(.+)?$/,
        ([, d]) => ({
          "--un-exit-scale": `${
            Number(handleMatchNumber(d as string) || 0) / 100
          }`,
        }),
      ],
      [
        /^spin-in-?(.+)?$/,
        ([, d]) => ({
          "--un-enter-rotate": `${Number(
            handleMatchNumber(d as string) || 0,
          )}deg`,
        }),
      ],
      [
        /^spin-out-?(.+)?$/,
        ([, d]) => ({
          "--un-exit-rotate": `${Number(
            handleMatchNumber(d as string) || 0,
          )}deg`,
        }),
      ],
      [
        /^slide-in-from-top-?(.+)?$/,
        ([, d]) => ({
          "--un-enter-translate-y": `-${handleMatchRem(d as string)}`,
        }),
      ],
      [
        /^slide-in-from-bottom-?(.+)?$/,
        ([, d]) => ({ "--un-enter-translate-y": handleMatchRem(d as string) }),
      ],
      [
        /^slide-in-from-left-?(.+)?$/,
        ([, d]) => ({
          "--un-enter-translate-x": `-${handleMatchRem(d as string)}`,
        }),
      ],
      [
        /^slide-in-from-right-?(.+)?$/,
        ([, d]) => ({ "--un-enter-translate-x": handleMatchRem(d as string) }),
      ],
      [
        /^slide-out-to-top-?(.+)?$/,
        ([, d]) => ({
          "--un-exit-translate-y": `-${handleMatchRem(d as string)}`,
        }),
      ],
      [
        /^slide-out-to-bottom-?(.+)?$/,
        ([, d]) => ({ "--un-exit-translate-y": handleMatchRem(d as string) }),
      ],
      [
        /^slide-out-to-left-?(.+)?$/,
        ([, d]) => ({
          "--un-exit-translate-x": `-${handleMatchRem(d as string)}`,
        }),
      ],
      [
        /^slide-out-to-right-?(.+)?$/,
        ([, d]) => ({ "--un-exit-translate-x": handleMatchRem(d as string) }),
      ],
    ],
  }
}

export function presetPlanetMatrix(): Preset<Theme> {
  return {
    name: "unocss-preset-planet-matrix",
    presets: [
      presetUno(),
      presetIcons({
        scale: 1.2,
      }),
      presetShadcn(),
      presetTypography(),
    ],
    preflights: [
      {
        getCSS: () => `
      :root {
        --background: 0 0% 100%;
        --foreground: 0 0% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 0 0% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 0 0% 3.9%;
        --primary: 0 0% 9%;
        --primary-foreground: 0 0% 98%;
        --secondary: 0 0% 96.1%;
        --secondary-foreground: 0 0% 9%;
        --muted: 0 0% 96.1%;
        --muted-foreground: 0 0% 45.1%;
        --accent: 0 0% 96.1%;
        --accent-foreground: 0 0% 9%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 89.8%;
        --input: 0 0% 89.8%;
        --ring: 0 0% 3.9%;
        --radius: 0.5rem;
      }

      .dark {
        --background: 0 0% 3.9%;
        --foreground: 0 0% 98%;
        --card: 0 0% 3.9%;
        --card-foreground: 0 0% 98%;
        --popover: 0 0% 3.9%;
        --popover-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 0 0% 9%;
        --secondary: 0 0% 14.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 0 0% 14.9%;
        --muted-foreground: 0 0% 63.9%;
        --accent: 0 0% 14.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 14.9%;
        --input: 0 0% 14.9%;
        --ring: 0 0% 83.1%;
      }

      html,
      body,
      #root {
        height: 100%;
      }

      html.dark {
        color-scheme: dark;
      }

      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }
      ::view-transition-old(root) {
        z-index: 1;
      }
      ::view-transition-new(root) {
        z-index: 9999;
      }
      .dark::view-transition-old(root) {
        z-index: 9999;
      }
      .dark::view-transition-new(root) {
        z-index: 1;
      }
      `,
      },
    ],
    theme: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    } as Theme,
  }
}
