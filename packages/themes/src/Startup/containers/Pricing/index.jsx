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
  DotSlideProps,
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
      ? 350
      : width > 768
      ? 325
      : width > 640
      ? 220
      : width > 425
      ? 275
      : 450

  return (
    <Box {...WrapperProps} name={name}>
      <Box {...ContainerProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>

        <Reveal effect="cards" duration={600}>
          <CarouselProvider
            naturalSlideWidth={170}
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
                  <Slide id="silder" key={i}>
                    <Card {...CardProps}>
                      <Typography {...TitleProps}>{section.title}</Typography>
                      <Img src={section.icon} {...CardIconProps} />
                      <Typography {...SecondTextProps}>
                        {section.text}
                      </Typography>
                      {section.features && section.features.length && (
                        <List {...CardListProps}>
                          {section.features?.map((feature, key) => (
                            <List.Item key={key} {...CardListItemProps}>
                              <Icon
                                icon={Plus}
                                {...CardListItemIconProps}
                                {...sections[i]?.CardListItemIconProps}
                              />
                              <Typography {...CardListItemPrefixProps}>
                                {feature.text}
                              </Typography>
                            </List.Item>
                          ))}
                        </List>
                      )}
                      <Box
                        {...CardButtonProps}
                        {...sections[i]?.CardButtonProps}
                        {...section.button.ButtonProps}
                      >
                        {section.button.ButtonProps.map(
                          ({ label, ...props }, key) => (
                            <Button {...props} key={key}>
                              {label}
                            </Button>
                          )
                        )}
                      </Box>
                    </Card>
                  </Slide>
                ))}
              </Box>
            </Slider>
            {width < 1023 ? (
              <Box {...DotSlideProps}>
                <DotGroup
                  style={{
                    width: 100,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                />
              </Box>
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
  DotSlideProps: PropTypes.object,
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
    p: {
      _: "0 16px",
      sm: "0 16px",
      md: "0 40px",
      lg: 0,
    },
    width: "100%",
  },
  CardWrapperProps: {
    marginTop: 98,
    display: "flex",
    flexDirection: "row",
  },
  ControlsNextProps: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: "#FFFFFF",
    border: "none",
    boxShadow: "0px 10px 14px 4px rgba(34, 39, 43, 0.06)",
    top: 564,
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
    top: 564,
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
    alignItems: "center",
    borderRadius: "8px",

    pt: 62,
    pb: 68,
    px: {
      _: 24,
      sm: 24,
      lg: 32,
    },
    mx: {
      _: 8,
      sm: 8,
      md: 20,
      lg: 30,
    },
    height: {
      _: 776,
      md: 776,
      lg: 728,
    },
    width: {
      lg: 359,
    },
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  CardListItemIconProps: {
    mr: "12px",
    width: 21,
    height: 21,
  },
  CardListItemPrefixProps: {
    display: "flex",
    flexDirection: "row",
    variant: "button2",
  },
  CardButtonProps: {
    mt: 30,
    alignSelf: "center",
    textAlign: "center",
    justifySelf: "end",
  },
  DescriptionProps: {
    fontWeight: 600,
    color: "#333333",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "23px",
  },
  SecondTextProps: {
    color: "#333333",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "23px",
  },
  sections: [
    {
      CardListItemIconProps: {
        color: "rgba(255, 184, 0, 0.5)",
      },
    },
    {
      CardListItemIconProps: {
        color: "rgba(255, 95, 0, 0.5)",
      },
    },
    {
      CardListItemIconProps: {
        color: "rgba(255, 66, 179, 0.5)",
      },
    },
    {
      CardListItemIconProps: {
        color: "rgba(141, 0, 255, 0.5)",
      },
    },
    {
      CardListItemIconProps: {
        color: "shades.accent.3",
      },
    },
  ],
  DotSlideProps: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
    marginBottom: "4rem",
    marginTop: "-4rem",
    top: {
      _: -130,
      sm: -130,
      md: -110,
    },
    left: {
      _: 0,
      md: 15,
    },
  },
  ...data.pricing,
}

export default Pricing
