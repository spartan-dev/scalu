import React from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"

import Box from "@pagerland/common/components/Box"
import Typography from "@pagerland/common/components/Typography"
import data from "../../data"

const Out = ({
  name,
  firstTitle,
  WrapperProps,
  TitleProps,
  src: Src,
  FirstTitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Box {...FirstTitleProps}>
      <Fade bottom cascade duration={600}>
        <Typography {...TitleProps}>{firstTitle}</Typography>
      </Fade>
      <Fade bottom cascade duration={600}>
        <Src />
      </Fade>
    </Box>
  </Box>
)

Out.propTypes = {
  name: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  src: PropTypes.func.isRequired,
  WrapperProps: PropTypes.object,
  TitleProps: PropTypes.object,
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
