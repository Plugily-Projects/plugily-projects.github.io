---
id: placeholderapi
title: PlaceholderAPI
sidebar_label: PlaceholderAPI
---
---
'Search for different placeholders, to customize your plugin experience'

These are the **PlaceholderAPI** \(PAPI\) placeholders for TheBridge. They are included with the plugin, so you do not have to download an expansion from the papi ecloud.

## Statistics placeholders

| Placeholder                       | Description                              |
|-----------------------------------|------------------------------------------|
| %thebridge\_kills%                | Shows your kills                         |
| %thebridge\_deaths%               | Shows your deaths                        |
| %thebridge\_games\_played%        | Shows your played games count            |
| %thebridge\_wins%                 | Shows all wins a player got              |
| %thebridge\_loses%                | Shows all loses a player got             |
| %thebridge\_points%               | Shows all scored points a player got     |
| %thebridge\_level%                | Shows your current level                 |
| %thebridge\_exp%                  | Shows your exp amount \(decimal number\) |
| %thebridge\_exp\_to\_next\_level% | Shows amount of exp need to level up     |
| %thebridge\_arena\_players\_online% | Shows the player amount of all arenas together                                           |
| %thebridge\_base\_color%                  | Returns the base color of the player as color |


## Arena-related placeholders

These are special PAPI placeholders that can be defined for each arena you have. You need to replace {arena} with your arena name.

:::note
Your arena name is "coaster" -&gt; %thebridge\_coaster:players%
:::

| Placeholder                        | Description                                                                     |
|------------------------------------|---------------------------------------------------------------------------------|
| %thebridge\_{arena}:players%       | Shows the amount of players in arena                                            |
| %thebridge\_{arena}:max\_players%  | Shows the max players in arena                                                  |
| %thebridge\_{arena}:state%         | Shows the current state raw enum name eg. STARTING                              |
| %thebridge\_{arena}:state\_pretty% | Shows the prettified name of enum eg. Waiting \(instead WAITING\_FOR\_PLAYERS\) |
| %thebridge\_{arena}:mapname%       | Shows the name of arena map                                                     |
| %thebridge\_{arena}:mode%          | Shows the mode \(eg. POINTS\)                                                   |
| %thebridge\_{arena}:basesize%      | Shows the base size of the arena                                                |
| %thebridge\_{arena}:modevalue%     | The value to reach to trigger the mode goal                                     |
| %thebridge\_{arena}:resetblocks%   | Shows after which round it will reset the placed blocks                         |


