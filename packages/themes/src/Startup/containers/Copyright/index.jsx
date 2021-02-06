import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/src/components/Box"
import Container from "@pagerland/common/src/components/Container"
import Typography from "@pagerland/common/src/components/Typography"

import List from "@pagerland/common/src/components/List"

import data from "../../data"

const Copyright = ({
  copyright,
  WrapperProps,
  ContainerProps,
  TextProps,

}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps}>
      <Typography {...TextProps}>{copyright}</Typography>
    </Container>
  </Box>
)

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Links in footer
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Props of links items
   * @See @pagerland/common/src/components/List
   */
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
    display: 'flex',
    justifyContent: 'center',
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
