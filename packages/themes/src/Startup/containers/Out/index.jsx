import React from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"

import Box from "@pagerland/common/src/components/Box"
import Typography from "@pagerland/common/src/components/Typography"
import Img from "@pagerland/common/src/components/Img"
import data from "../../data"

const Out = ({
  name,
  firstTitle,
  WrapperProps,
  TitleProps,
  src,
  FirstTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Box {...FirstTitleProps}>
      <Fade bottom cascade duration={600}>
        <Typography {...TitleProps}>{firstTitle}</Typography>
        <Img src={src} />
      </Fade>
    </Box>
  </Box>
)

Out.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * First Title  of component
   */
  FirstTitleProps: PropTypes.object,
}

Out.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    position: "relative",
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    mb: {
      _: 4,
      lg: 5,
    },
  },
  FirstTitleProps: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  ...data.contact,
}

export default Out
