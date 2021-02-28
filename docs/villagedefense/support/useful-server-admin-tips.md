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

