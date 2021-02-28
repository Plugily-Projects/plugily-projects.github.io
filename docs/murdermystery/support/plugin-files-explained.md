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

* [Latest arenas.yml](https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/arenas.yml)

### bungee.yml

BungeeCord configuration is there. You must enable bungee support first in **config.yml**. Set **BungeeActivated** to **true** to enable it.

* [Latest bungee.yml](https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/bungee.yml)

:::note
 **What is MOTD Manager?** MOTD Manager modifies server's MOTD to make it readable by Server Bungeecord systems like [Timo Cloud](https://www.spigotmc.org/resources/timocloud-the-most-efficient-cloud-system.53757/), [CloudNet ](https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/)and [Bungee Signs](https://www.spigotmc.org/resources/bungeesigns.6563/). MOTD is based on game state if that option is enabled.
:::

### config.yml

config.yml is very well commented. No need to explain more any part of it.

* [Latest config.yml](https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/config.yml)

### mysql.yml

Here you can set up MySQL plugin configuration. You need to enable MySQL first in **config.yml**. Set **DatabaseActivated** option to **true**.

* [Latest mysql.yml](https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/mysql.yml)

## Additional content

### Language and locales

Plugin is 95% translatable via **language.yml** file.

* [Latest language.yml](https://raw.githubusercontent.com/Plugily-Projects/MurderMystery/master/src/main/resources/language.yml)

However, you can use localization support which is implemented in MM.

To change locale of plugin go to **config.yml** and modify **locale** value.
:::warning
Our locales system generates temporary files on `~/locales`

The **only file you should edit** is the `language.yml` on the main plugin folder!
:::
### How can I edit my locale?
:::important
We have been looking for a perfect solution for a very long time.
Currently you can change your `locale` by editing the `language.yml`.
**It works like this:** The plugin loads the selected locale and everything in the language.yml that doesn't match the standard English sentence. It overwrites the locale and so you have your locale overwritten.
So always remember to edit only in the `language.yml`.
:::
###  **Valid localizations \(gathered via POEditor API\):**

```text
#    default - English language. Uses 'language.yml'.
#    de - Deutsche sprache          pl - Język polski
#    fr - Langue française          cn - 简体中文
#    zh_tw - 中文(繁體)              kr - 한국어
#    id - Bhasa Indonesia           hu - Magyar nyelv
#    cs - Český jazyk               ro - Limba română
#    vn - Tiếng Việt                it - Lingua italiana
#    ru - Русский язык              es - Idioma español
#    nl - Nederlandse taal          pt_br - Português (Brasil)
#    tr - Türk dili                 sk - Slovenský jazyk
#    ja - Japanese                  af - Afrikaans
#    dk - Danish                    th - Thai
#    uk - Ukrainian
```

:::tip
 [You can always translate our plugin for free by joining here \(click\)](https://translate.plugily.xyz)
:::

## Stats storage types

### **Current stats storage types for player statistics:**

* Flat file \(.yml\) - enabled by default
* MySQL \(database\) - can be enabled in config.yml \(see [mysql.yml](plugin-files-explained.md#mysql-yml)\)

