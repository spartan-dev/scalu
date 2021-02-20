import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/src/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/src/components/Typography"
import Container from "@pagerland/common/src/components/Container"
import Button from "@pagerland/common/src/components/Button"
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
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Wrapper for image
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of button below grid
   * @See @pagerland/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Img details
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Title of section
       */
      name: PropTypes.node,
    })
  ),

  AcctionButtonProps: PropTypes.object,

  AccordionLabelProps: PropTypes.object,

  AccordionTitleProps: PropTypes.object,

  AccordionWrapperProps: PropTypes.object,

  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Cta button details
   */
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
    py: {
      _: 56,
      md: 64,
      lg: 96,
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
    color: "black",
    mb: 4,
    textAlign: "center",
  },
  TextProps: {
    color: "gray.8",
    mb: 48,
    px: {
      _: 21,
      md: 80,
      lg: 200,
    },
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
    fontWeight: 800,
  },
  AccordionWrapperProps: {
    mb: 80,
  },
  AccordionLabelProps: {
    mb: 20,
    fontSize: 20,
    lineHeight: 1.5,
    letterSpacing: "0.025em",
    fontWeight: 300,
    textAlign: "center",
    color: "gray.8",
  },
  AccordionTitleProps: {
    fontSize: 30,
    lineHeight: "35px",
    fontWeight: "bold",
    letterSpacing: "0.025em",
  },
  ...data.experts,
}

export default Experts
