import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/components/Typography"
import Container from "@pagerland/common/components/Container"
import Grid from "@pagerland/common/components/Grid"

import data from "../../data"
import Avatar from "../../components/Avatar"
import Background from "./Background"

const Team = ({
  name,
  title,
  people,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  GridProps,
  PersonWrapperProps,
  AvatarProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {people.map((person, key) => (
          <Fade key={key} bottom cascade duration={600} delay={key * 100}>
            <Box {...PersonWrapperProps}>
              <Avatar {...AvatarProps} {...person.avatar} />
            </Box>
          </Fade>
        ))}
      </Grid>
    </Container>
  </Box>
)

Team.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  PersonWrapperProps: PropTypes.object,
  AvatarProps: PropTypes.object,
  NameProps: PropTypes.object,
  PositionProps: PropTypes.object,
  LinkedinIconProps: PropTypes.object,
  TwitterIconProps: PropTypes.object,
  SkypeIconProps: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.object,
      name: PropTypes.node,
      position: PropTypes.node,
      social: PropTypes.shape({
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
        skype: PropTypes.string,
      }),
    })
  ),
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
      _: 4,
      md: 5,
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
  TextProps: {
    color: "gray.1",
    mb: 4,
  },
  GridProps: {
    mb: {
      _: 4,
      md: 5,
    },
    mt: {
      _: 40,
      sm: 40,
      md: 80,
      lg: 100,
    },
    gridTemplateColumns: {
      _: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gridColumnGap: "32px",
    gridRowGap: {
      _: "32px",
      md: "64px",
    },
  },
  AvatarProps: {
    mb: 2,
  },
  NameProps: {
    variant: "h5",
    color: "black",
  },
  PositionProps: {
    color: "gray.1",
    mb: 2,
  },
  CtaProps: {
    textAlign: "center",
    mx: "auto",
    variant: "secondary",
    as: "a",
  },
  LinkedinIconProps: {
    mx: 2,
    color: "primary",
    fontSize: 24,
  },
  TwitterIconProps: {
    mx: 2,
    color: "secondary",
    fontSize: 24,
  },
  SkypeIconProps: {
    mx: 2,
    color: "accent",
    fontSize: 24,
  },
  ...data.team,
}

export default Team
