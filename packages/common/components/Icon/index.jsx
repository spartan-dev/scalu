import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled.components"

const Icon = ({ icon: IconElement, IconProps, ...props }) => (
  <Wrapper {...props}>
    <IconElement width={undefined} height={undefined} {...IconProps} />
  </Wrapper>
)

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  gradient: PropTypes.string,
  IconProps: PropTypes.object,
}

export default Icon
