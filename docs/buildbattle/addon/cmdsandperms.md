---
id: cmdsandperms
title: Addon - Commands and Permissions
sidebar_label: Commands and Permissions
---
---
Overview about extras commands and permissions
:::info
`[required argument] (optional argument)`
:::
### Achievements module

| Command                                                     | Permission                                | Description                                                                   |
|-------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------|
| /bb achievements list                                       | buildbattle.achievements.command            | Shows list of unlocked achievements                                           |
| /bb achievements reload                                     | buildbattle.achievements.command.reload     | Reloads achievements configuration                                            |
| /bba achievements create \[name\]                           | buildbattle.achievements.command.create     | Creates new achievement                                                       |
| /bba achievements delete \[name\]                           | buildbattle.achievements.command.delete     | Deletes existing achievement                                                  |
| /bba achievements edit \[name\]                             | buildbattle.achievements.command.edit       | Edits existing achievement                                                    |
| /bba achievements commandgen \[player/console\] \[command\] | buildbattle.achievements.command.commandgen | Create reward command for achievements **\(%player% placeholder supported\)** |
