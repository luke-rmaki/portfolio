module.exports = {
  siteMetadata: {
    title: `Rmaki Portfolio`,
    description: `Portfolio of Luke Ruokaismaki`,
    author: `Luke Ruokaismaki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
