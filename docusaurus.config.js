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
          href: 'https://translate.plugily.xyz',
          label: 'Translate',
          position: 'left',
        },
        {
          href: 'https://beta.plugily.xyz',
          label: 'Beta',
          position: 'left',
        },
        {
          to: '/feedback/',
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
              href: 'https://feedbacky.net',
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
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
      copyright: `Copyright © ${new Date().getFullYear()} Plugily Projects`,
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
