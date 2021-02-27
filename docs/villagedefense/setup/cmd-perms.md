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

| Command                   | Permission                                                                      | Description                                                 |
|---------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------|
| /vd join [arena]          | villagedefense.join.%arena% villagedefense.join.* (all arenas) | Joins specified arena                                       |
| /vd randomjoin            | Requires permission villagedefense.join.* to access all arenas                  | Joins random not started arena                              |
| /vd arenas                | villagedefense.arenas                                                           | Overview over all arenas in one GUI. Select one to join     |
| /vd stats (online player) |                                                                                 | Shows your stats                                            |
| /vd leave                 |                                                                                 | Quits current game. You can disable game quit in config.yml |
| /vd top [statistic]       |                                                                                 | Shows top 10 users from requested statistic                 |
| /vd selectkit             | villagedefense.command.selectkit                                                | Change kit while being in game                              |


## Admin

:::tip
 **Tip!** You can use `villagedefense.admin.*` permission to give all admin commands permission
:::

| Command                             | Permission                                                           | Description                                                                     | Valid excecutors                                 |
|-------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------|
|                                     | `villagedefense.updatenotify`                                        | Notifies about plugin update on join                                            |                                                  |
|                                     | `villagedefense.command.override`                                    | Allows to use every command while being in-game                                 |                                                  |
|                                     | `villagedefense.admin.sign.create` `villagedefense.admin.sign.break` | You can create or break signs with those permissions                            |                                                  |
| /vd create \[arena\]                | `villagedefense.admin.create`                                        | Creates new arena with specified name                                           | Player                                           |
| /vd \[arena\] edit                  | `villagedefense.admin.create`                                        | Edits existing arena                                                            | Player                                           |
| /vda list                           | `villagedefense.admin.list`                                          | Prints list of available arenas                                                 | Player/Console                                   |
| /vda stop                           | `villagedefense.admin.stopgame`                                      | Stops game you're playing                                                       | Player                                           |
| /vda forcestart                     | `villagedefense.admin.forcestart`                                    | Force starts game you're in                                                     | Player                                           |
| /vda respawn \(player\)             | `villagedefense.admin.respawn villagedefense.admin.respawn.others`   | Respawn you/specified player in your arena                                      | Player                                           |
| /vda spychat                        | `villagedefense.admin.spychat`                                       | Toggles all arenas chat visibility \(multi-arena feature only\)                 | Player                                           |
| /vda reload                         | `villagedefense.admin.reload`                                        | Reloads all game instances **they will be stopped.  Usage highly discouraged!** | Player/Console                                   |
| /vda delete \[arena\]               | `villagedefense.admin.delete`                                        | Deletes specified arena                                                         | Player                                           |
| /vda tp \[arena\] \[location type\] | `villagedefense.admin.teleport`                                      | Teleports to specified arena location **Location types:** START, END, LOBBY     | Player                                           |
| /vda clear \[mobtype\]              | `villagedefense.admin.clear`                                         | Clears specified mobs in your game                                              | Player                                           |
| /vda addorbs \[amount\] \(player\)  | `villagedefense.admin.addorbs villagedefense.admin.addorbs.others`   | Adds orbs \(game currency\) to you/specified player                             | Player/Console when player argument is specified |
| /vda addlevel \[number\] \(player\) | `villagedefense.admin.addlevel`                                      | Add levels to player                                                            | Player/Console                                   |
| /vda setlevel \[number\] \(player\) | `villagedefense.admin.setlevel`                                      | Set levels of player                                                            | Player/Console                                   |
| /vda setwave \[number\]             | `villagedefense.admin.setwave`                                       | Sets wave of game                                                               | Player                                           |
| /vda setprice \[amount\]            | `villagedefense.admin.setprice`                                      | Sets price of holding item \(use this for shop otherwise item won't work\)      | Player                                           |

## Basic permissions

Basic permissions are default permissions for games. Default permissions can be found in **`config.yml`.** You can edit them to your likings.

```text
Basic-Permissions:
  Full-Games-Permission: "villagedefense.fullgames"
  Vip-Permission: "villagedefense.vip"
  Mvp-Permission: "villagedefense.mvp"
  Elite-Permission: "villagedefense.elite"
  Arena-Edit-Permission: "villagedefense.edit"
  Join-Permission: "villagedefense.join.<arena>"
```

> **Full-Games-Permission** - Permission to join full arenas
>
> **Vip-Permission** - Gives permission to **donator kits**, joining **full games** and getting **50% more orbs**
>
> **Mvp-Permission** - Same as `Vip-Permission` but gives **100% more orbs**
>
> **Elite-Permission** - Same as `Vip-Permission` but gives **150% more orbs**
>
> **Arena-Edit-Permission** - Permission for creating arenas, overrides disabled commands option via config.yml
>
> **Join-Permission** - Permission to join arenas

## Custom permissions

Custom permissions are used for giving your players more orbs in game. Nothing more, nothing less.

:::caution
**Warn!** Using dots `.` in custom permissions will not work and will break permission, don't use them!
:::

Custom permissions can be set up in **config.yml**:

```text
CustomPermissions:
  player-booster: 10
  vip-booster: 100
  staff-booster: 1000
```

> **player-booster** - Gives player with this permission 10% more orbs on pickup
>
> **vip-booster** - Gives player 100% more orbs
>
> **staff-booster** - 1000% more orbs

:::caution
**Avoid low percent values!** Remember that 10% more orbs are actually nothing because it's 5~8 orbs + **only 10% of this value more** so you won't see any significant increase, use higher values too see the difference
:::

:::note
**Permissions can be combined!** Giving player permission **`player.booster`** and **`vip.booster`** will receive 110% more orbs on the pickup!
:::

## Kits permissions

Every kit has its own permission node to access it. Even if it's level kit, you can still unlock it getting its permission.

**Example:**

* Archer kit permission - **`villagedefense.kit.archer`**
* Tornado kit permission - **`villagedefense.kit.tornado`**
* Heavy Tank kit permission - **`villagedefense.kit.heavytank`**

:::note
**Info!** **Premium kits** also unlocks with Vip/Mvp or Elite permissions and **leveled kits** are unlocked too when certain level is reached.
:::

