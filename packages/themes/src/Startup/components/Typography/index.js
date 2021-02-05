import { css } from "styled-components"
import { body } from "../../styles"

export default {
  main: css`
    font-family: ${body.fontFamily};
    font-size: ${body.fontSize}px;
    font-weight: 400;
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
        lineHeight: '64px',
        letterSpacing: '0.04em',
      },
      title: {
        fontSize: 70,
        fontWeight: 800,
        lineHeight: '64px',
        letterSpacing: '0.04em',
      },
      h2: {
        fontSize: 30,
        fontWeight: 'bolder',
        lineHeight: '40px',
        letterSpacing: '0.025em',
      },
      h3: {
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: '40px',
        letterSpacing: '0.03em',
      },
      h4: {
        fontSize: 30,
        fontWeight: 800,
        lineHeight: '35px',
        letterSpacing: '0.025em',
      },
      h5: {
        fontSize: 24,
        fontWeight: 800,
        lineHeight: '32px',
        letterSpacing: '0.03em',
      },
      h6: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: '23px',
      },
      body1: {
        fontSize: 20,
        fontWeight: 300,
        lineHeight: '32px',
        letterSpacing: '0.03em',
      },
      body2: {
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.07em',
      },
      body: {
        fontSize: 14,
        lineHeight: '14px',
        letterSpacing: '0.03em',
      },
      quote1: {
        fontSize: 24,
        lineHeight: 1.4,
        fontWeight: 300,
        fontStyle: 'italic',
      },
      quote2: {
        fontSize: 16,
        lineHeight: '40px',
        letterSpacing: '0.025em',
      },
      button1: {
        fontSize: 20,
        lineHeight: '23px',
        letterSpacing: '0.07em',
      },
      button2: {
        fontSize: 16,
        lineHeight: '19px',
      },
      button: {
        fontSize: 14,
        lineHeight: 1.7,
        fontWeight: 600,
      },
    },
  };
  
