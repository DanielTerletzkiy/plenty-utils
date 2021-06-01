const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: 'hourly',
  },
  {
    path: '/Categories/Math/',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: 'hourly',
  },
];

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://plenty-utils.herokuapp.com',
        paths,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'hourly',
          priority: 0.8,
        },
      }),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
