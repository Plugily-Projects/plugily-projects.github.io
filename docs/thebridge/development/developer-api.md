---
id: api
title: Developer API
sidebar_label: DeveloperApi
---
---
Get the API and some examples

Full java documentation: [https://jd.plugily.xyz/apidocs/minecraft/thebridge](https://jd.plugily.xyz/apidocs/minecraft/thebridge/)

:::caution
 **Danger!** Contents may be not up to date! Please use java docs instead. Here you can only get some simple examples.
:::

## Maven repository <a id="maven"></a>

Maven repository usually contains latest releases, if not, please check in few days if release is there.

**How to access repo:**

1. Add repository

```markup
        <repositories>
            <repository>
                <id>plugilyprojects</id>
                <url>https://maven.plugily.xyz</url>
            </repository>
        </repositories>
```

  **2**. Add the dependency

```markup
        <dependencies>
                 <dependency>
                        <groupId>plugily.projects</groupId>
                        <artifactId>thebridge</artifactId>
                        <version>{version}</version>
                        <scope>provided</scope>
                 </dependency>
        </dependencies>
```

## Events

### **TBGameJoinAttemptEvent** \(**Cancellable**\)

The event is called when a player is trying to join an arena.

 **Example:**

```java
    @EventHandler
    public void onGameJoin(TBGameJoinAttemptEvent event){
        e.getPlayer().sendMessage("You have joined " + e.getArena().getID());
        e.setCancelled(true);
        e.getPlayer().sendMessage("Or maybe not? :D");
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena where player is attempting to join
>
> **event\#isCancelled\(\)** - returns true if event is cancelled

:::warning
 **Warn!** A message from language file is sent to the player when the attempt is cancelled \(see `In-Game.Join-Cancelled-Via-API` in language.yml\)
:::

### **TBGameStartEvent**

The event is called when the arena starts.

 **Example:**

```java
    @EventHandler
    public void onGameStart(TBGameStartEvent event){
        for(Player p : e.getArena().getPlayers()){
            p.sendMessage("Game has started!");
        }
    }
```

> **event\#getArena\(\)** - returns event arena

### **TBGameLeaveAttemptEvent**

The event is called when a player is trying to leave an arena.

**Example:**

```java
    @EventHandler
    public void onGameQuit(TBGameLeaveAttemptEvent event){
        e.getPlayer().sendMessage("You have quitted" + e.getArena().getID());
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena what player is attempting to leave

### **TBGameStopEvent**

The event is called when a game is stopped.

**Example:**

```java
    @EventHandler
    public void onGameStop(TBGameStopEvent event){
        for(Player p : e.getArena().getPlayers()){
            p.sendMessage("You've lost the game! Maybe play again?");
        }
    }
```

> **event\#getArena\(\)** - returns existing arena that is stopped

### **TBPlayerChooseKitEvent** \(**Cancellable**\)

The event is called when the player chose kit in game.

**Example:**

```java
    @EventHandler
    public void onKitChoose(TBPlayerChooseKitEvent event){
        Kit kit = e.getKit();
        if(kit.getName().contains("knight")){
            e.getPlayer().sendMessage("Knight kits aren't for you mate! Use archer kit instead!");
            e.setCancelled(true);
        }
    }
```

> **event\#getArena\(\)** - returns arena player is playing \(player is always in arena when this event is called\)
>
> **event\#getPlayer\(\)** - returns event player
>
> **event\#getKit\(\)** - returns selected kit
>
> **event\#isCancelled\(\)** - returns true if event is cancelled

:::caution
 **Danger!** Cancelling the event doesn't really influence the in-game kit chooser, `#isCancelled()`should be used for external add-ons!
:::

### \*\*\*\*

### **TBPlayerChooseBaseEvent** \(**Cancellable**\)

The event is called when the player chose base in game.

**Example:**

```java
    @EventHandler
    public void onKitChoose(TBPlayerChooseBaseEvent event){
        Base base = e.getBase();
        if(base.getSize == 2){
            e.getPlayer().sendMessage("Haha no one can join this base");
            e.setCancelled(true);
        }
    }
```

> **event\#getArena\(\)** - returns arena player is playing \(player is always in arena when this event is called\)
>
> **event\#getPlayer\(\)** - returns event player
>
> **event\#getBase\(\)** - returns selected base
>
> **event\#isCancelled\(\)** - returns true if event is cancelled

:::caution
 **Danger!** Cancelling the event doesn't really influence the in-game base chooser, `#isCancelled()`should be used for external add-ons!
:::

### **TBGameStateChangeEvent**

The event is called when arena game state changes.

**Example:**

```java
    @EventHandler
    public void onGameStateChange(TBGameStateChangeEvent event){
        String state = e.getArenaState().getFormattedName();
        for(Player p : e.getArena().getPlayers()){
            p.sendMessage("Arena state changed to " + state);
        }
    }
```

> **event\#getArena\(\)** - returns event arena
>
> **event\#getArenaState\(\)** - returns current arena state

### **TBPlayerStatisticChangeEvent**

The event is called when the player receives a new statistic.

**Example:**

```java
    @EventHandler
    public void onStatChange(TBPlayerStatisticChangeEvent event){
        StatisticType stat = e.getStatisticType();
        int statNumber = e.getNumber();
        e.getPlayer().sendMessage("Your statistic " + stat.getName() + " has changed to " + statNumber);
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns arena player is playing \(player is always in arena when this event is called\)
>
> **event\#getStatisticType\(\)** - returns statistic of StatsStorage.StatisticType enum
>
> **event\#getNumber\(\)** - returns current value of statistic

## Stats storage <a id="stats-storage"></a>

### **Retrieving online players stats**

You can easily get online players stats using Village Defense API - Stats Storage class.

**Example:**

```java
    public int getKills(Player p){
        return StatsStorage.getUserStats(p, StatsStorage.StatisticType.KILLS);
    }
```

Very easy, right?

### **Requesting sorted statistics of all players**

To access sorted statistics Map with players you must call it from StatsStorage class.

**Example:**

```java
    public void printBestStats(StatsStorage.StatisticType statistic){
        Map<UUID, Integer> statsMap = StatsStorage.getStats(statistic);
        UUID[] uuidsArray = (UUID[]) StatsStorage.getStats(statistic).keySet().toArray();
        for(int i = 0; i < 10; i++){
            Bukkit.broadcastMessage("#" + i + " UUID: " + uuidsArray[i] + ", stats: " + statsMap.get(uuidsArray[i]));
        }
    }
```

:::caution
**Danger!** Be aware of IndexOutOfBoundsException as the list might be not enough big!
:::

### **Available statistic types**

:::caution
**Danger!** Orbs statistic is temporary and shouldn't be used for out game usages!
:::

| Statistic name \(enum\)                        | Statistic identifier \(string\) \(for advanced things\) | Description                               |
|------------------------------------------------|---------------------------------------------------------|-------------------------------------------|
| KILLS                                          | kills                                                   | Total kills amount                        |
| DEATHS                                         | deaths                                                  | Total deaths amount                       |
| GAMES\_PLAYED                                  | gamesplayed                                             | Total games played                        |
| LEVEL                                          | level                                                   | The current level a player got            |
| XP                                             | xp                                                      | The current xp a player got               |
| WINS                                           | wins                                                    | Get all wins a player got                 |
| LOSES                                          | loses                                                   | Get all loses a player got                |
| SCORED\_POINTS                                 | points                                                  | Get all scored points a player got        |
| LOCAL\_KILLS **\(non-persistent\)**            | local\_kills                                            | Get kills a player got on a round         |
| LOCAL\_DEATHS **\(non-persistent\)**           | local\_deaths                                           | Get deaths a player got on a round        |
| LOCAL\__SCORED\__POINTS **\(non-persistent\)** | local\__scored_\_points                                 | Get scored points a player got on a round |

## Kit registry <a id="kit-registry"></a>

Registering new kit is quite simple. We need to implement all methods from abstract Kit class and edit it by yourself. After that just register it via KitRegistry.

**Example:**

```java
        //This kit will be premium
        Kit supporter = new PremiumKit() {
            //We need to implement methods from abstract Kit class

            //Permissions needed to unlock it, if it is free just return true
            @Override
            public boolean isUnlockedByPlayer(Player p) {
                return p.hasPermission("my.super.kit");
            }

            //Items given on game start
            @Override
            public void giveKitItems(Player player) {
                player.getInventory().addItem(new ItemStack(Material.IRON_AXE, 1));
                player.getInventory().addItem(new ItemStack(Material.GOLDEN_APPLE, 5));
            }

            //Material represented by this kit in the kit menu. Must be unique!
            @Override
            public Material getMaterial() {
                return Material.GOLDEN_APPLE;
            }

            //Items given every respawn if needed
            @Override
            public void reStock(Player player) {
                player.getInventory().addItem(new ItemStack(Material.GOLDEN_APPLE, 1));
            }
        };
        //Now just set kit name and description and register it via KitRegistry
        supporter.setName("Supporter");
        supporter.setDescription(new String[]{ChatColor.GREEN + "My super description"});
        KitRegistry.registerKit(supporter);
```

## Manipulating player join/leave attempts <a id="manipulating-player-join-leave-attempts"></a>

### Join attempt <a id="join-attempt"></a>

To force player to join specified arena you can use our `ArenaManager` class.

```java
  public void sendPlayerToArena(String arena, Player player){
    ArenaManager.joinAttempt(player, ArenaRegistry.getArena(arena));
  }

  // or

  public void sendPlayerToArena(Arena arena, Player player){
    ArenaManager.joinAttempt(player, arena);
  }
```

:::warning
**Warn!** You should check is arena name exist otherwise it will throw NullPointerException
:::

After that you can check for `#isCancelled()` if join attempt was cancelled or not.

### Leave attempt <a id="leave-attempt"></a>

You can also use `ArenaManager` class to force player to quit arena.

```java
  public void forcePlayerQuit(Player player){
    Arena arena = ArenaRegistry.getArena(player);

    ArenaManager.leaveAttempt(player, arena);
  }
```

:::warning
**Warn!** You should check is arena isn't null otherwise it will throw NullPointerException
:::

