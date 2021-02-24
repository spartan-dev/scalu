import { css } from "styled-components"
import { body } from "../../styles"

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    line-height: ${body.lineHeight};

    label& {
      cursor: pointer;
      user-select: none;
    }

    a& {
      text-decoration: none;
    }
  `,
  variants: {
    h1: {
      fontSize: 70,
      fontWeight: 600,
      lineHeight: "64px",
    },
    title: {
      fontSize: 70,
      fontWeight: 800,
      lineHeight: "64px",
    },
    h2: {
      fontSize: 30,
      fontWeight: "bolder",
      lineHeight: "40px",
    },
    h3: {
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: "40px",
    },
    h4: {
      fontSize: 30,
      fontWeight: 800,
      lineHeight: "35px",
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "32px",
    },
    h6: {
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: "23px",
    },
    body1: {
      fontSize: 20,
      fontWeight: 300,
      lineHeight: "32px",
    },
    body2: {
      fontSize: 16,
      lineHeight: "24px",
    },
    body: {
      fontSize: 14,
      lineHeight: "14px",
    },
    quote1: {
      fontSize: 24,
      lineHeight: 1.4,
      fontWeight: 300,
      fontStyle: "italic",
    },
    quote2: {
      fontSize: 16,
      lineHeight: "40px",
    },
    button1: {
      fontSize: 20,
      lineHeight: "23px",
    },
    button2: {
      fontSize: 16,
      lineHeight: "19px",
    },
    button: {
      fontSize: 14,
      lineHeight: 1.7,
      fontWeight: 600,
    },
  },
}
