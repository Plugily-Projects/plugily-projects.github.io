---
id: faq
title: FAQ
sidebar_label: FAQ
---
---
Some basic questions and answers

## **Limitation of liability disclaimer**

**Build Battle** plugin **SHOULD BE RUN** on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.

**What Village Defense modifies in the world:**

* Modifies entities spawning
* **Might not be compatible with other minigames \(game behavior may broke\)**

:::caution
**Using**  **Build Battle you accept GPLv3 license and limitations of liability that Build Battle can cause, please become acquainted with following warnings before using Build Battle on a production server.**
:::

## Supported versions of Build Battle

Supported versions are currently 1.11 - 1.16.X If your plugin doesn't startup and you don't have this version you're receiving this message:

```text
  _   _           _                                                    _                _
 | \ | |   ___   | |_     ___   _   _   _ __    _ __     ___    _ __  | |_    ___    __| |
 |  \| |  / _ \  | __|   / __| | | | | | '_ \  | '_ \   / _ \  | '__| | __|  / _ \  / _` |
 | |\  | | (_) | | |_    \__ \ | |_| | | |_) | | |_) | | (_) | | |    | |_  |  __/ | (_| |
 |_| \_|  \___/   \__|   |___/  \__,_| | .__/  | .__/   \___/  |_|     \__|  \___|  \__,_|
                                       |_|     |_|
Your server version is not supported by Build Battle!
Sadly, we must shut off. Maybe you consider changing your server version?
```

## Players can't join through signs

This is a very common problem in every minigame plugin.

It's **caused by spawn protection** feature in vanilla Minecraft.

To disable this go to **server.properties** and change **spawn-protection** value **to 0**.

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