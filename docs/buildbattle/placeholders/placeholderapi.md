---
id: placeholderapi
title: PlaceholderAPI
sidebar_label: PlaceholderAPI
---
---
'Search for different placeholders, to customize your plugin experience'

These are the **PlaceholderAPI** \(PAPI\) placeholders for BuildBattle. They are included with the plugin, so you do not have to download an expansion from the papi ecloud.

## Statistics placeholders

| Placeholder                           | Description                                     |
|---------------------------------------|-------------------------------------------------|
| %buildbattle\_blocks\_broken%         | Shows your total in-game broken blocks          |
| %buildbattle\_blocks\_placed%         | Shows your total in-game placed blocks          |
| %buildbattle\_games\_played%          | Shows the total number of games you have played |
| %buildbattle\_wins%                   | Shows your total win count                      |
| %buildbattle\_loses%                  | Shows your total loss count                     |
| %buildbattle\_highest\_win%           | Shows your highest points as first place        |
| %buildbattle\_highest\_points%        | Shows your highest points at all                |
| %buildbattle\_total\_points\_earned%  | Shows your total points that you earned         |
| %buildbattle\_particles\_used%        | Shows your total used particles count           |
| %buildbattle\_arena\_players\_online% | Shows the player amount of all arenas together  |



## Arena-related placeholders

These are special PAPI placeholders that can be defined for each arena you have. You need to replace {arena} with your arena name.

:::note
Your arena name is "coaster" -&gt; %buildbattle\_coaster:players%
:::

| Placeholder                              | Description                                                               |
|------------------------------------------|---------------------------------------------------------------------------|
| %buildbattle\_{arena}:players%           | Shows the number of players in {arena}                                    |
| %buildbattle\_{arena}:max\_players%      | Shows the max players allowed in {arena}                                  |
| %buildbattle\_{arena}:state%             | Shows the current state raw enum name \(e.g. STARTING\)                   |
| %buildbattle\_{arena}:state\_pretty%     | Shows the prettified name of the enum \(e.g. Waiting instead of WAITING\) |
| %buildbattle\_{arena}:mapname%           | Shows the name of the arena map                                           |
| %buildbattle\_{arena}:arenatype%         | Shows the arena type raw enum name \(e.g. SOLO\)                          |
| %buildbattle\_{arena}:arenatype\_pretty% | Shows the prettified name of the enum \(e.g. Classic instead of SOLO\)    |
