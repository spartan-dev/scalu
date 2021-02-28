import styled from "styled-components"
import { grid } from "styled-system"

import { base, theme } from "../../utils"

export const Wrapper = styled.div`
  ${theme("Grid")}
  ${base}

  display: grid;
  ${grid}
`
