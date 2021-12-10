---
id: faq
title: FAQ
sidebar_label: FAQ
---
---
Some basic questions and answers

##  **Limitation of liability disclaimer**

:::caution  Critical security exploit caused by Log4j
Make sure to be aware about a major security exploit found in 2021 on a common Java logging library. May your server is concerned by it.
[Check out minecraft.net article](https://www.minecraft.net/en-us/article/important-message--security-vulnerability-java-edition "IMPORTANT MESSAGE: SECURITY VULNERABILITY IN JAVA EDITION")
:::

**Murder Mystery** plugin **SHOULD BE RUN** on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.

**What Murder Mystery modifies in the world:**

* Visibility of players in the world
* Modifies armorstands that are used for the arena  
* **Might not be compatible with other minigames \(game behavior may broke\)**

:::warning
 **Using Murder Mystery you accept GPLv3 license and limitations of liability that Murder Mystery can cause, please become acquainted with following warnings before using Murder Mystery on a production server.**
:::

## Supported versions of Murder Mystery

Supported versions are currently 1.8.8-1.17.1

If your plugin doesn't startup and you don't have this version you're receiving this message:

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

:::important
Since version 1.7.5 you can add as many last words + permissions as you want.
:::

### How to add new ones?

    Last-Words:
      'default':
        Message: "&fPlease respawn :("
      'meme':
        Message: "&fDespacito 2 is confirmed by God"
        Permission: "murdermystery.lastwords.meme"
      'rage':
        Message: "&fWHY YOU KILLED ME?!!?"
        Permission: "murdermystery.lastwords.rage"
      'pro':
        Message: "&fIt was lagging..."
        Permission: "murdermystery.lastwords.pro"
      'hacker':
        Message: "Turn off your hacks..."
        Permission: "murdermystery.lastwords.hacker"
      ###HOW TO ADD A NEW ONE
      'newLastWord':
        Message: "Awesome new last word"
        Permission: "murdermystery.lastwords.nicenewpermission"

### How it works?
For all `last words` a player has permissions to, a `last word` is **randomly** picked and displayed.
If the player has no access to any last word, either the last word with **no permission** (priority) or the **first one in the list** will be picked out (fallback)


### Deprecated (lower 1.7.5)
:::info
Last words are written in their permission order! First is meme so it will be displayed if player has both permissions for meme and pro for example.
:::

| Priority | Last word | Description                     | Permission                   |
|----------|-----------|---------------------------------|------------------------------|
| 1        | Meme      | Despacito 2 is confirmed by God | murdermystery.lastwords.meme |
| 2        | Rage      | WHY YOU KILLED ME?!!?           | murdermystery.lastwords.rage |
| 3        | Pro       | It was lagging...               | murdermystery.lastwords.pro  |
| 4        | Default   | Please respawn :\(              | None                         |


## Bow trails

:::note
[List with particles](https://minecraft.gamepedia.com/Particles)
:::

### Which particles/trails are inside the plugin?
You can use all particles that are on your minecraft version as we are importing the particles of the server version that is running

### How it works?
For all `trails` a player has permissions to, a `trail` is **randomly** picked and displayed. 
If the player has no access to any trail, it _will not display any trail_.

### What are the permissions for trails?
`murdermystery.trails.<lowercased_particle_name>`
:::tip
Example you want to give the heart particle to your players.

Particle name: **HEART** -> lowercased: **heart** -> Permission: **`murdermystery.trails.heart`**
:::

### Deprecated (lower 1.7.5)
:::info
 Trails are written in their permission order! First is heart so it will be displayed if player has both permissions for heart and flame for example.
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

## How does randomjoin work?

### There are kinda like two cases:

All arenas on `waiting for players` stage: It will send players to a random arena

One (or more) arenas are on `starting` stage: It will send players to one random arena that is on starting stage

## How can I enable my old Scoreboard after leaving the game?

:::important
You have to enable rewards in your config.yml ( `Rewards-Enabled: true` )
:::

Please edit the following section in your rewards.yml file:

    #Helpful for servers that are using more than one scoreboard!
    scoreboard_remove:
    - commands to execute

With the type `scoreboard_remove` you execute commands after removing our scoreboard.

There you can add for example the following command:
* `- p:sb on` to execute the command /sb on from the player
* or `- sb on %PLAYER%` to execute the command /sb on %PLAYER% from the console

Be sure to use commands that your plugin supports!

[Learn more about the Rewards.yml here](plugin-files-explained.md)

:::note
If your scoreboard plugin doesn't support a command to activate the scoreboard please contact the dev of the plugin to add this command!
:::