---
id: servertips
title: Useful server admin tips
sidebar_label: Useful server admin tips
---
---

:::caution
These tips **should be EULA friendly, but may not**!
:::
:::warning
We are not responsibility for other plugins. Please contact the authors of the plugins!
:::

**Let's start taking profit from our server!**

## Party support

### **Required plugins:** (Recommend) [Parties](https://www.spigotmc.org/resources/3709/) or PartyAndFriends for Spigot or Bungee

### Using Bungee?

**1.** Install the party plugin on your bungee and spigot server and restart both servers

**2.** Make sure to use the same database on both servers. (If you use MySQL us the same database and set it up on both servers)

**(3.)** Only if you use PAF for Bungee, you will need to install the [PAF Addon](https://www.spigotmc.org/resources/39751/) and follow the instruction of it.

:::note
Basically the party plugin on spigot works as a bridge between bungee - (spigot) - our minigame
:::

**3. Profit**

### Using Spigot?

**1.** Install the party plugin on your spigot server and restart the server

**2.** Our plugin will automatically hook into the party plugin

**3. Profit**


## Bungeecord Lobby Signs

### **Required plugins:** [BungeeSigns](https://www.spigotmc.org/resources/37220/)

**1.** Install the BungeeSigns plugin on your lobby servers

**2.** Set it up like the plugin thread says it

**3. Profit**

:::note
When using **EssentialsX** make sure to set respawn-listener-priority to normal or low!
:::

## Quest objectives

### **Required plugins:** [Quests](https://www.spigotmc.org/resources/quests.3711/)

**1.** Install the [Plugily Quests Module](https://www.spigotmc.org/resources/plugily-quests-module.99817/)

**2.** Place in _/plugins/Quests/modules_ and create a quest with custom objective:

![](https://i.imgur.com/FFzavvE.png)

**3. Profit**

:::note
DO NOT put module in _/plugins_ folder. Place in _/plugins/Quests/modules_ ONLY!
:::
