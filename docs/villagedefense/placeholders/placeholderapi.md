---
id: placeholderapi
title: PlaceholderAPI
sidebar_label: PlaceholderAPI
---
---
'Search for different placeholders, to customize your plugin experience'

These are the **PlaceholderAPI** \(PAPI\) placeholders for VillageDefense. They are included with the plugin, so you do not have to download an expansion from the papi ecloud.

## Statistics placeholders

| Placeholder                            | Description                              |
|----------------------------------------|------------------------------------------|
| %villagedefense\_kills%                | Shows your zombie kills                  |
| %villagedefense\_deaths%               | Shows your deaths                        |
| %villagedefense\_games\_played%        | Shows your played games count            |
| %villagedefense\_highest\_wave%        | Shows the highest wave you survived      |
| %villagedefense\_level%                | Shows your current level                 |
| %villagedefense\_exp%                  | Shows your exp amount \(decimal number\) |
| %villagedefense\_exp\_to\_next\_level% | Shows amount of exp need to level up     |


## Arena-related placeholders

These are special PAPI placeholders that can be defined for each arena you have. You need to replace {arena} with your arena name.

:::note
Your arena name is "coaster" -&gt; %villagedefense\_coaster:players%
:::

| Placeholder                             | Description                                                                     |
|-----------------------------------------|---------------------------------------------------------------------------------|
| %villagedefense\_{arena}:players%       | Shows the amount of players in arena                                            |
| %villagedefense\_{arena}:max\_players%  | Shows the max players in arena                                                  |
| %villagedefense\_{arena}:state%         | Shows the current state raw enum name eg. STARTING                              |
| %villagedefense\_{arena}:state\_pretty% | Shows the prettified name of enum eg. Waiting \(instead WAITING\_FOR\_PLAYERS\) |
| %villagedefense\_{arena}:mapname%       | Shows the name of arena map                                                     |
| %villagedefense\_{arena}:wave%          | Shows the current wave                                                          |




