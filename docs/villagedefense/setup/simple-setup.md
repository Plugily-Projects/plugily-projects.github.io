---
id: simple
title: Simple Setup
sidebar_label: Simple Setup
---
---
Fast way to set up your arena

## Prepare

Check if you got all of these points for an complete arena setup

* Map for game and lobby \(can be on the same world\)
* The game can contain an secret well
  * See [How can I set up secret well?](simple-setup.md#how-can-i-set-up-secret-well)
  * See [How can I set up the shop?](simple-setup.md#how-can-i-set-up-the-shop)
* \[Multiworld\] If you want you can set up signs, therefore just place sign\(s\) on the location you want

:::note
Make sure to create an extra world for the maps you want to use for this plugin as it determines compatibility issues with other plugins.
:::

## Create instance

Start with the creation of your arena instance with the following command:

```text
/vd create <arenaname>
```

After creating the instance you can start editing it with the next command:

```text
/vd <arenaname> edit
```

Now we are at a very simple stage were you just need to follow the instructions on menu. After you finished an instruction you may proceed to the next one by typing the command again \(and repeat until finished\):

:::tip
 Make sure to read [**How can I set up the shop?**](simple-setup.md#how-can-i-set-up-the-shop)
:::

```text
/vd <arenaname> edit
```

After you have set all up you enter the command the last time and click on the rocket to validate your instance. It will finish the instance and you are ready to go! 

## Bungeecord Mode 

Follow the setup above. After you are done with all arenas you can simply enable Bungeemode on the [config.yml](../support/plugin-files-explained.md#config-yml). If it does not already exists it will create a file called [bungee.yml](../support/plugin-files-explained.md#bungee-yml) after restart. On that file you can edit some values that are explained [here](../support/plugin-files-explained.md#bungee-yml).

## How can I set up secret well?

You need to build a secret well to throw out rotten flesh there. If players throw there enough rotten flesh they will get an extra heart.

### **How it should be created:** 

![](https://i.imgur.com/SAoUarT.png)

\(2x2 hoppers and water above them\)

:::note
You can also create bigger secret well's
:::

### **Number of needed rotten flesh is based on a simple algorithm:**

**First heart:** 50 rotten flesh needed

**Next hearts:** bonus hearts \* in-game players size + 10

## How can I set up the shop?

It is nothing easier than just placing a chest \(double chest also working\) and adding the items you want to that chest. 

Make sure to give the item a price called orbs with the following command before you add it to the chest:

```text
/vda setprice <orbs>
```

:::note
If you want empty spaces on your chest it is required to add **REDSTONE\_BLOCK** to the chest
:::

Do not forget to register your chest after editing it. Therefore you type in 

```text
/vd <arenaname> edit
```

and choose the item to add an chest shop while looking at your shop. After that you can go on with your setup or validate it at the end if you are done with the setup. 

