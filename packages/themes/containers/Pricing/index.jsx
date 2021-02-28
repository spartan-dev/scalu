/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"
import Slider from "react-slick"

import Box from "@pagerland/common/components/Box"
import Button from "@pagerland/common/components/Button"
import Card from "@pagerland/common/components/Card"
import Icon from "@pagerland/common/components/Icon"
import List from "@pagerland/common/components/List"
import Typography from "@pagerland/common/components/Typography"

import Plus from "@pagerland/icons/Plus"
import Scalu from "@pagerland/icons/Scalu"

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

        <Box className="slider-wrapper">
          <Slider {...settings}>
            {prices?.sections?.map((section, i) => (
              <Fade key={i} bottom cascade duration={600} delay={i * 100}>
                <Card id="slider" {...CardProps}>
                  <div>
                    <Typography {...TitleProps}>{section.title}</Typography>
                    <div style={CardIconProps}>
                      <Scalu fill={section.icon} />
                    </div>
                    <Typography {...SecondTextProps}>{section.text}</Typography>
                    {section.features && section.features.length && (
                      <List width="100%">
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
                  </div>
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
              </Fade>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

const CardPropTypes = {
  CardProps: PropTypes.object,
  CardTitleProps: PropTypes.object,
  CardIconProps: PropTypes.object,
  CardListItemProps: PropTypes.object,
  CardListItemIconProps: PropTypes.object,
  CardButtonProps: PropTypes.object,
}

Pricing.propTypes = {
  name: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        features: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.node,
          })
        ),
        button: PropTypes.shape({
          text: PropTypes.node,
          ButtonProps: PropTypes.array,
        }),
      })
    ),
  }),
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  TitleProps: PropTypes.object,
  TextProps: PropTypes.object,
  ...CardPropTypes,
  sections: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  title: PropTypes.node,
  text: PropTypes.node,
  DescriptionProps: PropTypes.object,
  SecondTextProps: PropTypes.object,
}

Pricing.defaultProps = {
  WrapperProps: {
    pb: 96,
    overflow: "hidden",
    position: "relative",
  },
  ContainerProps: {
    p: {
      _: 0,
      lg: 96,
    },
  },

  TitleProps: {
    mb: 21,
    textAlign: "center",
    variant: "h2",
    as: "h2",
    color: "gray.8",
  },
  TextProps: {
    color: "gray.1",
    textAlign: "center",
    mb: {
      _: 96,
      lg: 0,
    },
    px: {
      _: 21,
      md: 16,
      lg: 200,
    },
  },
  CardProps: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    width: "360px",
    pt: 48,
    pb: {
      _: 80,
      lg: 56,
    },
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
    display: "flex",
    justifyContent: "center",
    marginBottom: 40,
  },

  CardListItemProps: {
    py: 16,
    borderBottomWidth: "1px",
    borderBottomColor: "gray.5",
    borderBottomStyle: "solid",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "gray.1",
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
    mb: {
      _: 30,
      lg: 0,
    },
    alignSelf: "center",
    textAlign: "center",
    justifySelf: "end",
  },
  DescriptionProps: {
    fontWeight: 600,
    color: "gray.8",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "24.5px",
  },
  SecondTextProps: {
    color: "gray.8",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "24.5px",
    mb: 36,
    fontWeight: 600,
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
