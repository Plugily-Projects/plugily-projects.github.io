---
id: servertips
title: Useful server admin tips
sidebar_label: Useful server admin tips
---
---
This section contains some useful tips to enhance your Village Defense server!

:::caution
These tips **should be EULA friendly, but may not**!
:::
:::warning
We are not responsibility for other plugins. Please contact the authors of the plugins!
:::

 **Let's start taking profit from our server!**

## Buyable kits for coins

### **Required plugins:** ChestCommands GUI \(or other\), Vault, Permissions plugin, [Any plugin that gives money for mobs killing](http://lmgtfy.com/?q=spigot+money+mob+drops+plugin)

**1.** Using ChestCommands GUI you can create menu like that: 

![](https://i.imgur.com/hl8E7nj.png)

Just create good-looking GUI via Chest Commands, set item prices \(requires Vault\) and in command to execute use command from your permissions plugin.

**Example:**

```text
cleaner-buy:
    ID: magma_cream
    COMMAND: 'console: pex user {player} add villagedefense.kit.cleaner;tell: &eThanks for purchase!' #for PermissionsEx
    #COMMAND: 'console: lp user {player} permission set villagedefense.kit.cleaner true;tell: &eThanks for purchase!' #for LuckPerms
    LORE:
       - '&7Clean map very fast and easy!'
       - '&7Click to buy for &e&l3000 coins'
    PRICE: 3000
    POSITION-X: 2
    POSITION-Y: 2
```

**2.** Edit kit descriptions in language.yml

Go to language.yml and modify descriptions of kits that you're selling via shop above. Add information that kit is available to buy for coins. **You must add enough spaces to wrap this line to next line.** 

![](https://i.imgur.com/ALkgKO9.png)

In overall it looks like this:

![](https://i.imgur.com/hYFpLtK.png)

**3. Profit**

## Global server boosters

### **Requirements** Web store \(ex. CraftingStore\), Permissions plugin

Using [Custom permissions](../setup/cmd-perms.md#custom-permissions) you can create global server boosters for your server!

**1**. Create new custom permission in config.yml

```text
CustomPermissions:
  server-booster: 100
```

Everyone who has this permission will receive **100% more orbs** in-game.

**2.** Add new item to your web store

Create new item in your store with command:

* `lp group %your_default_group% permission settemp server-booster 12h` for **LuckPerms**
* `pex group %your_default_group% timed add server-booster 43200 *` for **PermissionsEx**

This command will give you **12 hour** server booster for your default group.

**3. Profit**

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
