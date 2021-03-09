const path = require('path');
module.exports = {
  title: 'Plugily Projects Wiki',
  tagline: 'The fastest way to find solutions',
  url: 'https://Plugily-Projects.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Plugily-Projects', // Usually your GitHub org/user name.
  projectName: 'plugily-projects.github.io', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: 'Plugily Projects',
      logo: {
        alt: 'Plugily Projects Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'VillageDefense',
              to: '/villagedefense/',
            },
            {
              label: 'BuildBattle',
              to: '/buildbattle/',
            },
            {
              label: 'MurderMystery',
              to: '/murdermystery/',
            },
            {
              label: 'TheBridge',
              to: '/thebridge/',
            },
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
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
        },
        {
          to: 'plugily/feedback/',
          label: 'Feedback(y)',
          position: 'left',
        },
        {
          href: 'https://patreon.com/plugily',
          label: 'Patreon',
          position: 'right',
        },
        {
          href: 'https://donate.plugily.xyz',
          label: 'Donate',
          position: 'right',
        },
        {
          href: 'https://github.com/Plugily-Projects',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Discord',
          href: 'https://discord.plugily.xyz',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Feedbacky',
              href: 'plugily/feedback',
            },
            {
              label: 'Discord',
              href: 'https://discord.plugily.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Plugily-Projects',
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
              label: 'Retronode.net',
              href: 'https://retronode.net',
            },
              {
              //Renders the html pass-through instead of a simple link
              html: `
                <a href="https://retronode.net" target="_blank" rel="noreferrer noopener">
                  <img src="https://retronode.net/img/new_banner.gif"/>
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plugily Projects. All rights reserved.`,
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    announcementBar: {
      id: 'check_spigotmc', // Any value that will identify this message.
      content:
          '<a target="_blank" rel="noopener noreferrer" href="https://www.spigotmc.org/resources/authors/tigerkatze.414545/">View our resources on SpigotMC (click)</a>',
      backgroundColor: '#cebb9a', // Defaults to `#fff`.
      textColor: '#666666', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
