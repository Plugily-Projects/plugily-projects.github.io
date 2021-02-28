---
id: api
title: Developer API
sidebar_label: DeveloperApi
---
---
Get the API and some examples

Full java documentation: [https://jd.plajer.xyz/minecraft/murdermystery](https://jd.plajer.xyz/minecraft/murdermystery)

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
                        <artifactId>murdermystery</artifactId>
                        <version>{version}</version>
                        <scope>provided</scope>
                 </dependency>
        </dependencies>
```

## Events

### **MMGameJoinAttemptEvent** \(**Cancellable**\)

The event is called when a player is trying to join an arena.

 **Example:**

```java
    @EventHandler
    public void onGameJoin(MMGameJoinAttemptEvent event){
        event.getPlayer().sendMessage("You have joined " + event.getArena().getID());
        event.setCancelled(true);
        event.getPlayer().sendMessage("Or maybe not? :D");
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena where player is attempting to join

### **MMGameStartEvent**

The event is called when the arena starts.

 **Example:**

```java
    @EventHandler
    public void onGameStart(MMGameStartEvent event){
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Game has started!");
        }
    }
```

> **event\#getArena\(\)** - returns event arena

### **MMGameLeaveAttemptEvent**

The event is called when a player is trying to leave an arena.

 **Example:**

```java
    @EventHandler
    public void onGameQuit(MMGameLeaveAttemptEvent event){
        event.getPlayer().sendMessage("You have quitted" + e.getArena().getID());
    }
```

> **event\#getPlayer\(\)** - returns player involved in this event
>
> **event\#getArena\(\)** - returns existing arena what player is attempting to leave

### **MMGameEndEvent**

The event is called when a game has ended.

 **Example:**

```java
    @EventHandler
    public void onGameStop(MMGameEndEvent event){
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Cool game? Maybe play again?");
        }
    }
```

> **event\#getArena\(\)** - returns existing arena that is stopped

### **MMGameStateChangeEvent**

The event is called when a game arena state has changed.

 **Example:**

```java
    @EventHandler
    public void onGameStop(MMGameStateChangeEvent event){
        ArenaState prev = event.getPreviousState();
        ArenaState curr = event.getState();
        for(Player p : event.getArena().getPlayers()){
            p.sendMessage("Game state changed from " + prev.getFormattedName() + " to " + curr.getFormattedName());
        }
    }
```

### **MMPlayerStatisticChangeEvent**

The event is called when the player receives a new statistic.

 **Example:**

```java
    @EventHandler
    public void onStatChange(MMPlayerStatisticChangeEvent event){
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

> **event\#getPreviousState\(\)** - returns arena state before change
>
> **event\#getState\(\)** - returns current arena state
>
> **event\#getArena\(\)** - returns existing arena that is stopped

## Stats storage <a id="stats-storage"></a>

### **Retrieving online players stats**

You can easily get online players stats using MM API - Stats Storage class.

 **Example:**

```java
    public int getWins(Player p){
        return StatsStorage.getUserStats(p, StatsStorage.StatisticType.WINS);
    }
```

Very easy, right?

### **Requesting sorted statistics of all players**

To access sorted statistics hMap with players you must call it from StatsStorage class.

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
 Be aware of IndexOutOfBoundsException as the list might be not enough big!
:::

### **Available statistic types**

| Statistic name \(enum\) | Statistic identifier \(string\) \(for advanced things\) | Persistent | Description |
| :---: | :---: | :---: | :---: |
| CONTRIBUTION\_DETECTIVE | contribdetective | true | Points for chances of being detective |
| CONTRIBUTION\_MURDERER | contribmurderer | true | Points for chances of being murderer |
| DEATHS | deaths | true | Deaths amount |
| GAMES\_PLAYED | gamesplayed | true | Total games played |
| WINS | wins | true | Wins amount |
| LOSES | loses | true | Loses amount |
| HIGHEST\_SCORE | highestscore | true | Highest score in-game |
| KILLS | kills | true | Total kills amount |
| LOCAL\_SCORE | local\_score | false  | In-game current score amount |
| LOCAL\_PRAISES | local\_praises | false  | In-game praises amount |
| LOCAL\_CURRENT\_PRAY | local\_pray | false  | In-game current activated pray perk ID |
| LOCAL\_GOLD | local\_gold | false  | In-game current gold amount |
| LOCAL\_KILLS | local\_kills | false  | In-game current kills amount \(mainly for murderer\) |

## Manipulating player join/leave attempts

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
You should check is arena name exist otherwise it will throw NullPointerException
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
 You should check is arena isn't null otherwise it will throw NullPointerException
:::

