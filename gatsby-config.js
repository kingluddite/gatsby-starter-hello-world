/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Learn Gatsby',
    description: 'bla bla bla description',
    author: '@johndoe',
    data: ['item 1', 'item 2'],
    person: { name: 'jane', age: 100 },
  },
  plugins: [
    'gatsby-plugin-eslint',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `833fz2zdr4ma`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: `Dp8TngGeJXm1ElHMAtx1y1jL7vJjSOs7cUc6PRYddVA`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
