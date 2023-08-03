// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plugily Projects Wiki',
  tagline: 'The fastest way to find solutions',
  favicon: 'img/plugily/favicon.ico',
  // Set the production url of your site here
  url: 'https://Plugily-Projects.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Plugily-Projects', // Usually your GitHub org/user name.
  projectName: 'plugily-projects.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarCollapsible: true,
          routeBasePath: "/",
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/',
        },
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Plugily Projects`,
          },
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'C7BTFJ8WFY',
        apiKey: 'e4e4f7bcc3b95cf07c6f34fdff150fb4',
        indexName: 'plugily',

        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Algolia search parameters
        //inputSelector: '### REPLACE ME ####',
        //debug: false,
        //searchParameters: {
        //  'facetFilters': ["type:content"]
        //},
        //... other Algolia params
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      navbar: {
        hideOnScroll: true,
        title: 'Plugily Projects',
        logo: {
          alt: 'Plugily Projects Logo',
          src: 'img/plugily/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'minigames',
            position: 'left',
            label: 'Minigame Plugins',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'plugily/translate/',
            label: 'Translate',
            position: 'left',
          },
          {
            to: 'plugily/beta/',
            label: 'Beta',
            position: 'left',
          },
          {
            to: 'plugily/tutorial/',
            label: 'Tutorial',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'tutorials',
          },
          {
            to: 'plugily/feedback/',
            label: 'Feedback(y)',
            position: 'left',
          },
          {
            to: 'https://patreon.com/plugily',
            label: 'Patreon',
            position: 'right',
          },
          {
            to: 'https://donate.plugily.xyz',
            label: 'Donate',
            position: 'right',
          },
          {
            to: 'https://github.com/Plugily-Projects',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Discord',
            to: 'https://discord.plugily.xyz',
            position: 'right',
          },
        ],
      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Minigame Plugins',
                to: '/minigame/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: `
               <a href="https://discord.plugily.xyz" target="_blank" rel="noreferrer noopener">
                  <img src="https://discordapp.com/api/guilds/345628548716822530/widget.png?style=banner3"/>
               </a>
               `
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Cookies',
                to: 'plugily/english/cookies',
              },
              {
                label: 'Disclaimer',
                to: 'plugily/english/disclaimer',
              },
              {
                label: 'Privacy',
                to: 'plugily/english/privacy',
              },
              {
                label: 'Terms',
                to: 'plugily/english/terms',
              },
              {
                label: 'Datenschutz (German)',
                to: 'plugily/german/datenschutz',
              },
              {
                label: 'Impressum (German)',
                to: 'plugily/german/impressum',
              },
              {
                html: `
                <!-- CookiePro Cookies Settings button start -->
                <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button>
                <!-- CookiePro Cookies Settings button end -->
              `,
              },
            ],
          },
          {
            title: 'Partner',
            items: [
              {
                label: 'Feedbacky.net',
                href: 'https://feedbacky.net/',
              },
              {
                //Renders the html pass-through instead of a simple link
                html: `
              `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plugily Projects. All rights reserved.`,
      },

      announcementBar: {
        id: 'check_spigotmc', // Any value that will identify this message.
        content:
            '<a target="_blank" rel="noopener noreferrer" href="https://www.spigotmc.org/resources/authors/tigerkatze.414545/">View our resources on SpigotMC (click)</a>',
        backgroundColor: '#cebb9a', // Defaults to `#fff`.
        textColor: '#666666', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
