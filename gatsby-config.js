/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: require.resolve(`./source-plugin`),
      options: {
        repo: "novelrt/NovelRT",
      },
    },
  ],
}
