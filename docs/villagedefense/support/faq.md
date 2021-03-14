---
id: faq
title: FAQ
sidebar_label: FAQ
---
--- 
Some basic questions and answers


## **Limitation of liability disclaimer**

**Village Defense** plugin **SHOULD BE RUN** on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.

**What Village Defense modifies in the world:**

* Blocks mob spawning other than Village Defense ones
* Cleans hoppers inventories
* Manipulates Villager entities
*  **Might not be compatible with other minigames \(zombies/villagers will be invisible\)**

:::warning
**Using Village Defense you accept GPLv3 license and limitations of liability that Village Defense can cause, please become acquainted with following warnings before using Village Defense on a production server.**
:::

## Supported versions of Village Defense

Supported versions are currently 1.11 - 1.16.XIf your plugin doesn't startup and you don't have this version you're receiving this message:

```text
  _   _           _                                                    _                _
 | \ | |   ___   | |_     ___   _   _   _ __    _ __     ___    _ __  | |_    ___    __| |
 |  \| |  / _ \  | __|   / __| | | | | | '_ \  | '_ \   / _ \  | '__| | __|  / _ \  / _` |
 | |\  | | (_) | | |_    \__ \ | |_| | | |_) | | |_) | | (_) | | |    | |_  |  __/ | (_| |
 |_| \_|  \___/   \__|   |___/  \__,_| | .__/  | .__/   \___/  |_|     \__|  \___|  \__,_|
                                       |_|     |_|
Your server version is not supported by Village Defense!
Sadly, we must shut off. Maybe you consider changing your server version?
```

## Players can't join through signs

This is a very common problem in every minigame plugin.

It's **caused by spawn protection** feature in vanilla Minecraft.

To disable this go to **server.properties** and change **spawn-protection** value **to 0**.

:::note
**Info!** You can no longer create signs in radius of spawn protection since **Village Defense 4.2.1**, you'll be warned instead.
:::

## How power-ups work?

Power-ups added in Village Defense **3.3.0** enhances your game a bit.

#### **Requires** [**Holographic Displays**](https://dev.bukkit.org/projects/holographic-displays) **to work!**

### **There are few types of them right now:**

* Map clean power-up \(Cleans map from all zombies that are spawned, not every zombie from the pool\)
* Double damage power-up \(Every player gets Strength I potion for 15 seconds by default\)
* Healing power-up \(Every player gets Regeneration I for 10 seconds by default\)
* Golem raid power-up \(3 golems are spawned in the village by default\)
* One shot one kill power-up \(Every zombie can be killed for one hit \(Strength 255\) for 15 seconds by default\)

Every option and messages from these power-ups are configurable. Drop chance, time of power-up, disabling/enabling specific power-ups are configurable via **config.yml**. Messages are configurable via **language.yml**.

## Special shop items

There are few special shop items that you can put into the shop to enhance gameplay a bit.

* **Entity items**
  * Spawn Wolf item Item for spawning wolves in game. It should be named 'Spawn Wolf' or like you've translated it in language.yml under `In-Game.Messages.Shop-Messages.Wolf-Item-Name`. It can be any item, **only display name of item will be checked while buying it!**
  * Spawn Golem item Item for spawning golems in game. It should be named 'Spawn Golem' or like you've translated it in language.yml under `In-Game.Messages.Shop-Messages.Golem-Item-Name`. It can be any item, **only display name of item will be checked while buying it!**
* **Special kit items**
  * Soon

## How does randomjoin work?

### There are kinda like two cases:

All arenas on `waiting for players` stage: It will send players to a random arena

One (or more) arenas are on `starting` stage: It will send players to the arena with the most players

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