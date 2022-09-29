module.exports = {
  siteMetadata: {
    title: `More solar Projects Ltd`,
    description: `More Solar Projects Ltd, MSPL was founded in 2021 to provide bespoke Occupational Health, Safety, Industrial Security, Environmental, Quality Assurance and Quality Control and Sustainable Community Development, SCD consultancy services to the oil and gas industry, as well as explore ventures within the UN SDG #7 value chain quis.`,
    author: `More Solar Projects Ltd`,
    siteUrl: `https://moresolarprojects.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
