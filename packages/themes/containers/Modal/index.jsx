import React from "react"
import PropTypes from "prop-types"
import { Form, Formik } from "formik"

import Box from "@pagerland/common/components/Box"
import Typography from "@pagerland/common/components/Typography"
import Input from "@pagerland/common/components/Formik/Input"
import Button from "@pagerland/common/components/Button"

import Close from "@pagerland/icons/Close"

import { ModalWrapper, ModalBox } from "./styled.components"

import data from "../../data"

const Modal = ({
  onClick,
  modalMailer,
  CloseButtonProps,
  MailerButtonProps,
  MailerTitleProps,
  TextProps,
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
      body: encode({ "form-name": "modal-form", ...values }),
    })
      .then(() => {
        actions.resetForm()
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error("Send modal form error =>", err)
      })
      .finally(() => actions.setSubmitting(false))
  }
  return (
    <ModalWrapper>
      <ModalBox>
        <div>
          <Box display="flex" justifyContent="flex-end">
            <Button {...CloseButtonProps} onClick={() => onClick()}>
              <Close />
            </Button>
          </Box>
          <Typography {...MailerTitleProps}>{modalMailer.title}</Typography>
          <Typography {...TextProps}>{modalMailer.description}</Typography>
          <Formik
            validationSchema={modalMailer.validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
            initialValues={modalMailer.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {}
            )}
          >
            {/* eslint-disable-next-line react/jsx-boolean-value */}
            <Form name="modal-form" data-netlify={true}>
              <div>
                {modalMailer.fields.map(field => (
                  <Input key={field.name} {...field} />
                ))}
              </div>
              <Box display="flex" justifyContent="flex-start">
                <Button type="submit" {...MailerButtonProps}>
                  {modalMailer.cta}
                </Button>
              </Box>
            </Form>
          </Formik>
          {/*  */}
        </div>
      </ModalBox>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func,
  modalMailer: PropTypes.shape({
    title: PropTypes.node,
    description: PropTypes.node,
    cta: PropTypes.node,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        initialValue: PropTypes.string,
      })
    ),
  }),
  CloseButtonProps: PropTypes.object,
  MailerButtonProps: PropTypes.object,
  MailerTitleProps: PropTypes.object,
  TextProps: PropTypes.object,
}

Modal.defaultProps = {
  CloseButtonProps: {
    padding: 0,
    backgroundColor: "white",
  },
  MailerButtonProps: {
    mt: 4,
    variant: "primary",
    fontSize: 16,
    lineHeight: "18.75px",
    fontWeight: 600,
  },
  MailerTitleProps: {
    as: "h3",
    variant: "h2",
    // color: "gray.7",
    mt: 4,
    mb: 3,
  },
  TextProps: {
    color: "gray.8",
    mb: 4,
    variant: "body1",
    fontWeight: 300,
  },
  modalMailer: data.modalMailer,
}

export default Modal
