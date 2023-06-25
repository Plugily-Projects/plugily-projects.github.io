/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  minigames: [
    {
      type: 'category',
      label: 'Minigames',
      items: [
        'minigame/overview',
        {
        /*  Setup: [
            {
              type: 'link',
              label: 'Tutorial video', // The label that should be displayed (string).
              href: 'https://tutorial.plugily.xyz/' // The target URL (string).
            },
            'villagedefense/setup/simple',
            'villagedefense/setup/cmdsandperms',
            'villagedefense/setup/maps',
          ],
          Placeholders: [
            'villagedefense/placeholders/placeholderapi',
            'villagedefense/placeholders/scoreboard',
          ],
          Development: [
            'villagedefense/development/api',
            {
              type: 'link',
              label: 'JavaDocs', // The label that should be displayed (string).
              href: 'https://jd.plugily.xyz/apidocs/minecraft/villagedefense/' // The target URL (string).
            },
            {
              type: 'link',
              label: 'Maven', // The label that should be displayed (string).
              href: 'https://maven.plugily.xyz/plugily/projects/villagedefense/' // The target URL (string).
            },
          ],
          Support: [
            {
              type: 'link',
              label: 'Discord support', // The label that should be displayed (string).
              href: 'https://discord.plugily.xyz/' // The target URL (string).
            },
            'villagedefense/support/files',
            'villagedefense/support/faq.mdx',
            'villagedefense/support/servertips',
          ],
          Addon: [
            'villagedefense/addon/overview',
            'villagedefense/addon/cmdsandperms',
            'villagedefense/addon/files',
            'villagedefense/addon/faq.mdx',
          ],*/
        }
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
