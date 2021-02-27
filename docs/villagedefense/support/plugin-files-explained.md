---
id: files
title: Plugin files explained
sidebar_label: Plugin files explained
---
---
a.k.a Plugin configuration section

## Basic files

### arenas.yml

This file is only for in-game usage. It's not recommended to edit it while the server is on! The file contains all information about created arenas.

* [Latest arenas.yml](https://raw.githubusercontent.com/Plugily-Projects/Village_Defense/master/src/main/resources/arenas.yml)

### bungee.yml

BungeeCord configuration is there. You must enable bungee support first in **config.yml**. Set **BungeeActivated** to **true** to enable it.

* [Latest bungee.yml](https://raw.githubusercontent.com/Plugily-Projects/Village_Defense/master/src/main/resources/bungee.yml)

:::note
 **What is MOTD Manager?** MOTD Manager modifies server's MOTD to make it readable by Server Bungeecord systems like [Timo Cloud](https://www.spigotmc.org/resources/timocloud-the-most-efficient-cloud-system.53757/), [CloudNet ](https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/)and [Bungee Signs](https://www.spigotmc.org/resources/bungeesigns.6563/). MOTD is based on game state if that option is enabled.
:::

### config.yml

config.yml is very well commented. No need to explain more any part of it.

* [Latest config.yml](https://raw.githubusercontent.com/Plugily-Projects/Village_Defense/master/src/main/resources/config.yml)

### mysql.yml

Here you can set up MySQL plugin configuration. You need to enable MySQL first in **config.yml**. Set **DatabaseActivated** option to **true**.

* [Latest mysql.yml](https://raw.githubusercontent.com/Plugily-Projects/Village_Defense/master/src/main/resources/mysql.yml)

## Additional content

### Language and locales

Plugin is 95% translatable via **language.yml** file.

* [Latest language.yml](https://raw.githubusercontent.com/Plugily-Projects/Village_Defense/master/src/main/resources/language.yml)

:::warning
## Attention

As we got locales the plugin will create other files on the folder `/locales`

The **only file you should edit** is the`language.yml` on the main plugin folder!
:::

However, you can use localization support which is implemented in MM.

To change locale of plugin go to **config.yml** and modify **locale** value.

###  **Valid localizations \(gathered via POEditor API\):**

```text
#    default - English language. Uses 'language.yml'.
#    de - Deutsche sprache          pl - Język polski
#    es - Idioma español            id - Bhasa Indonesia
#    fr - Langue française          vn - Tiếng việt
#    hu - Magyar nyelv              cn - 简体中文
#    ro - Limba română              cs - Český jazyk
#    pt_br - Português Brasileiro   lt - Lietuvių kalba
#    it - Lingua italiana           ru - Русский язык
#    kr - Korean                    nl - Dutch
#    zh - Chinese (Traditional)
```

:::tip
 **Tip!** [You can always translate our plugin for free by joining here \(click\)](https://translate.plugily.xyz)
:::

## Stats storage types

### **Current stats storage types for player statistics:**

* Flat file \(.yml\) - enabled by default
* MySQL \(database\) - can be enabled in config.yml \(see [mysql.yml](plugin-files-explained.md#mysql-yml)\)

