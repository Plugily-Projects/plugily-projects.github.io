---
id: servertips
title: Useful server admin tips
sidebar_label: Useful server admin tips
---
---
This section contains some useful tips to enhance your Village Defense server!


:::caution
This server admin tips were originally made for VillageDefense, so may change the kits
:::

:::warning
**Warn!** These tips **should be EULA friendly, but may not**!
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

