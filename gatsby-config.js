const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Vegetace - MUNI`,
    description:
    ``,
    url: "https://botzool-mirecol.netlify.com", // No trailing slash allowed!
    image: "/mainLogo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/static/images/`,
      name: `images`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/content/`,
      name: `content`
    }
  },
  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     path: `${__dirname}/src/content/projects/`,
  //     name: `projects`
  //   }
  // },
  "gatsby-transformer-javascript-frontmatter",
  "gatsby-transformer-remark",
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  ],
  pathPrefix: "/raseliniste"
}