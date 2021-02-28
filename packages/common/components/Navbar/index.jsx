import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { useIsomorphicLayoutEffect } from "react-use"

const Navbar = ({ children, rwdMenu }) => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false)
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  const handleToggle = () => setMobileIsOpen(s => !s)
  const handleClose = () => setMobileIsOpen(false)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ref.current = document.querySelector("#portal")
    setMounted(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (typeof document !== "undefined") {
      if (mobileIsOpen) {
        // eslint-disable-next-line no-undef
        document.querySelector("body").style.overflow = "hidden"
      } else {
        // eslint-disable-next-line no-undef
        document.querySelector("body").style.overflow = ""
      }
    }
  }, [mobileIsOpen])

  return (
    <>
      {children({
        isOpen: mobileIsOpen,
        onToggle: handleToggle,
        onClose: handleClose,
      })}
      {mounted &&
        ref.current &&
        ReactDOM.createPortal(
          rwdMenu({
            isOpen: mobileIsOpen,
            onToggle: handleToggle,
            onClose: handleClose,
          }),
          ref.current
        )}
    </>
  )
}

Navbar.propTypes = {
  children: PropTypes.func.isRequired,
  rwdMenu: PropTypes.func.isRequired,
}

export default Navbar
