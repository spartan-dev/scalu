import React from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"

import Box from "@pagerland/common/components/Box"
import Typography from "@pagerland/common/components/Typography"
import Card from "@pagerland/common/components/Card"
import Container from "@pagerland/common/components/Container"
import Icon from "@pagerland/common/components/Icon"
import Link from "@pagerland/common/components/Link"

import { Form, Formik } from "formik"
import Input from "@pagerland/common/components/Formik/Input"
import Button from "@pagerland/common/components/Button"
import data from "../../data"
import Background from "./Background"
import Squares from "./Squares"

const Contact = ({
  name,
  title,
  sections,
  socialLinks,
  mailer,
  WrapperProps,
  ContainerProps,
  DetailsWrapperProps,
  TitleProps,
  SectionItemProps,
  SectionIconProps,
  SectionTextProps,
  SocialLinkWrapperProps,
  SocialLinkProps,
  MailerCardProps,
  MailerTitleProps,
  MailerButtonProps,
}) => {
  const encode = object =>
    Object.keys(object)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
      )
      .join("&")

  const handleSubmit = (values, actions) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "contact-form", ...values }),
    })
      .then(() => {
        actions.resetForm()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error("Send contact form error =>", err)
      })
      .finally(() => actions.setSubmitting(false))
  }

  return (
    <Box name={name} {...WrapperProps}>
      <Background />
      <Container {...ContainerProps}>
        <Box {...DetailsWrapperProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            {sections.map((section, key) => (
              <Box key={key} {...SectionItemProps}>
                <Icon
                  color={["primary", "primary", "primary"][key % 3]}
                  icon={section.icon}
                  {...SectionIconProps}
                />
                <Typography {...SectionTextProps}>{section.text}</Typography>
              </Box>
            ))}
            <Box {...SocialLinkWrapperProps}>
              {socialLinks?.map((socialLink, key) => (
                <Fade
                  left
                  duration={600}
                  key={socialLink.title}
                  distance="10px"
                  delay={100 * key}
                >
                  <Link
                    as="a"
                    href={socialLink.href}
                    title={socialLink.title}
                    {...SocialLinkProps}
                  >
                    <Icon icon={socialLink.icon} />
                  </Link>
                </Fade>
              ))}
            </Box>
          </Fade>
        </Box>
        <Card {...MailerCardProps}>
          <Squares />
          <Typography {...MailerTitleProps}>{mailer.title}</Typography>
          <Formik
            validationSchema={mailer.validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
            initialValues={mailer.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {}
            )}
          >
            {/* eslint-disable-next-line react/jsx-boolean-value */}
            <Form name="contact-form" data-netlify={true}>
              <Fade cascade bottom duration={600}>
                <div>
                  {mailer.fields.map((row, index) => (
                    <div key={index} style={{ display: "flex", marginTop: 16 }}>
                      {row.map((field, idx) => (
                        <Input key={idx} styles={field.styles} {...field} />
                      ))}
                    </div>
                  ))}
                </div>
                <Box display="flex" justifyContent="flex-start">
                  <Button type="submit" {...MailerButtonProps}>
                    {mailer.cta}
                  </Button>
                </Box>
              </Fade>
            </Form>
          </Formik>
        </Card>
      </Container>
    </Box>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  DetailsWrapperProps: PropTypes.object,
  TitleProps: PropTypes.object,
  SectionItemProps: PropTypes.object,
  SectionIconProps: PropTypes.object,
  SectionTextProps: PropTypes.object,
  SocialLinkWrapperProps: PropTypes.object,
  SocialLinkProps: PropTypes.object,
  MailerCardProps: PropTypes.object,
  MailerTitleProps: PropTypes.object,
  MailerButtonProps: PropTypes.object,
  InputProps: PropTypes.object,
  FirstTitleProps: PropTypes.object,
  title: PropTypes.node,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      text: PropTypes.node,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  mailer: PropTypes.shape({
    title: PropTypes.node,
    cta: PropTypes.node,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    fields: PropTypes.array,
  }),
}

Contact.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    position: "relative",
    pt: {
      _: 78,
      lg: 234,
    },
    pb: {
      _: 56,
      md: 64,
      lg: 120,
    },
  },
  ContainerProps: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      _: "center",
      lg: "flex-start",
    },
    flexDirection: {
      _: "column",
      lg: "row",
    },
  },
  DetailsWrapperProps: {
    textAlign: {
      _: "center",
      lg: "left",
    },
    mt: {
      _: 0,
      lg: 5,
    },
    mb: {
      _: 4,
      md: 96,
      lg: 0,
    },
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    color: "gray.8",
    mb: {
      _: 4,
      lg: 5,
    },
  },
  SectionItemProps: {
    mb: 3,
    flexBox: true,
    justifyContent: {
      _: "center",
      lg: "flex-start",
    },
  },
  SectionIconProps: {
    fontSize: 24,
    mr: 2,
  },
  SectionTextProps: {
    color: "gray.1",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: "normal",
  },
  SocialLinkWrapperProps: {
    flexBox: true,
    mt: {
      _: 4,
      lg: 5,
    },
    justifyContent: {
      _: "center",
      lg: "flex-start",
    },
  },
  SocialLinkProps: {
    color: "gray.4",
    mr: 3,
    fontSize: 48,
    lineHeight: 1,
  },
  MailerCardProps: {
    width: "100%",
    maxWidth: 552,
    p: {
      _: 24,
      md: 5,
    },
    position: "relative",
  },
  MailerTitleProps: {
    as: "h3",
    variant: "h2",
    color: "gray.8",
    mb: 4,
  },
  MailerButtonProps: {
    mt: 4,
    variant: "primary",
    fontSize: 16,
    lineHeight: "18.75px",
    fontWeight: 600,
  },
  ...data.contact,
}

export default Contact
