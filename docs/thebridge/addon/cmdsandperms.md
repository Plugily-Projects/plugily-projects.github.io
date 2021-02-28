---
id: cmdsandperms
title: Addon - Commands and Permissions
sidebar_label: Commands and Permissions
---
---
Overview about enhancements commands and permissions

## Custom kits module

`[required argument] (optional argument)`

:::tip
You can use `thebridge.customkits.*` permission to give all commands permission
:::

| Command                                                              | Permission                              | Description                                                                                                   |
|----------------------------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------|
| /tba customkits create \[kit\]                                       | thebridge.customkits.command.create     | Create new custom kit                                                                                         |
| /tba customkits edit \[kit\]                                         | thebridge.customkits.command.edit       | Edit already existing custom kit                                                                              |
| /tba customkits delete \[kit\]                                       | thebridge.customkits.command.delete     | Delete existing custom kit                                                                                    |
| /tba customkits list                                                 | thebridge.customkits.command.list       | Open inventory will all loaded custom kits                                                                    |
| /tba customkits reload                                               | thebridge.customkits.command.reload     | Reload configuration and re-register custom kits to update them                                               |
| /tba customkits potiongen \[potion type\] \[duration\] \[amplifier\] | thebridge.customkts.command.potiongen   | Create custom potion effect for kits **\(effects will be applied to player not given into their inventory\)** |
| /tba customkits mobgen \[iron\_golem/wolf\] \[amount of mobs\]       | thebridge.customkits.command.mobgen     | Create custom mobs for kits **\(they will be spawned at the start/per wave\)**                                |
| /tba customkits commandgen \[player/console\] \[command\]            | thebridge.customkits.command.commandgen | Create command for kits **\(%player% placeholder supported\)**                                                |

### Achievements module <a id="commands-and-permissions-achievements-module"></a>

| Command                                                     | Permission                                | Description                                                                   |
|-------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------|
| /tb achievements list                                       | thebridge.achievements.command            | Shows list of unlocked achievements                                           |
| /tb achievements reload                                     | thebridge.achievements.command.reload     | Reloads achievements configuration                                            |
| /tba achievements create \[name\]                           | thebridge.achievements.command.create     | Creates new achievement                                                       |
| /tba achievements delete \[name\]                           | thebridge.achievements.command.delete     | Deletes existing achievement                                                  |
| /tba achievements edit \[name\]                             | thebridge.achievements.command.edit       | Edits existing achievement                                                    |
| /tba achievements commandgen \[player/console\] \[command\] | thebridge.achievements.command.commandgen | Create reward command for achievements **\(%player% placeholder supported\)** |
