---
id: cmdsandperms
title: Addon - Commands and Permissions
sidebar_label: Commands and Permissions
---
---
Overview about extension commands and permissions
:::info
`[required argument] (optional argument)`
:::

### Achievements module

| Command                                                     | Permission                                | Description                                                                   |
|-------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------|
| /mm achievements list                                       | murdermystery.achievements.command            | Shows list of unlocked achievements                                           |
| /mm achievements reload                                     | murdermystery.achievements.command.reload     | Reloads achievements configuration                                            |
| /mma achievements create \[name\]                           | murdermystery.achievements.command.create     | Creates new achievement                                                       |
| /mma achievements delete \[name\]                           | murdermystery.achievements.command.delete     | Deletes existing achievement                                                  |
| /mma achievements edit \[name\]                             | murdermystery.achievements.command.edit       | Edits existing achievement                                                    |
| /mma achievements commandgen \[player/console\] \[command\] | murdermystery.achievements.command.commandgen | Create reward command for achievements **\(%player% placeholder supported\)** |
