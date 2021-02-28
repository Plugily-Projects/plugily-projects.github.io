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

| Command | Permission | Description |
| :---: | :---: | :---: |
| /mm join \[arena\] | `murdermystery.join.%arena%` `murdermystery.join.*`\(all arenas\) | Joins specified arena |
| /mm randomjoin | **Requires permission `murdermystery.join.*` to access all arenas** | Joins random arena |
| /mm arenas | `murdermystery.arenas` | Overview over all arenas in one GUI. Select one to join |
| /mm stats \(online player\) |  | Shows your stats or \(online player\) stats |
| /mm leave |  | Quits current game. You can disable game quit in config.yml |
| /mm top \[statistic\] |  | Shows TOP 10 players of specified statistic |

## Admin

:::tip
 You can use `murdermystery.admin.*` permission to give all admin commands permission
:::

| Command | Permission | Description | Valid Executors |
| :---: | :---: | :---: | :---: |
|  | `murdermystery.updatenotify` | Notifies about plugin update on join |  |
|  | `murdermystery.command.override` | Allows to use every command while being in-game |  |
|  | `murdermystery.admin.sign.create` \(creating signs by hand\) `murdermystery.admin.sign.break` \(destroying signs\) | You can create or break signs with those permissions |  |
| /mm create \[arena\] | `murdermystery.admin.create` | Creates new arena with specified name | Player |
| /mm \[arena\] edit | `murdermystery.admin.create` | Edits existing arena | Player |
| /mma list | `murdermystery.admin.list` | Prints list of available arenas | Player/Console |
| /mma stop | `murdermystery.admin.stopgame` | Stops game you're playing | Player |
| /mma forcestart | `murdermystery.admin.forcestart` | Force starts game | Player |
| /mma reload | `murdermystery.admin.reload` |  Reloads all game instances **they will be stopped. Usage highly discouraged!** | Player/Console |
| /mma delete \[arena\] | `murdermystery.admin.delete` | Deletes specified arena | Player |
| /mma removeblock | `murdermystery.admin.removeblock` | Removes the special block you are looking at | Player |

## Basic permissions

Basic premissions are default permissions for games. Default permissions can be found in **`config.yml`.** You can edit them to your likings.

```text
Basic-Permissions:
  Full-Games-Permission: "murdermystery.fullgames"
  # <arena> represents arena name (NOT MAP NAME!), for example: 'murdermystery.join.MM02'
  # use 'murdermystery.join.*' to enable access to all arenas
  Join-Permission: "murdermystery.join.<arena>"
```

