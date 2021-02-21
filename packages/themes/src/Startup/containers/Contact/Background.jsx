import React from "react"
import styled from "styled-components"
import { base } from "@pagerland/common/src/utils"
import { breakpoints, colors } from "../../styles"

const Svg = styled.svg`
  ${base};
  position: absolute;
  top: 150px;
  left: calc(50% - 136px);
  z-index: -1;
  color: ${colors.gray[6]};

  @media (max-width: ${breakpoints.md}) {
    top: 420px;
    height: 50%;
  }

  @media (max-width: ${breakpoints.sm}) {
    top: 200px;
    height: 50%;
  }
`

const Background = props => (
  <Svg
    width="1140"
    height="755"
    viewBox="0 0 1140 755"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M672.167 118.62C768.967 165.02 819.666 180.5 854 180.5V814.5C830.166 829 810.167 855.32 752.167 846.12C694.167 836.92 641.667 773.954 622.667 743.62C624.667 700.454 609.667 606.92 533.667 578.12C457.667 549.32 380.166 584.833 320.5 635.5C118.1 605.1 43.3074 516.5 15.1674 421.62C-12.9726 326.741 -6.50016 180.5 86.4995 78.4997C179.499 -23.5001 334 0.332911 403.5 7.99958C451.5 14.9996 575.367 72.2202 672.167 118.62Z"
      fill="#F8F8F8"
    />
  </Svg>
)

export default Background
