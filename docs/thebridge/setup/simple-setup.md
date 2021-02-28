---
id: simple
title: Simple Setup
sidebar_label: Simple Setup
---
---
Fast way to set up your arena

## Prepare

Check if you got all of these points for a complete arena setup

* Map for game and lobby \(can be on the same world\)
* The game contains different modes
  * POINTS
    * This mode means that the goal of the game is to reach x amount of points by jumping into the opponent base portal
  * HEARTS
    * This mode means that the goal of the game is to be the last team living. After x amount of points the base will be out and players die. 
* \[Multiworld\] If you want you can set up signs, therefore just place sign\(s\) on the location you want
* \[Base Count\] You can have up to 16 bases without problems and player limitation

:::note
Make sure to create an extra world for the maps you want to use for this plugin as it determines compatibility issues with other plugins.
:::

## Create instance

Start with the creation of your arena instance with the following command:

```text
/tb create <arenaname>
```

After creating the instance you can start editing it with the next command:

```text
/tb <arenaname> edit
```

Now we are at a very simple stage where you just need to follow the instructions on the menu. After you finished an instruction you may proceed to the next one by typing the command again \(and repeat until finished\):

Also see [FAQ ](simple-setup.md#faq)for some further reading about some options.

```text
/tb <arenaname> edit
```

After you have set all up you enter the command the last time and click on the rocket to validate your instance. It will finish the instance and you are ready to go! 

## Bungeecord Mode 

Follow the setup above. After you are done with all arenas you can simply enable Bungeemode on the [config.yml](../support/plugin-files-explained.md#config-yml). If it does not already exists it will create a file called [bungee.yml](../support/plugin-files-explained.md#bungee-yml) after restart. On that file you can edit some values that are explained [here](../support/plugin-files-explained.md#bungee-yml).

## FAQ

### How to setup cages?

Make sure to only select the floor of the cage that is filled with material

### Where should I set the arena locations \(cuboid\)?

Make sure that the arena locations include the whole game map, where players should be able to play the game. So it should include the bases, the line and some space so players can build on the line.

