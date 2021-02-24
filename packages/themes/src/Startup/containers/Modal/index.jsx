import React from "react"
import PropTypes from "prop-types"
import { Form, Formik } from "formik"

import Box from "@pagerland/common/src/components/Box"
import Typography from "@pagerland/common/src/components/Typography"
import Input from "@pagerland/common/src/components/Formik/Input"
import Button from "@pagerland/common/src/components/Button"

import Close from "@pagerland/icons/src/monochrome/Close"

import { ModalWrapper, ModalBox } from "./styled.components"

import data from "../../data"

const Modal = ({
  onClick,
  modalMailer,
  CloseButtonProps,
  MailerButtonProps,
  MailerTitleProps,
  TextProps,
}) => (
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
          onSubmit={modalMailer.onSubmit}
          initialValues={modalMailer.fields.reduce(
            (acc, field) => ({
              ...acc,
              [field.name]: field.initialValue,
            }),
            {}
          )}
        >
          <Form>
            <div>
              {modalMailer.fields.map(field => (
                <Input key={field.name} {...field} />
              ))}
            </div>
            <Box display="flex" justifyContent="flex-start">
              <Button {...MailerButtonProps}>{modalMailer.cta}</Button>
            </Box>
          </Form>
        </Formik>
        {/*  */}
      </div>
    </ModalBox>
  </ModalWrapper>
)

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
