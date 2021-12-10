"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9797],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(r),s=a,y=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8349:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),o=["components"],i={id:"scoreboard",title:"Scoreboard",sidebar_label:"Scoreboard"},p=void 0,d={unversionedId:"murdermystery/placeholders/scoreboard",id:"murdermystery/placeholders/scoreboard",title:"Scoreboard",description:"---",source:"@site/docs/murdermystery/placeholders/scoreboard.md",sourceDirName:"murdermystery/placeholders",slug:"/murdermystery/placeholders/scoreboard",permalink:"/murdermystery/placeholders/scoreboard",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/murdermystery/placeholders/scoreboard.md",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1614471297,formattedLastUpdatedAt:"2/28/2021",frontMatter:{id:"scoreboard",title:"Scoreboard",sidebar_label:"Scoreboard"},sidebar:"murdermystery",previous:{title:"PlaceholderAPI",permalink:"/murdermystery/placeholders/placeholderapi"},next:{title:"DeveloperApi",permalink:"/murdermystery/development/api"}},u=[],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Find your variable for the ingame scoreboard"),(0,l.kt)("p",null,"These are the ",(0,l.kt)("strong",{parentName:"p"},"internal")," placeholders for MurderMystery. They are included with the plugin, so you do not have to download them."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variables"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%MIN","_","PLAYERS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum players size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%MAX","_","PLAYERS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum players size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%PLAYERS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of players in arena")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%INNOCENTS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of innocent players alive ","(","including detective",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%TIME%"),(0,l.kt)("td",{parentName:"tr",align:null},"Current arena timer ","(","ex. 10 seconds before start",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%FORMATTED","_","TIME%"),(0,l.kt)("td",{parentName:"tr",align:null},"Formatted above-mentioned placeholder ","(","ex. 0m10s",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%MAPNAME%"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%SCORE%"),(0,l.kt)("td",{parentName:"tr",align:null},"Current in-game score of player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%KILLS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Current in-game kills of murderer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%ROLE%"),(0,l.kt)("td",{parentName:"tr",align:null},"Role of player - murderer, innocent, detective")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%DETECTIVE","_","STATUS%"),(0,l.kt)("td",{parentName:"tr",align:null},"Status of detective - alive, bow dropped, bow picked")))),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/wiki/placeholderapi-placeholders/"},(0,l.kt)("strong",{parentName:"a"},"placeholders")," "),"from ",(0,l.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/placeholderapi.6245/"},(0,l.kt)("strong",{parentName:"a"},"PlaceholderAPI")),"."))}m.isMDXComponent=!0}}]);