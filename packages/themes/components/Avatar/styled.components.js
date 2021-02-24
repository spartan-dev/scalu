import styled from "styled-components"

import Img from "@pagerland/common/components/Img"
import { base } from "@pagerland/common/utils"

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 88px;
  height: 88px;
  @media (min-width: 1024px) {
    width: 148px;
    height: 148px;
  }

  ${base};
`

export const Image = styled(Img)`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 100%;
`
