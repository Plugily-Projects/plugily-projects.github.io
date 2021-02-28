---
id: faq
title: FAQ
sidebar_label: FAQ
---
---
Some basic questions and answers

##  **Limitation of liability disclaimer**

**Murder Mystery** plugin **SHOULD BE RUN** on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.

**What Murder Mystery modifies in the world:**

* Visibility of players in the world
*  **Might not be compatible with other minigames \(game behavior may broke\)**

:::caution
 **Using Murder Mystery you accept GPLv3 license and limitations of liability that Murder Mystery can cause, please become acquainted with following warnings before using Murder Mystery on a production server.**
:::

## Supported versions of Murder Mystery

Supported versions are currently 1.11-1.16.X. If your plugin doesn't startup and you don't have this version you're receiving this message:

```text
  _   _           _                                                    _                _
 | \ | |   ___   | |_     ___   _   _   _ __    _ __     ___    _ __  | |_    ___    __| |
 |  \| |  / _ \  | __|   / __| | | | | | '_ \  | '_ \   / _ \  | '__| | __|  / _ \  / _` |
 | |\  | | (_) | | |_    \__ \ | |_| | | |_) | | |_) | | (_) | | |    | |_  |  __/ | (_| |
 |_| \_|  \___/   \__|   |___/  \__,_| | .__/  | .__/   \___/  |_|     \__|  \___|  \__,_|
                                       |_|     |_|
Your server version is not supported by Murder Mystery!
Sadly, we must shut off. Maybe you consider changing your server version?
```

## Players can't join through signs

This is a very common problem in every minigame plugin.

It's **caused by spawn protection** feature in vanilla Minecraft.

To disable this go to **server.properties** and change **spawn-protection** value **to 0**.

:::note
 **Info!** You can no longer create signs in radius of spawn protection since **Murder Mystery 1.1.2**, you'll be warned instead.
:::

## Corpses last words and their permissions

:::warning
**Warn!** Last words are written in their permission order! First is meme so it will be displayed if player has both permissions for meme and pro for example.
:::

| Priority | Last word | Description                     | Permission                   |
|----------|-----------|---------------------------------|------------------------------|
| 1        | Meme      | Despacito 2 is confirmed by God | murdermystery.lastwords.meme |
| 2        | Rage      | WHY YOU KILLED ME?!!?           | murdermystery.lastwords.rage |
| 3        | Pro       | It was lagging...               | murdermystery.lastwords.pro  |
| 4        | Default   | Please respawn :\(              | None                         |


## Permissions for bow trails

:::warning
 **Warn!** Trails are written in their permission order! First is heart so it will be displayed if player has both permissions for heart and flame for example.
:::

| Priority | Particle type | Permission                    |
|----------|---------------|-------------------------------|
| 1        | Hearts        | murdermystery.trails.heart    |
| 2        | Flames        | murdermystery.trails.flame    |
| 3        | Critical      | murdermystery.trails.critical |
| 4        | Cloud         | murdermystery.trails.cloud    |


## Can I increase chance of being Detective/Murderer?

You can check special permission nodes:

```text
murdermystery.role.detective.<1/100>
```

```text
murdermystery.role.murderer.<1/100>
```

Setting up for example **murdermystery.role.detective.15** will give you 15 more points for being a detective

:::note
 **Info!** Please avoid giving very high percentage values because other normal users will likely never be able to play as one of these roles
:::

## How to remove an special block?

Just look at any specialblock and type in

```text
/mma removeblock
```

:::warning
Make sure that you have the permission: `murdermystery.admin.removeblock`
:::

