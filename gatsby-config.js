module.exports = {
  siteMetadata: {
    title: "GraphQL Asia",
    author: {
      name: "Tamas Piros",
      bio:
        "Tamas is a Google Developer Expert in Web Technologies and a seasoned Developer Evangelist. He is a passionate advocate for modern web technologies, helping people understand and unlock the latest & greatest features of web development.",
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
}
