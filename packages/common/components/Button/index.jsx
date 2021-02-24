import React from "react"
import PropTypes from "prop-types"
import { IconWrapper, TextWrapper, Wrapper } from "./styled.components"
import Icon from "../Icon"

const Button = ({ children, icon, iconPlacement, ...props }) => (
  <Wrapper {...props}>
    {icon && iconPlacement === "left" && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
    <TextWrapper>{children}</TextWrapper>
    {icon && iconPlacement === "right" && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
  </Wrapper>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  icon: PropTypes.elementType,
  iconPlacement: PropTypes.oneOf(["left", "right"]),
}

Button.defaultProps = {
  as: "button",
  iconPlacement: "right",
}

export default Button
