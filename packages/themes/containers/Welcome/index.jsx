import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/components/Typography"
import Button from "@pagerland/common/components/Button"

import data from "../../data"

import {
  ContainerWithBackground,
  RoundedImage,
  Rectangle,
} from "./styled.components"
import Squares from "./Squares"

const Welcome = ({
  name,
  title,
  text,
  img,
  actions,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  ActionButtonsProps,
  ImageWrapperProps,
  ImageProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <ContainerWithBackground {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>
            {title} <Rectangle />
          </Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...ActionButtonsProps}>
            {actions.map(({ label, ...props }, key) => (
              <Button {...props} key={key}>
                {label}
              </Button>
            ))}
          </Box>
        </Fade>
      </Box>
      <Box {...ImageWrapperProps}>
        <Squares />
        <Fade cascade duration={600}>
          <RoundedImage {...ImageProps} {...img} />
        </Fade>
      </Box>
    </ContainerWithBackground>
  </Box>
)

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  ActionButtonsProps: PropTypes.object,
  ImageWrapperProps: PropTypes.object,
  ImageProps: PropTypes.object,
  AvatarsProps: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.node,
  text: PropTypes.node,
  img: PropTypes.object,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  avatars: PropTypes.arrayOf(PropTypes.object),
}

Welcome.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
  },
  ContainerProps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      _: "column",
      lg: "row",
    },
  },
  CaptionProps: {
    my: {
      _: 26,
      md: 70,
      lg: 135,
    },
    maxWidth: {
      _: 500,
      lg: 457,
    },
  },
  TitleProps: {
    as: "h1",
    variant: "h1",
    mb: 4,
    mx: "auto",
    color: "gray.8",
  },
  TextProps: {
    variant: "body1",
    color: "gray.1",
  },
  ActionButtonsProps: {
    mt: 4,
    width: 172,
    height: 48,
  },
  ImageWrapperProps: {
    zIndex: 4,
    position: "relative",
    my: {
      _: 78,
      md: 56,
      lg: 0,
    },
  },
  ImageProps: {
    width: "100%",
    maxWidth: 520,
  },
  AvatarsProps: [
    {
      position: "absolute",
      width: 87,
      height: 87,
      top: -92,
      left: 9,
    },
    {
      position: "absolute",
      width: 53,
      height: 53,
      top: -80,
      right: 167,
    },
    {
      position: "absolute",
      width: 56,
      height: 56,
      top: 209,
      right: -87,
    },
    {
      position: "absolute",
      width: 60,
      height: 60,
      bottom: -79,
      left: 264,
    },
    {
      position: "absolute",
      width: 87,
      height: 87,
      bottom: 3,
      left: -128,
    },
  ],
  ...data.welcome,
}

export default Welcome
