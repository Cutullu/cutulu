/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `Cutulu`,
    defaultTitle: `Cutulu | Terror RPG`,
    siteTitleShort: `Menu Cutulu`,
    siteDescription: `Cutulu é um site de informações estatics sobre o RPG de terror gerenciado pelo mineiro`,
    siteUrl: `https://cutulu.netlify.app`,
    siteAuthor: `@danilex`,
    siteImage: ``,
    siteLanguage: `pt`,
    basePath: `/guides`,
    themeColor: `#2C5E3E`,
    footer: ``
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        docsPath: `src/docs`,
        githubUrl: `https://github.com/@Craton/home`,
        baseDir: `guides/`,
        basePath: "/guides"
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typescript",
      options: {}
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages")
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"]
        }
      }
    },
    "gatsby-plugin-favicon"
  ]
};
