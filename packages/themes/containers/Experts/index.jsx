import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/components/Typography"
import Container from "@pagerland/common/components/Container"
import Button from "@pagerland/common/components/Button"
import { Details, Summary, Accordion, TextWrapper } from "./styled.components"

import data from "../../data"

const Experts = ({
  name,
  onClick,
  title,
  text,
  sections,
  cta,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  CtaProps,
  AccordionWrapperProps,
  AccordionTitleProps,
  AccordionLabelProps,
  AcctionButtonProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...AccordionWrapperProps}>
            {sections.map(section => (
              <Accordion>
                <Details>
                  <Summary color={section.color}>
                    <Typography {...AccordionTitleProps}>
                      {section.name}
                    </Typography>
                  </Summary>
                  <TextWrapper>
                    {section.labels.map(label => (
                      <Typography {...AccordionLabelProps}>{label}</Typography>
                    ))}
                  </TextWrapper>
                </Details>
              </Accordion>
            ))}
          </Box>
          <Box {...AcctionButtonProps}>
            <Button {...CtaProps} {...cta} onClick={() => onClick()}>
              {cta.label}
            </Button>
          </Box>
        </Fade>
      </Box>
    </Container>
  </Box>
)

Experts.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  CtaProps: PropTypes.object,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node,
    })
  ),
  AcctionButtonProps: PropTypes.object,
  AccordionLabelProps: PropTypes.object,
  AccordionTitleProps: PropTypes.object,
  AccordionWrapperProps: PropTypes.object,
  title: PropTypes.node,
  text: PropTypes.node,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    })
  ),
}

Experts.defaultProps = {
  WrapperProps: {
    overflow: {
      _: "hidden",
      sm: "visible",
    },
    pt: {
      _: 0,
      lg: 32,
    },
    pb: {
      _: 96,
      lg: 32,
    },
  },
  ContainerProps: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: {
      _: "column",
      lg: "row",
    },
    px: {
      md: 40,
    },
  },
  CaptionProps: {
    textAlign: {
      _: "center",
      lg: "left",
    },
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    mb: 4,
    textAlign: "center",
  },
  TextProps: {
    textAlign: "center",
    color: "gray.8",
    mb: 48,
    variant: "body1",
    fontWeight: 300,
  },
  AcctionButtonProps: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  CtaProps: {
    variant: "primary",
    as: "a",
    height: 48,
    width: 296,
  },
  AccordionWrapperProps: {
    mb: 80,
  },
  AccordionLabelProps: {
    mb: 20,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 300,
    textAlign: "center",
    color: "gray.8",
  },
  AccordionTitleProps: {
    fontSize: 30,
    lineHeight: "35px",
    fontWeight: "bold",
  },
  ...data.experts,
}

export default Experts
