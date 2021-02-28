import React from "react"
import styled, { css } from "styled-components"

import * as _ from "lodash"

import { HamburgerSpin } from "react-animated-burgers"

import Box from "@pagerland/common/components/Box"
import { base } from "@pagerland/common/utils"

import Typography from "../../components/Typography"
import { transition, typography } from "../../styles"

export const Wrapper = styled(Box)`
  transition: ${transition.all};

  .sticky & {
    background-color: ${props =>
      _.get(props.theme.colors, props.stickyBgColor)};
    box-shadow: 0 36px 64px rgba(34, 39, 43, 0.06);
  }
`

export const LogoWrapper = styled.a`
  display: block;
  ${base};
`

// eslint-disable-next-line jsx-a11y/anchor-has-content
export const NavbarLink = styled(({ activecolor, ...props }) => (
  <a {...props} />
))`
  display: block;
  font-weight: normal;
  font-family: ${typography.roboto.fontFamily};
  ${Typography.variants.button2};
  transition: ${transition.all};
  ${base};
  &.active {
    color: ${props => _.get(props.theme.colors, props.activecolor)};
  }
`

export const ToggleButton = styled(HamburgerSpin)`
  outline: none;
  ${base};
  width: 25px;
  height: 15.5px;

  & span,
  & span::after,
  & span::before {
    background-color: ${props => _.get(props.theme.colors, props.color)};
  }
`

export const MobileWrapper = styled(Box)`
  visibility: hidden;
  opacity: 0;
  transition: ${transition.all};
  transform: scale(1.2);
  overflow: auto;

  ${props =>
    props.isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
`
