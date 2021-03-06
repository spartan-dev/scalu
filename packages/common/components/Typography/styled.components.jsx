import styled from "styled-components"
import { typography } from "styled-system"
import { base, theme, variant } from "../../utils"

export const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;

  ${theme("Typography")}
  ${base}
  ${typography}

  ${variant({
    prop: "variant",
    scale: "Typography.variants",
  })}
`
