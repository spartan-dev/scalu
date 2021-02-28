import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Container from "@pagerland/common/components/Container"
import Typography from "@pagerland/common/components/Typography"

import data from "../../data"

const Copyright = ({ copyright, WrapperProps, ContainerProps, TextProps }) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TextProps}>{copyright}</Typography>
    </Container>
  </Box>
)

Copyright.propTypes = {
  copyright: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  TextProps: PropTypes.object,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
}

Copyright.defaultProps = {
  ...data.footer,
  copyright: data.copyright,
  TextProps: {
    variant: "body2",
    color: "gray.2",
  },
  WrapperProps: {
    py: 18,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "gray.5",
    display: "flex",
    justifyContent: "center",
  },
  ContainerProps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: {
      _: "column",
      md: "row",
    },
  },
}

export default Copyright
