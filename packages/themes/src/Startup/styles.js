import { css } from "styled-components"
import { transparentize } from "polished"

export const space = [0, 4, 8, 16, 32, 64]

export const colors = {
  primary: "#8D00FF",
  secondary: "#FFB800",
  accent: "#FF5F00",
  quaternary: "#FF42B3",
  quinary: "#00CE73",
  error: "#EB5757",
  success: "#27AE60",
  shades: {
    primary: [
      "8D00FF",
      "rgba(141, 0, 255, 0.8)",
      "rgba(141, 0, 255, 0.6)",
      "#80FFE8",
    ],
    secondary: [
      "#FFB800",
      "rgba(255, 184, 0, 0.8);",
      "rgba(255, 184, 0, 0.6);",
      "#6D96B1",
    ],
    accent: [
      "#FF5F00",
      "rgba(255, 95, 0, 0.8);",
      "rgba(255, 95, 0, 0.6);",
      "#88E2FF",
    ],
    quaternary: [
      "#FF42B3",
      "rgba(255, 66, 179, 0.8)",
      "rgba(255, 66, 179, 0.6)",
      "#FF9680",
    ],
    quinary: [
      "#00CE73",
      "rgba(0, 206, 115, 0.8)",
      "rgba(0, 206, 115, 0.6)",
      "#FF9680",
    ],
  },

  gray: [
    "#101820",
    "#4F4F4F",
    "#828282",
    "#F8F8F8",
    "#d1d4d5",
    "#EFF2F4",
    "#F8FAFA",
    "#FFFFFF",
    "#333333",
  ],

  svgGradients: {
    primary: {
      from: "#2BD7B8",
      to: "#42EBCC",
    },
    secondary: {
      from: "#2D5D7C",
      to: "#5286A8",
    },
    accent: {
      from: "#33B9E3",
      to: "#59D7FF",
    },
    quaternary: {
      from: "#EF5939",
      to: "#FB7C61",
    },
  },
}

export const typography = {
  roboto: {
    googleFont:
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@400;500&display=swap",
    fontFamily: "Roboto, sans-serif",
    color: colors.gray[0],
    sizes: {
      base: 18,
    },
  },
}

export const body = {
  fontSize: 18,
  fontFamily: "'Gilroy', sans-serif",
  lineHeight: 1.6,
  color: colors.gray[0],
}

export const transition = {
  base: ".2s ease-in-out",
  all: "all .2s ease-in-out",
}

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
}

export const borderRadius = {
  small: 12,
  normal: 18,
  large: 24,
  xLarge: 28,
  xxLarge: 32,
  xxxLarge: 64,
}

export const radii = { ...borderRadius }

export const shadows = {
  primary: `0px 24px 32px ${transparentize(0.86, colors.primary)}`,
  secondary: `0px 24px 32px ${transparentize(0.86, colors.secondary)}`,
  accent: `0px 24px 32px ${transparentize(0.86, colors.accent)}`,
  black: `0px 24px 32px ${transparentize(0.86, colors.gray[5])}`,
}

export const global = css`
  blockquote {
    footer {
      display: flex;
      align-items: center;
      justify-content: "center";

      &::before {
        display: block;
        width: 40px;
        height: 1px;
        margin-top: 2px;
        margin-right: 16px;
        content: "";
        background-color: currentColor;
      }
    }
  }
`

export const breakpoints = ["450px", "768px", "1170px", "1440px"]
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0]
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1]
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2]
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3]
