---
id: servertips
title: Useful server admin tips
sidebar_label: Useful server admin tips
---
---

:::info
This server admin tips were originally made for VillageDefense, so may change the kits
:::

:::caution
These tips **should be EULA friendly, but may not**!
:::

:::warning
We are not responsibility for other plugins. Please contact the authors of the plugins!
:::

 **Let's start taking profit from our server!**

## Buyable kits for coins

### **Required plugins:** ChestCommands GUI \(or other\), Vault, Permissions plugin, any plugin that gives coins or use rewards

**1.** Using ChestCommands GUI you can create menu like that: 

![](https://i.imgur.com/hl8E7nj.png)

Just create good-looking GUI via Chest Commands, set item prices \(requires Vault\) and in command to execute use command from your permissions plugin.

**Example:**

```text
cleaner-buy:
    ID: magma_cream
    COMMAND: 'console: pex user {player} add thebridge.kit.cleaner;tell: &eThanks for purchase!' #for PermissionsEx
    #COMMAND: 'console: lp user {player} permission set thebridge.kit.cleaner true;tell: &eThanks for purchase!' #for LuckPerms
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

## Party support

### **Required plugins:** (Recommend) [Parties](https://www.spigotmc.org/resources/3709/) or PartyAndFriends for Spigot or Bungee

### Using Bungee?

**1.** Install the party plugin on your bungee and spigot server and restart both servers

**2.** Make sure to use the same database on both servers. (If you use MySQL us the same database and set it up on both servers)

**(3.)** Only if you use PAF for Bungee, you will need to install the [PAF Addon](https://www.spigotmc.org/resources/39751/) and follow the instruction of it.

:::note
Basically the party plugin on spigot works as a brige beetween bungee - (spigot) - our minigame
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