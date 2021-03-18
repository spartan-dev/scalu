import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/components/Typography"
import Container from "@pagerland/common/components/Container"

import data from "../../data"
import Background from "./Background"

const Team = ({
  name,
  title,
  brands,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  PersonWrapperProps,
  BrandsProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Box {...PersonWrapperProps}>
        {brands.map((brand, key) => (
          <Box {...BrandsProps[key]}>
            <Fade key={key} bottom cascade duration={600} delay={key * 100}>
              {brand}
            </Fade>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
)

Team.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  PersonWrapperProps: PropTypes.object,
  BrandsProps: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.node,
  brands: PropTypes.arrayOf(PropTypes.node),
}

Team.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 150,
    },
    position: "relative",
  },
  ContainerProps: {
    textAlign: "center",
  },
  CaptionProps: {
    mb: {
      _: 5,
      md: 100,
    },
    mx: "auto",
    maxWidth: 736,
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    textAlign: "center",
  },
  PersonWrapperProps: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: {
      _: "column",
      md: "row",
    },
  },
  BrandsProps: [
    {
      mb: {
        _: 5,
        md: 100,
        lg: 136,
      },
    },
    {
      mb: {
        _: 5,
        md: 100,
        lg: 136,
      },
      mx: {
        md: 90,
        lg: 136,
      },
    },
    {
      mb: {
        _: 5,
        md: 100,
        lg: 136,
      },
    },
    {
      mb: {
        _: 5,
        md: 0,
      },
      mr: {
        md: 90,
        lg: 136,
      },
    },
    {
      mb: {
        _: 5,
        md: 0,
      },
    },
  ],
  ...data.team,
}

export default Team
