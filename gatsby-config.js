module.exports = {
  siteMetadata: {
    siteTitle: `Documentation de Tenoco`,
    defaultTitle: `Documentation de Tenoco`,
    siteTitleShort: `Tenoco Docs`,
    siteDescription: `Documentation pour la plateforme Tenoco.net`,
    siteUrl: `https://docs.tenoco.net`,
    siteAuthor: ``,
    siteImage: `/banner.png`,
    siteLanguage: `fr`,
    themeColor: `#ff6b6b`,
    basePath: `/`,
    footer: `Les Connecteurs`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Documentation de Tenoco`,
        short_name: `Tenoco Docs`,
        start_url: `/`,
        background_color: `#ff6b6b`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "6",
        matomoUrl: "https://analytics.connecteu.rs",
        siteUrl: "https://docs.tenoco.net",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.tenoco.net`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
