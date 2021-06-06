---
id: cmdsandperms
title: Addon - Commands and Permissions
sidebar_label: Commands and Permissions
---
---
Overview about enhancements commands and permissions


:::info
`[required argument] (optional argument)`
:::

### Commands and Permissions - customkits
:::tip
You can use `villagedefense.customkits.*` permission to give all commands permission
:::

| Command                                                              | Permission                                   | Description                                                                                                   |
|----------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| /vda customkits create \[kit\]                                       | villagedefense.customkits.command.create     | Create new custom kit                                                                                         |
| /vda customkits edit \[kit\]                                         | villagedefense.customkits.command.edit       | Edit already existing custom kit                                                                              |
| /vda customkits delete \[kit\]                                       | villagedefense.customkits.command.delete     | Delete existing custom kit                                                                                    |
| /vda customkits list                                                 | villagedefense.customkits.command.list       | Open inventory will all loaded custom kits                                                                    |
| /vda customkits reload                                               | villagedefense.customkits.command.reload     | Reload configuration and re-register custom kits to update them                                               |
| /vda customkits potiongen \[potion type\] \[duration\] \[amplifier\] | villagedefense.customkts.command.potiongen   | Create custom potion effect for kits **\(effects will be applied to player not given into their inventory\)** |
| /vda customkits mobgen \[iron\_golem/wolf\] \[amount of mobs\]       | villagedefense.customkits.command.mobgen     | Create custom mobs for kits **\(they will be spawned at the start/per wave\)**                                |
| /vda customkits commandgen \[player/console\] \[command\]            | villagedefense.customkits.command.commandgen | Create command for kits **\(%player% placeholder supported\)**                                                |

### Commands and Permissions - achievements

| Command                                                     | Permission                                     | Description                                                                   |
|-------------------------------------------------------------|------------------------------------------------|-------------------------------------------------------------------------------|
| /vd achievements list                                       | villagedefense.achievements.command            | Shows list of unlocked achievements                                           |
| /vd achievements reload                                     | villagedefense.achievements.command.reload     | Reloads achievements configuration                                            |
| /vda achievements create \[name\]                           | villagedefense.achievements.command.create     | Creates new achievement                                                       |
| /vda achievements delete \[name\]                           | villagedefense.achievements.command.delete     | Deletes existing achievement                                                  |
| /vda achievements edit \[name\]                             | villagedefense.achievements.command.edit       | Edits existing achievement                                                    |
| /vda achievements commandgen \[player/console\] \[command\] | villagedefense.achievements.command.commandgen | Create reward command for achievements **\(%player% placeholder supported\)** |

### Commands and Permissions - extended shops (VDE 4.5.6+)
| Commands                                     | Permission                                  | Description                                    |
|----------------------------------------------|---------------------------------------------|------------------------------------------------|
| /vda extendedshops edit <category> <arena>   | villagedefense.extendedshops.command.edit   | Opens GUI editor to edit target extended shop. |
| /vda extendedshops create <category> <arena> | villagedefense.extendedshops.create.edit    | Creates new extended shop for the category     |
| /vda extendedshops delete <category> <arena> | villagedefense.extendedshops.command.delete | Deletes extended shop of category              |
