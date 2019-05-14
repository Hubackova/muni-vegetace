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
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/markdowns`,
      name: "markdown-pages",
    },
  },
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
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        "gatsby-remark-copy-linked-files",
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_self",
            rel: "nofollow"
          }
        }
      ],
    },
  },
  ],
  pathPrefix: "/raseliniste"
}