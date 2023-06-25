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
                'minigame/placeholders',
                {
                    Setup: [
                        {
                            type: 'link',
                            label: 'Tutorial video', // The label that should be displayed (string).
                            href: 'https://tutorial.plugily.xyz/' // The target URL (string).
                        },
                        'minigame/setup/simple-setup',
                        'minigame/setup/cmdsandperms',
                        'minigame/setup/maps',
                    ],
                    Development: [
                        'minigame/development/api',
                        {
                            type: 'link',
                            label: 'JavaDocs', // The label that should be displayed (string).
                            href: 'https://maven.plugily.xyz/' // The target URL (string).
                        },
                        {
                            type: 'link',
                            label: 'Maven', // The label that should be displayed (string).
                            href: 'https://maven.plugily.xyz/plugily/projects/' // The target URL (string).
                        },
                    ],
                    Support: [
                        {
                            type: 'link',
                            label: 'Discord support', // The label that should be displayed (string).
                            href: 'https://discord.plugily.xyz/' // The target URL (string).
                        },
                        'minigame/support/files',
                        'minigame/support/faq',
                        'minigame/support/servertips',
                    ],
                    Addon: [
                        'minigame/addon/overview',
                        'minigame/addon/cmdsandperms',
                        'minigame/addon/files',
                        'minigame/addon/faq',
                    ],
                }
            ]
        }
    ],
};

module.exports = sidebars;
