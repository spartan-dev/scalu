import React from "react"
import styled from "styled-components"
import { base } from "@pagerland/common/src/utils"
import { breakpoints, colors } from "../../styles"

const Svg = styled.svg`
  ${base};
  position: absolute;
  top: -100px;
  z-index: -1;
  width: 100%;
  height: 100%;
  color: ${colors.gray[3]};

  @media (max-width: ${breakpoints.md}) {
    height: 100%;
    top: -90px;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 100%;
    top: -130px;
  }
`

const Background = props => (
  <Svg
    viewBox="0 0 1440 792"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M303.5 399C145.9 332.2 35.5 89.5 0 0V695.5C377 621 496 677.5 633.5 721.5C752.077 759.445 798.5 783 1050 791C1251.2 797.4 1393.83 730 1440 695.5V284C1384.67 268.833 1239.9 239.9 1103.5 245.5C967.1 251.1 782.667 336.167 707.5 378C638.5 412.833 461.1 465.8 303.5 399Z"
      fill="#F8F8F8"
    />
  </Svg>
)

export default Background
