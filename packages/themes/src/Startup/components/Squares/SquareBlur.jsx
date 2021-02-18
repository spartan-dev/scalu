import React from "react"
import styled from "styled-components"

import { base } from "@pagerland/common/src/utils"

const Svg = styled.svg`
  ${base};
  overflow: visible !important;
`

const SquareBlur = props => (
  <Svg
    viewBox="16 16 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <svg
      width="212"
      height="119"
      viewBox="0 0 212 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="70.0036"
        cy="38.1837"
        r="5"
        transform="rotate(45 70.0036 38.1837)"
        fill="currentColor"
      />
      <circle
        cx="70.0036"
        cy="53.7401"
        r="5"
        transform="rotate(45 70.0036 53.7401)"
        fill="currentColor"
      />
      <circle
        cx="54.4472"
        cy="38.1837"
        r="5"
        transform="rotate(45 54.4472 38.1837)"
        fill="currentColor"
      />
      <circle
        cx="54.4472"
        cy="53.7401"
        r="5"
        transform="rotate(45 54.4472 53.7401)"
        fill="currentColor"
      />
      <circle
        cx="70.7107"
        cy="68.5894"
        r="5"
        transform="rotate(45 70.7107 68.5894)"
        fill="currentColor"
      />
      <circle
        cx="70.0036"
        cy="84.8528"
        r="5"
        transform="rotate(45 70.0036 84.8528)"
        fill="currentColor"
      />
      <circle
        cx="38.8909"
        cy="38.1837"
        r="5"
        transform="rotate(45 38.8909 38.1837)"
        fill="currentColor"
      />
      <circle
        cx="38.8909"
        cy="69.2965"
        r="5"
        transform="rotate(45 38.8909 69.2965)"
        fill="currentColor"
      />
      <circle
        cx="54.4472"
        cy="69.2965"
        r="5"
        transform="rotate(45 54.4472 69.2965)"
        fill="currentColor"
      />
      <circle
        cx="54.4472"
        cy="84.8528"
        r="5"
        transform="rotate(45 54.4472 84.8528)"
        fill="currentColor"
      />
      <circle
        cx="70.0036"
        cy="100.409"
        r="5"
        transform="rotate(45 70.0036 100.409)"
        fill="currentColor"
      />
      <circle
        cx="38.8909"
        cy="53.7401"
        r="5"
        transform="rotate(45 38.8909 53.7401)"
        fill="currentColor"
      />
      <circle
        cx="23.3345"
        cy="38.1837"
        r="5"
        transform="rotate(45 23.3345 38.1837)"
        fill="currentColor"
      />
      <circle
        cx="22.6274"
        cy="54.4472"
        r="5"
        transform="rotate(45 22.6274 54.4472)"
        fill="currentColor"
      />
      <circle
        cx="7.07107"
        cy="38.8909"
        r="5"
        transform="rotate(45 7.07107 38.8909)"
        fill="currentColor"
      />
    </svg>
    <defs>
      <filter
        id="square_blur_filter"
        x="0"
        y="0"
        width="112"
        height="112"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
        <feGaussianBlur stdDeviation="8" result="effect2_foregroundBlur" />
      </filter>
    </defs>
  </Svg>
)

export default SquareBlur
