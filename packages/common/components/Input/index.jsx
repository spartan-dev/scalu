import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { Collapse } from "react-collapse"

import {
  ErrorMessage,
  InputWrapper,
  Label,
  StyledInput,
  StyledTextarea,
  Wrapper,
} from "./styled.components"

const Input = ({
  label,
  name,
  multiline,
  error,
  success,
  touched,
  type,
  onFocus,
  onBlur,
  suffix,
  prefix,
  WrapperProps,
  InputWrapperProps,
  LabelProps,
  ErrorMessageProps,
  styles,
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const InputComponent = multiline ? StyledTextarea : StyledInput

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event)
    }

    setFocused(true)
  }

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event)
    }

    setFocused(false)
  }

  return (
    <Wrapper
      style={{ width: "100%", marginTop: 0, ...styles }}
      className={classNames({
        focused,
        error: !!error,
        success: success || (!error && touched),
        [type]: !!type,
      })}
      {...WrapperProps}
    >
      {label && (
        <Label htmlFor={name} {...LabelProps}>
          {label}
        </Label>
      )}
      <InputWrapper {...InputWrapperProps}>
        {prefix}
        <InputComponent
          name={name}
          id={name}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {suffix}
      </InputWrapper>

      <Collapse isOpened={!!error}>
        <ErrorMessage {...ErrorMessageProps}>{error}</ErrorMessage>
      </Collapse>
    </Wrapper>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.node,
  error: PropTypes.node,
  success: PropTypes.bool,
  multiline: PropTypes.bool,
  touched: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  WrapperProps: PropTypes.object,
  InputWrapperProps: PropTypes.object,
  LabelProps: PropTypes.object,
  ErrorMessageProps: PropTypes.object,
  styles: PropTypes.object,
}

export default Input
