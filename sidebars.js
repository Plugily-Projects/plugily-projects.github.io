module.exports = {
  docs: [
    {
      type: 'category',
      label: 'VillageDefense',
      items: [
        'villagedefense/overview',
        {
          Setup: [
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
            'villagedefense/support/faq',
            'villagedefense/support/servertips',
          ],
          Addon: [
            'villagedefense/addon/overview',
            'villagedefense/addon/cmdsandperms',
            'villagedefense/addon/faq',
          ],
        }
      ]
    },
  ]
};