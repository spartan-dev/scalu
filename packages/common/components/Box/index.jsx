import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled.components"

const Box = React.forwardRef(({ children, ...props }, ref) => (
  <Wrapper ref={ref} {...props}>
    {children}
  </Wrapper>
))

Box.propTypes = {
  children: PropTypes.node,
  flexBox: PropTypes.bool,
}

Box.defaultProps = {
  flexBox: false,
}

export default Box
