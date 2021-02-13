/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel"

import Box from "@pagerland/common/src/components/Box"
import Button from "@pagerland/common/src/components/Button"
import Card from "@pagerland/common/src/components/Card"
import Container from "@pagerland/common/src/components/Container"
import Icon from "@pagerland/common/src/components/Icon"
import Img from "@pagerland/common/src/components/Img"
import List from "@pagerland/common/src/components/List"
import Typography from "@pagerland/common/src/components/Typography"

import Plus from "@pagerland/icons/src/monochrome/Plus"

import next from "../../assets/pricing/next.svg"
import back from "../../assets/pricing/back.svg"

import data from "../../data"

const Pricing = ({
  WrapperProps,
  ContainerProps,
  CardWrapperProps,
  ControlsNextProps,
  ControlsBackProps,
  TitleProps,
  TextProps,
  CardProps,
  CardIconProps,
  CardListProps,
  CardListItemProps,
  CardListItemIconProps,
  CardListItemPrefixProps,
  CardButtonProps,
  DescriptionProps,
  SecondTextProps,
  sections,
  name,
  prices,
  title,
  text,
}) => {
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const slides = width > 1024 ? 3 : width > 768 ? 2 : 1
  const sliderHeigth =
    width > 1024
      ? 400
      : width > 768
      ? 370
      : width > 640
      ? 230
      : width > 425
      ? 275
      : 480

  return (
    <Box {...WrapperProps} name={name}>
      <Container {...ContainerProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Container>
      <Reveal effect="cards" duration={600}>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={sliderHeigth}
          totalSlides={prices?.sections?.length}
          touchEnabled
          dragEnabled
          visibleSlides={slides}
          infinite
        >
          <Slider>
            <Box {...CardWrapperProps}>
              {prices?.sections?.map((section, i) => (
                <Slide key={i}>
                  <Card {...CardProps}>
                    <Typography {...TitleProps}>{section.title}</Typography>
                    <Img src={section.icon} {...CardIconProps} />
                    <Typography {...SecondTextProps}>
                      <Typography {...DescriptionProps}>
                        {section.text}
                      </Typography>
                      {section.secondText}
                    </Typography>
                    <List {...CardListProps}>
                      {section.features?.map((feature, key) => (
                        <List.Item key={key} {...CardListItemProps}>
                          <Icon
                            icon={Plus}
                            {...CardListItemIconProps}
                            {...sections[i]?.CardListItemIconProps}
                          />
                          <Typography {...CardListItemPrefixProps}>
                            {feature.prefix}
                          </Typography>
                          {feature.text}
                        </List.Item>
                      ))}
                    </List>
                    <Button
                      {...CardButtonProps}
                      {...sections[i]?.CardButtonProps}
                      {...section.button.ButtonProps}
                    >
                      Contáctanos
                    </Button>
                  </Card>
                </Slide>
              ))}
            </Box>
          </Slider>
          {width < 1023 ? (
            <div
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                width: "fit-content",
                marginBottom: "4rem",
                marginTop: "-4rem",
              }}
            >
              <DotGroup
                style={{
                  width: 100,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              />
            </div>
          ) : (
            <div>
              <ButtonNext style={ControlsNextProps}>
                <Img src={next} />
              </ButtonNext>
              <ButtonBack style={ControlsBackProps}>
                <Img src={back} />
              </ButtonBack>
            </div>
          )}
        </CarouselProvider>
      </Reveal>
    </Box>
  )
}

const CardPropTypes = {
  /**
   * Main card props
   * @See @pagerland/common/src/components/Card
   */
  CardProps: PropTypes.object,
  /**
   * Props of title of the card
   * @See @pagerland/common/src/components/Typography
   */
  CardTitleProps: PropTypes.object,
  /**
   * Props of icon of the card
   * @See @pagerland/common/src/components/Img
   */
  CardIconProps: PropTypes.object,
  /**
   * Features list props
   * @See @pagerland/common/src/components/List
   */
  CardListProps: PropTypes.object,
  /**
   * Features list single item props
   * @See @pagerland/common/src/components/List
   */
  CardListItemProps: PropTypes.object,
  /**
   * Style of icon in items
   * @See @pagerland/common/src/components/Icon
   */
  CardListItemIconProps: PropTypes.object,
  /**
   * Card button props
   * @See @pagerland/common/src/components/Button
   */
  CardButtonProps: PropTypes.object,
}

Pricing.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Price table related data
   */
  prices: PropTypes.shape({
    /**
     * Sections of price list
     */
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Title of section
         */
        title: PropTypes.node,
        /**
         * Features list
         */
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
          })
        ),
        /**
         * Button below features
         */
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.object,
        }),
      })
    ),
  }),
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  CardWrapperProps: PropTypes.object,
  ControlsNextProps: PropTypes.object,
  ControlsBackProps: PropTypes.object,
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
   * Price table cards wrapper props. It's needed to use both container and wrapper because of animations
   * @See @pagerland/common/src/components/Box
   */
  ...CardPropTypes,
  /**
   * Props defined per every card
   */
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  DescriptionProps: PropTypes.object,
  SecondTextProps: PropTypes.object,
}

Pricing.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    position: "relative",
    pt: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    position: "relative",
  },
  CardWrapperProps: {
    pt: {
      _: 56,
      md: 64,
      lg: 96,
    },
    pl: {
      md: 3,
      lg: 4,
    },
    pr: {
      sm: 5,
    },
  },
  ControlsNextProps: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: "#FFFFFF",
    border: "none",
    boxShadow: "0px 10px 14px 4px rgba(34, 39, 43, 0.06)",
    top: 660,
    right: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
  },
  ControlsBackProps: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: "#FFFFFF",
    border: "none",
    boxShadow: "0px 10px 14px 4px rgba(34, 39, 43, 0.06)",
    top: 660,
    left: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
  },
  TitleProps: {
    mb: 4,
    textAlign: "center",
    variant: "h2",
    as: "h2",
    color: "#333333",
  },
  TextProps: {
    color: "gray.1",
    textAlign: "center",
    px: {
      _: 21,
      md: 40,
      lg: 200,
    },
  },
  CardProps: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    py: 64,
    px: {
      _: 10,
      sm: 32,
    },
    mx: {
      _: 3,
      sm: 24,
    },
    height: 772,
  },
  CardTitleProps: {
    textAlign: "center",
    as: "h4",
    variant: "h3",
    mb: 48,
  },
  CardIconProps: {
    display: "block",
    mx: "auto",
    mb: 40,
  },
  CardListProps: {
    mt: 32,
  },
  CardListItemProps: {
    py: 16,
    borderBottomWidth: "1px",
    borderBottomColor: "gray.5",
    borderBottomStyle: "solid",
  },
  CardListItemIconProps: {
    fontSize: 24,
    mb: "-6px",
    mr: 3,
  },
  CardListItemPrefixProps: {
    fontWeight: "bold",
    as: "span",
  },
  CardButtonProps: {
    mt: 30,
    alignSelf: "center",
    textAlign: "center",
    justifySelf: "end",
  },
  DescriptionProps: {
    fontWeight: 600,
    as: "span",
    color: "#333333",
    fontSize: 20,
    textAlign: "center",
  },
  SecondTextProps: {
    color: "#333333",
    fontSize: 20,
    textAlign: "center",
    mx: {
      sm: 3,
    },
  },
  sections: [
    {
      CardButtonProps: {
        variant: "secondary",
      },
      CardListItemIconProps: {
        color: "rgba(255, 184, 0, 0.5)",
      },
    },
    {
      CardButtonProps: {
        variant: "accent",
      },
      CardListItemIconProps: {
        color: "rgba(255, 95, 0, 0.5)",
      },
    },
    {
      CardButtonProps: {
        variant: "quaternary",
      },
      CardListItemIconProps: {
        color: "rgba(255, 66, 179, 0.5)",
      },
    },
    {
      CardButtonProps: {
        variant: "primary",
      },
      CardListItemIconProps: {
        color: "rgba(141, 0, 255, 0.5)",
      },
    },
    {
      CardButtonProps: {
        mt: {
          _: 86,
          sm: 116,
          md: 85,
          lg: 52,
        },
        variant: "quinary",
      },
      CardListItemIconProps: {
        color: "shades.accent.3",
      },
    },
  ],
  ...data.pricing,
}

export default Pricing
