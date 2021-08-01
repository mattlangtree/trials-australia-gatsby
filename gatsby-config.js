require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.trials.com.au",
    title: "Trials Australia",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-source-craft`
  ],
};
