module.exports = {
  siteMetadata: {
    title: `Andrew Carr – Designer/Developer and All-around friendly giant`,
    description: `I design, prototype, create, test and deliver digital products for a wide range of clients. Using my strong UI and UX skills I collaborate closely with developers to build engaging products. I am naturally curious, love tackling hard problems and am always looking for opportunities to learn and develop skills in all areas of product development.`,
    author: `@2metres`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
