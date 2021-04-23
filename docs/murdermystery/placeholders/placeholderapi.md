---
id: placeholderapi
title: PlaceholderAPI
sidebar_label: PlaceholderAPI
---
---
'Search for different placeholders, to customize your plugin experience'

These are the **PlaceholderAPI** \(PAPI\) placeholders for MurderMystery. They are included with the plugin, so you do not have to download an expansion from the papi ecloud.

## Statistics placeholders

| Placeholder                     | Description                                                                                      |
|---------------------------------|--------------------------------------------------------------------------------------------------|
| %murdermystery\_kills%          | Shows your total in-game kills \(includes innocent kills, murderer kills, detective kills, etc\) |
| %murdermystery\_deaths%         | Shows your deaths                                                                                |
| %murdermystery\_games\_played%  | Shows the total number of games you have played                                                  |
| %murdermystery\_wins%           | Shows your total win count                                                                       |
| %murdermystery\_loses%          | Shows your total loss count                                                                      |
| %murdermystery\_highest\_score% | Shows your highest score point                                                                   |
| %murdermystery\_arena\_players\_online% | Shows the player amount of all arenas together                                           |


## Arena-related placeholders

These are special PAPI placeholders that can be defined for each arena you have. You need to replace {arena} with your arena name.

:::note
Your arena name is "coaster" -&gt; %murdermystery\_coaster:players%
:::

| Placeholder                            | Description                                                               |
|----------------------------------------|---------------------------------------------------------------------------|
| %murdermystery\_{arena}:players%       | Shows the number of players in {arena}                                    |
| %murdermystery\_{arena}:max\_players%  | Shows the max players allowed in {arena}                                  |
| %murdermystery\_{arena}:state%         | Shows the current state raw enum name \(e.g. STARTING\)                   |
| %murdermystery\_{arena}:state\_pretty% | Shows the prettified name of the enum \(e.g. Waiting instead of WAITING\) |
| %murdermystery\_{arena}:mapname%       | Shows the name of the arena map                                           |


