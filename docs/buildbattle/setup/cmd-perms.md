---
id: cmdsandperms
title: Commands and permissions
sidebar_label: Commands and permissions
---
---
Overview about all commands and permissions


:::note
\[required argument\] \(optional argument\)
:::

## Player

| Command                          | Permission                                                        | Description                                                 |
|----------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------|
| /bb join \[arena\]               | `buildbattle.join.%arena% buildbattle.join.*` \(all arenas\)      | Joins specified arena                                       |
| /bb randomjoin \[solo/team/gtb\] | **Requires permission `buildbattle.join.*` to access all arenas** | Joins random arena of specified game mode                   |
| /bb arenas                       | `buildbattle.arenas`                                              | Overview over all arenas in one GUI. Select one to join     |
| /bb stats \(online player\)      |                                                                   | Shows your stats                                            |
| /bb leave                        |                                                                   | Quits current game. You can disable game quit in config.yml |
| /bb top \[statistic\]            |                                                                   | Shows TOP 10 players of specified statistic                 |

## Admin

:::tip
 **Tip!** You can use `buildbattle.admin.*` permission to give all admin commands permission
:::

| Command                                      | Permission                                                                                                    | Description                                                                                                        | Valid excecutors |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|------------------|
| \`\`                                         | `buildbattle.updatenotify`                                                                                    | Notifies about plugin update on join                                                                               |                  |
|                                              | `buildbattle.command.override`                                                                                | Allows to use every command while being in-game                                                                    |                  |
| \`\`                                         | `buildbattle.admin.sign.create`\(creating signs by hand\) `buildbattle.admin.sign.break` \(destroying signs\) | You can create or break signs with those permissions                                                               |                  |
| /bb create \[arena\]                         | `buildbattle.admin.create`                                                                                    | Creates new arena with specified name                                                                              | Player           |
| /bb \[arena\] edit                           | `buildbattle.admin.create`                                                                                    | Edits existing arena                                                                                               | Player           |
| /bba list                                    | `buildbattle.admin.list`                                                                                      | Prints list of available arenas                                                                                    | Player/Console   |
| /bba stop                                    | `buildbattle.admin.stopgame`                                                                                  | Stops game you're playing                                                                                          | Player           |
| /bba forcestart \(theme\)                    | `buildbattle.admin.forcestart`                                                                                | Force starts game you're in When `theme` argument is typed arena starts with predefined theme without Voting phase | Player           |
| /bba reload                                  | `buildbattle.admin.reload`                                                                                    | Reloads all game instances **they will be stopped.  Usage highly discouraged!**                                    | Player/Console   |
| /bba delete \[arena\]                        | `buildbattle.admin.delete`                                                                                    | Deletes specified arena                                                                                            | Player           |
| /bba addplot \[arena\]                       | `buildbattle.admin.addplot`                                                                                   | Adds new plot to the arena                                                                                         | Player           |
| /bba removeplot \[arena\] \[plot ID\]        | `buildbattle.admin.removeplot`                                                                                | Remove target plot from the arena                                                                                  | Player           |
| /bba addnpc                                  | `buildbattle.admin.addnpc`                                                                                    | Spawn floor changer NPC at your location **Requires Citizens**                                                     | Player           |
| /bba settheme \[theme\]                      | `buildbattle.admin.settheme`                                                                                  | Set new theme of arena **Works only when game started, and for 20 seconds after start**                            | Player           |
| /bba votes \[add/set\] \[amount\] \(player\) | `buildbattle.admin.supervotes.manage`                                                                         | Add or set super votes to target player or yourself Use `- (minus)` to remove votes                                | Player/Console   |
| /bba plotwand                                | `buildbattle.admin.plotwand`                                                                                  | Get plot wand for setupping arenas                                                                                 | Player           |

## Basic permissions

Basic premissions are default permissions for games. Default permissions can be found in **config.yml**

```text
Basic-Permissions:
  Arena-Edit-Permission: "buildbattle.edit"
  Join-Permission: "buildbattle.join.<arena>"
```

