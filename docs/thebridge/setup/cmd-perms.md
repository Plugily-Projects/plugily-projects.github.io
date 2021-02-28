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

| Command                   | Permission                                                | Description                                                 |
|---------------------------|-----------------------------------------------------------|-------------------------------------------------------------|
| /tb join [arena]          | thebridge.join.%arena% thebridge.join.* (all arenas)      | Joins specified arena                                       |
| /tb randomjoin            | Requires permission thebridge.join.* to access all arenas | Joins random not started arena                              |
| /tb arenas                | thebridge.arenas                                          | Overview over all arenas in one GUI. Select one to join     |
| /tb stats (online player) |                                                           | Shows your stats                                            |
| /tb leave                 |                                                           | Quits current game. You can disable game quit in config.yml |
| /tb top [statistic]       |                                                           | Shows top 10 users from requested statistic                 |
| /tb selectkit             | thebridge.command.selectkit                               | Change kit while being on lobby                             |


## Admin

:::tip
 You can use `thebridge.admin.*` permission to give all admin commands permission
:::

| Command                             | Permission                                                                                                | Description                                                                     | Valid excecutors |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|------------------|
|                                     | `thebridge.updatenotify`                                                                                  | Notifies about plugin update on join                                            |                  |
|                                     | `thebridge.command.override`                                                                              | Allows to use every command while being in-game                                 |                  |
|                                     | `thebridge.admin.sign.create`\(creating signs by hand\) `thebridge.admin.sign.break` \(destroying signs\) | You can create or break signs with those permissions                            |                  |
| /tb create \[arena\]                | `thebridge.admin.create`                                                                                  | Creates new arena with specified name                                           | Player           |
| /tb \[arena\] edit                  | `thebridge.admin.create`                                                                                  | Edits existing arena                                                            | Player           |
| /tba list                           | `thebridge.admin.list`                                                                                    | Prints list of available arenas                                                 | Player/Console   |
| /tba stop                           | `thebridge.admin.stopgame`                                                                                | Stops game you're playing                                                       | Player           |
| /tba forcestart                     | `thebridge.admin.forcestart`                                                                              | Force starts game you're in                                                     | Player           |
| /tba spychat                        | `thebridge.admin.spychat`                                                                                 | Toggles all arenas chat visibility \(multi-arena feature only\)                 | Player           |
| /tbaa reload                        | `thebridge.admin.reload`                                                                                  | Reloads all game instances **they will be stopped.  Usage highly discouraged!** | Player/Console   |
| /tba delete \[arena\]               | `thebridge.admin.delete`                                                                                  | Deletes specified arena                                                         | Player           |
| /tba tp \[arena\] \[location type\] | `thebridge.admin.teleport`                                                                                | Teleports to specified arena location **Location types:** START, END, LOBBY     | Player           |
| /tba addlevel \[number\] \(player\) | `thebridge.admin.addlevel`                                                                                | Add levels to player                                                            | Player/Console   |
| /tba setlevel \[number\] \(player\) | `thebridge.admin.setlevel`                                                                                | Set levels of player                                                            | Player/Console   |

## Basic permissions

Basic permissions are default permissions for games. Default permissions can be found in **`config.yml`.** You can edit them to your likings.

```text
Basic-Permissions:
  Full-Games-Permission: "thebridge.fullgames"
  # <arena> represents arena name (NOT MAP NAME!), for example: 'thebridge.join.AC02'
  # use 'thebridge.join.*' to enable access to all arenas
  Join-Permission: "thebridge.join.<arena>"
  Kits-Permission: "thebridge.kits"
```

> **Full-Games-Permission** - Permission to join full arenas
>
> **Join-Permission** - Permission to join arenas
>
> Ki**ts-Permission** - Permission to get all kits

## Kits permissions

Every kit has its own permission node to access it. Even if it's level kit, you can still unlock it getting its permission.

**Example:**

* Archer kit permission - **`thebridge.kit.archer`**
* Heavy Tank kit permission - **`thebridge.kit.heavytank`**

:::note
**Info!** **Premium kits** also unlocks with full kit permissions \( `thebridge.kits` \) and **leveled kits** are unlocked too when certain level is reached.
:::

