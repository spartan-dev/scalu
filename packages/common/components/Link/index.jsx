import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./styled.components"

const Link = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
}

Link.defaultProps = {
  as: "a",
}

export default Link
