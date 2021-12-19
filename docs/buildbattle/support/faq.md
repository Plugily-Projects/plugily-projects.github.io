---
id: faq
title: FAQ
sidebar_label: FAQ
---
---
Some basic questions and answers

## **Limitation of liability disclaimer**

:::caution  Critical security exploit caused by Log4j
Make sure to be aware about a major security exploit found in 2021 on a common Java logging library. May your server is concerned by it. 
[Check out minecraft.net article](https://www.minecraft.net/en-us/article/important-message--security-vulnerability-java-edition "IMPORTANT MESSAGE: SECURITY VULNERABILITY IN JAVA EDITION")
[Check out spigotmc.org article](https://www.spigotmc.org/threads/spigot-security-releases-%E2%80%94-1-8-8%E2%80%931-18.537204/ "IMPORTANT MESSAGE: UPDATE YOUR SERVER JAR!")
:::

**Build Battle** plugin **SHOULD BE RUN** on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.

**What Build Battle modifies in the world:**

* Modifies entities spawning
* **Might not be compatible with other minigames \(game behavior may broke\)**

:::warning
**Using**  **Build Battle you accept GPLv3 license and limitations of liability that Build Battle can cause, please become acquainted with following warnings before using Build Battle on a production server.**
:::

## Supported versions of Build Battle

Supported versions are currently 1.8.8 - 1.17.1

If your plugin doesn't startup and you don't have this version you're receiving this message:

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