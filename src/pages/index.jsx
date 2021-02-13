import React from "react"
import PropTypes from "prop-types"
import Sticky from "react-sticky-el"

import { Helmet } from "react-helmet"

import "pure-react-carousel/dist/react-carousel.es.css"
import "../styles/global.css"

import Theme, { theme } from "@pagerland/themes/src/Startup"
import {
  Navbar,
  Copyright,
  Welcome,
  Services,
  About,
  Team,
  Pricing,
  Contact,
} from "@pagerland/themes/src/Startup/containers"

import preview from "@pagerland/themes/src/Startup/assets/preview.jpg"

import SEO from "../components/SEO"

const Startup = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.gillroy.googleFont} rel="stylesheet" />
      <link href={theme.typography.roboto.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO />

    <Sticky style={{ zIndex: 999, position: "relative" }}>
      <Navbar />
    </Sticky>

    <Welcome name="" />
    <Services name="services" />
    <Pricing name="pricing" />
    <Team name="team" />
    <About name="about" />
    <Contact name="contact" />

    <Copyright />
  </Theme>
)

Startup.propTypes = {
  url: PropTypes.string,
}

Startup.defaultProps = {
  url: "https://pager.land/gatsby/",
}

export default Startup
