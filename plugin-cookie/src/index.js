const path = require('path');

module.exports = function (context) {
    const {siteConfig} = context;
    const {themeConfig} = siteConfig;
    const isProd = process.env.NODE_ENV === 'production';

    return {
        name: 'docusaurus-plugin-cookie',

        getClientModules() {
            return [];
        },

        injectHtmlTags() {
            if (!isProd) {
                return {};
            }
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'text/javascript',
                            src: 'oneTrust_production/consent/9e8724a7-ade0-4c4f-9b68-a96e71e6e9d8/OtAutoBlock.js',
                            charSet: 'UTF-8',
                        },
                    },
                    {
                        tagName: 'script',
                        innerHTML: 'function OptanonWrapper() {}',
                    },
                ],
            };
        },
    };
};
