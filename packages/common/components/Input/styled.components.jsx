import styled from "styled-components"
import { base, theme } from "../../utils"
import Typography from "../../../themes/components/Typography"
import { body } from "../../../themes/styles"

export const Wrapper = styled.div`
  ${theme("Input.Wrapper")}
  ${base}

  .ReactCollapse--collapse {
    transition: height 200ms ease-in-out;
  }

  .ReactCollapse--content {
    opacity: 0;
    transition: opacity 200ms ease-in-out 100ms;
  }

  &.error .ReactCollapse--content {
    opacity: 1;
  }
`
export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #333333;
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: "0.03em";

  ${base}
`
export const InputWrapper = styled.div`
  ${base}
`
export const StyledInput = styled.textarea`
  padding: 1em;
  color: #333333;
  background: #f8f8f8;
  border: none;
  width: 100%;
  font-family: ${body.fontFamily};
  ${Typography.variants.button2};
  height: ${props => (props.placeholder === "Mensaje..." ? "140px" : "57px")};
  margin-bottom: 0.5em;

  ${base}
`
export const ErrorMessage = styled.span`
  ${theme("Input.ErrorMessage")}
  ${base}
`
export const StyledTextarea = StyledInput.withComponent("textarea")
