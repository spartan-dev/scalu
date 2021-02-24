import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Sticky from "react-sticky-el"

import { Helmet } from "react-helmet"

import Theme, { theme } from "@pagerland/themes/src/Startup"
import {
  Modal,
  Navbar,
  Copyright,
  Welcome,
  Services,
  Experts,
  Team,
  Pricing,
  Contact,
  Out,
} from "@pagerland/themes/src/Startup/containers"

import preview from "@pagerland/themes/src/Startup/assets/preview.jpg"

import SEO from "../components/SEO"
import "../styles/global.css"

const Startup = ({ url }) => {
  const [showModal, setShowModal] = useState(false)
  const [body, setBody] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0])
  }, [])

  useEffect(() => {
    if (body !== null) {
      body.style.overflow = showModal ? "hidden" : "auto"
    }
  }, [body, showModal])

  return (
    <Theme>
      <Helmet>
        <link href={theme.typography.roboto.googleFont} rel="stylesheet" />
        <meta name="theme-color" content={theme.colors.primary} />
        <meta property="og:image" content={`${url}${preview}`} />
      </Helmet>
      <SEO />

      <Sticky style={{ zIndex: 999 }}>
        <Navbar />
      </Sticky>
      {showModal && (
        <Modal
          onClick={() => {
            setShowModal(false)
          }}
        />
      )}
      <Welcome name="" />
      <Services name="services" />
      <Pricing name="pricing" />
      <Experts name="experts" onClick={() => setShowModal(true)} />
      <Team name="team" />
      <Out name="out" />
      <Contact name="contact" />
      <Copyright />
    </Theme>
  )
}

Startup.propTypes = {
  url: PropTypes.string,
}

Startup.defaultProps = {
  url: "https://pager.land/gatsby/",
}

export default Startup
