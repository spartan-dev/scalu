import React from "react"
import PropTypes from "prop-types"

import { Image, Wrapper } from "./styled.components"

const Avatar = ({ className, src, srcSet, ImgProps, ...props }) => (
  <Wrapper className={className} {...props}>
    <Image src={src} srcSet={src} {...ImgProps} />
  </Wrapper>
)

Avatar.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  className: PropTypes.string,
  ImgProps: PropTypes.object,
}

export default Avatar
