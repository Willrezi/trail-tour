/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Trail Tour",
    author: "Wilfried Lloza",
    description: "Des sentiers à découvrir",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Oswald",
            variants: ["400", "700"],
            // subsets: [`latin`],
          },
          {
            family: "Open Sans",
            variants: ["400", "700"],
          },
          {
            family: "Catamaran",
            variants: ["300", "400", "700"],
          },
        ],
      },
    },
  ],
}
