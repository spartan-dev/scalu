require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Scalu Technologies | Scale outside the box",
    description:
      "En Scalu Technologies damos soluciones ágiles para escalar tu negocio físico a dígital. .Te acampañamos durante cada etapa de la transformación para crecer por medio del comercio electrónico de alto impacto.",
    keywords:
      "negocio, digital, página web, comercio electrónico, ecommerce, desarrollo, branding, diseño, marketing, web",
  },
  pathPrefix: process.env.GATSBY_APP_DIR || "",
  plugins: [
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: `#189AB4`,
        theme_color: `#189AB4`,
        display: "minimal-ui",
        icon: "src/images/icon.jpg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
      },
    },
    "gatsby-plugin-offline",
  ],
}
