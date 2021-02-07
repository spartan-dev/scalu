import React from "react"
import PropTypes from "prop-types"

import Box from "@pagerland/common/src/components/Box"
import Fade from "react-reveal/Fade"
import Typography from "@pagerland/common/src/components/Typography"
import Container from "@pagerland/common/src/components/Container"
import Button from "@pagerland/common/src/components/Button"
import { Details, Summary, Accordion, TextWrapper, } from './styled.components'

import data from "../../data"

import Background from "./Background"


const Experts = ({
  name,
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
  AccordionProps,
  AccordionTitleProps,
  AccordionLabelProps,
  AccordionTextProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Box {...AccordionProps}>  
            {sections?.map((section, i) => ( 
              <Accordion key={i} >
                <Details>
                  <Summary>
                    <Typography
                    {...AccordionTitleProps}
                    {...sections[i]?.AccordionTitleProps}
                    >
                    {section.title}
                    </Typography>
                  </Summary>
                    <TextWrapper {...AccordionTextProps}>
                      {section.features?.map((feature, i) => (
                        <div>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label1}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label2}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label3}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label4}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label5}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label6}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label7}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label8}
                          </Typography>
                          <Typography
                            {...AccordionLabelProps}
                            {...sections[i]?.AccordionLabelProps}
                            >
                            {feature.label9}
                          </Typography>
                        </div>
                      ))}
                    </TextWrapper>
                </Details>
              </Accordion>
            ))}
          </Box>
          <Button {...CtaProps} {...cta}>
            {cta.label}
          </Button>
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

  AccordionProps: PropTypes.object,
  AccordionTitleProps: PropTypes.object,
  AccordionLabelProps: PropTypes.object,
  AccordionTextProps: PropTypes.object,

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
    position: "relative",
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
    textAlign: 'center',
  },
  TextProps: {
    color: "gray.1",
    mb: 48,
  },
  CtaProps: {
    as: "a",
    variant: "primary",
  },
  AccordionProps: {
    mb: 40,
  },
  ...data.experts,
  
}

export default Experts
