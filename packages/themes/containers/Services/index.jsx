import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/components/Typography"
import Container from "@pagerland/common/components/Container"
import Grid from "@pagerland/common/components/Grid"
import Button from "@pagerland/common/components/Button"

import Experiencia from "@pagerland/icons/Experiencia"
import Multiplica from "@pagerland/icons/Multiplica"
import data from "../../data"

const Services = ({
  name,
  title,
  text,
  actions,
  services,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  ServiceItemProps,
  ServiceIconProps,
  ServiceTitleProps,
  ServiceTextProps,
  ActionButtonsProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Grid {...GridProps}>
        {services.map((service, key) => (
          <Fade bottom cascade duration={600} delay={key * 100} key={key}>
            <Box {...ServiceItemProps}>
              <Box
                {...ServiceIconProps}
                style={{
                  paddingTop: `${
                    // eslint-disable-next-line no-nested-ternary
                    service.icon === Experiencia
                      ? `46px`
                      : service.icon === Multiplica
                      ? `17px`
                      : ""
                  }`,
                }}
              >
                <service.icon />
              </Box>
              <Typography {...ServiceTitleProps}>{service.title}</Typography>
              <Typography {...ServiceTextProps}>{service.text}</Typography>
            </Box>
          </Fade>
        ))}
      </Grid>
      <Fade top cascade duration={600}>
        <Box {...ActionButtonsProps}>
          {actions.map(({ label, ...props }, key) => (
            <Button {...props} key={key}>
              {label}
            </Button>
          ))}
        </Box>
      </Fade>
    </Container>
  </Box>
)

Services.propTypes = {
  actions: PropTypes.array,
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  GridProps: PropTypes.object,
  ServiceItemProps: PropTypes.object,
  ServiceIconProps: PropTypes.object,
  ServiceTitleProps: PropTypes.object,
  ServiceTextProps: PropTypes.object,
  CtaProps: PropTypes.object,
  ActionButtonsProps: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.function,
      title: PropTypes.node,
      text: PropTypes.node,
    })
  ),
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
}

Services.defaultProps = {
  WrapperProps: {
    pt: {
      _: 56,
      md: 64,
      lg: 96,
    },
    pb: {
      _: 136,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: "center",
    px: {
      md: 40,
    },
  },
  CaptionProps: {
    mb: {
      _: 112,
      lg: 5,
    },
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    mb: 3,
    textAlign: "center",
  },
  TextProps: {
    color: "gray.8",
    mb: 4,
    variant: "body1",
  },
  GridProps: {
    gridTemplateColumns: {
      _: "1fr",
      lg: "repeat(3, 1fr)",
    },
    gridGap: "64px",
    maxWidth: 1088,
    mx: "auto",
    mb: 5,
  },
  ServiceIconProps: {
    display: "block",
    mx: "auto",
    mt: {
      _: 0,
      lg: 56,
    },
    mb: {
      _: 0,
      lg: 24,
    },
    height: "100%",
  },
  ServiceTitleProps: {
    textAlign: "center",
    as: "h3",
    variant: "h3",
    mb: 16,
    mt: {
      _: 58,
      lg: 0,
    },
  },
  ServiceTextProps: {
    color: "gray.1",
    textAlign: "center",
    variant: "body2",
    fontWeight: 300,
  },
  CtaProps: {
    textAlign: "center",
    mx: "auto",
    variant: "secondary",
    as: "a",
  },
  ActionButtonsProps: {
    width: "100%",
    height: 48,
    display: "flex",
    justifyContent: "center",
  },
  ...data.services,
}

export default Services
