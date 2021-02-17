/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"
import Slider from "react-slick"

import Box from "@pagerland/common/src/components/Box"
import Button from "@pagerland/common/src/components/Button"
import Card from "@pagerland/common/src/components/Card"
import Icon from "@pagerland/common/src/components/Icon"
import Img from "@pagerland/common/src/components/Img"
import List from "@pagerland/common/src/components/List"
import Typography from "@pagerland/common/src/components/Typography"

import Plus from "@pagerland/icons/src/monochrome/Plus"

import data from "../../data"

const Pricing = ({
  WrapperProps,
  ContainerProps,
  TitleProps,
  TextProps,
  CardProps,
  CardIconProps,
  CardListItemProps,
  CardListItemIconProps,
  CardListItemPrefixProps,
  CardButtonProps,
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

  const slides = width > 2000 ? 4 : width > 1024 ? 3 : width > 768 ? 1 : 1
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
  }

  return (
    <Box {...WrapperProps} name={name}>
      <Box {...ContainerProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
        <Reveal effect="cards" duration={600}>
          <Box className="slider-wrapper">
            <Slider {...settings}>
              {prices?.sections?.map((section, i) => (
                <Card id="slider" {...CardProps}>
                  <Typography {...TitleProps}>{section.title}</Typography>
                  <Img src={section.icon} {...CardIconProps} />
                  <Typography {...SecondTextProps}>{section.text}</Typography>
                  {section.features && section.features.length && (
                    <List>
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
              ))}
            </Slider>
          </Box>
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
    p: {
      _: 0,
      lg: 70,
    },
  },

  TitleProps: {
    mb: 21,
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
    px: 32,
    mb: 68,
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

  CardListItemProps: {
    py: 16,
    mb: 20,
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
    mb: 36,
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
  ...data.pricing,
}

export default Pricing
