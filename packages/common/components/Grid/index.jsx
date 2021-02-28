import React from "react"
import PropTypes from "prop-types"
import { Wrapper } from "./styled.components"

const Grid = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Grid
