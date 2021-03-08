const path = require('path');

module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-arc',

    getClientModules() {
      return [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          // <script async src="https://arc.io/widget.min.js#aT17bFmc"></script>
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: 'https://arc.io/widget.min.js#aT17bFmc',
            },
          },
        ],
      };
    },
  };
};
