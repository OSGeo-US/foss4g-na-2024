module.exports = {
  pathPrefix: "/foss4g-na-2024",
  siteMetadata: {
    title: `FOSS4G NA St. Louis 2024`,
    description: `An Open Source Geospatial Technology Conference`,
    author: `@guidos`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/square_logo_foss4gna_stl_2024.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
