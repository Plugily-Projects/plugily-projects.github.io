---
id: api
title: Developer API
sidebar_label: DeveloperApi
---
---
Get the API and some examples

Full java documentation: [https://jd.plajer.xyz/minecraft/buildbattle](https://jd.plajer.xyz/minecraft/buildbattle)

:::caution
 Contents may be not up to date! Please use java docs instead. Here you can only get some simple examples.
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
                        <artifactId>buildbattle</artifactId>
                        <version>{version}</version>
                        <scope>provided</scope>
                 </dependency>
        </dependencies>
```

## Events

### **BBEvent** \(**Generic**\)

The event is called **everytime** any Build Battle event is called because it's a generic event.

**Example:**

```js
    @EventHandler
    public void onEventCall(BBEvent event){
        if(event instanceof BBGameChangeStateEvent){
            Bukkit.getConsoleSender().sendMessage("BBGameChangeStateEvent was called!");
        }
    }
```

> **event\#getArena\(\)** - returns event arena for which event was called

### **BBGameJoinEvent** \(**Cancellable**\)

The event is called when a player is trying to join an arena.

**Example:**

```js
    @EventHandler
    public void onGameJoin(BBGameJoinEvent event){
        event.getPlayer().sendMessage("You have joined " + event.getArena().getID());
        event.setCancelled(true);
        event.getPlayer().sendMessage("Or maybe not? :D");
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena where player is attempting to join

### **BBGameStartEvent**

The event is called when the arena starts.

**Example:**

```js
    @EventHandler
    public void onGameStart(BBGameStartEvent event){
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Game has started!");
        }
    }
```

> **event\#getArena\(\)** - returns event arena

### **BBGameLeaveEvent**

The event is called when a player is trying to leave an arena.

**Example:**

```js
    @EventHandler
    public void onGameQuit(BBGameLeaveEvent event){
        event.getPlayer().sendMessage("You have quitted" + e.getArena().getID());
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena what player is attempting to leave

### **BBGameEndEvent**

The event is called when a game has ended.

**Example:**

```js
    @EventHandler
    public void onGameStop(BBGameStartEvent event){
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Cool game? Maybe play again?");
        }
    }
```

> **event\#getArena\(\)** - returns existing arena that is stopped

### **BBGameStateChangeEvent**

The event is called when a game arena state has changed.

**Example:**

```js
    @EventHandler
    public void onGameStop(BBGameStateChangeEvent event){
        ArenaState prev = event.getPreviousState();
        ArenaState curr = event.getState();
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Game state changed from " + prev.getFormattedName() + " to " + curr.getFormattedName());
        }
    }
```

> **event.getPreviousState\(\)** - returns arena state before change
>
> **event.getState\(\)** - returns current arena state
>
> **event\#getArena\(\)** - returns existing arena that is stopped

## Stats storage <a id="stats-storage"></a>

### **Retrieving online players stats**

You can easily get online players stats using BB3 API - Stats Storage class.

**Example:**

```js
    public int getWins(Player p){
        return StatsStorage.getUserStats(p, StatsStorage.StatisticType.WINS);
    }
```

Very easy, right?

### **Requesting sorted statistics of all players**

To access sorted statistics hMap with players you must call it from StatsStorage class.

**Example:**

```js
    public void printBestStats(StatsStorage.StatisticType statistic){
        Map<UUID, Integer> statsMap = StatsStorage.getStats(statistic);
        UUID[] uuidsArray = (UUID[]) StatsStorage.getStats(statistic).keySet().toArray();
        for(int i = 0; i < 10; i++){
            Bukkit.broadcastMessage("#" + i + " UUID: " + uuidsArray[i] + ", stats: " + statsMap.get(uuidsArray[i]));
        }
    }
```

:::caution
Be aware of IndexOutOfBoundsException as the list might be not enough big!
:::

### **Available statistic types**

| Statistic name \(enum\) | Statistic identifier \(string\) \(for advanced things\) |
| :---: | :---: |
| BLOCKS\_BROKEN | blocksbroken |
| BLOCKS\_PLACED | blocksplaced |
| GAMES\_PLAYED | gamesplayed |
| WINS | wins |
| LOSES | loses |
| HIGHEST\_WIN | highestwin |
| PARTICLES\_USED | particles |

## Manipulating player join/leave attempts <a id="manipulating-player-join-leave-attempts"></a>

### Join attempt <a id="join-attempt"></a>

To force player to join specified arena you can use our `ArenaManager` class.

```js
  public void sendPlayerToArena(String arena, Player player){
    ArenaManager.joinAttempt(player, ArenaRegistry.getArena(arena));
  }

  // or

  public void sendPlayerToArena(Arena arena, Player player){
    ArenaManager.joinAttempt(player, arena);
  }
```

:::warning
You should check is arena name exist otherwise it will throw NullPointerException
:::

 After that you can check for `#isCancelled()` if join attempt was cancelled or not.

### Leave attempt <a id="leave-attempt"></a>

You can also use `ArenaManager` class to force player to quit arena.

```js
  public void forcePlayerQuit(Player player){
    Arena arena = ArenaRegistry.getArena(player);

    ArenaManager.leaveAttempt(player, arena);
  }
```

:::warning
 You should check is arena isn't null otherwise it will throw NullPointerException
:::

