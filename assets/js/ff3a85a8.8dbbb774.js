"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7132],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},741:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],o={id:"files",title:"Plugin files explained",sidebar_label:"Plugin files explained"},s=void 0,c={unversionedId:"thebridge/support/files",id:"thebridge/support/files",title:"Plugin files explained",description:"---",source:"@site/docs/thebridge/support/plugin-files-explained.md",sourceDirName:"thebridge/support",slug:"/thebridge/support/files",permalink:"/thebridge/support/files",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/thebridge/support/plugin-files-explained.md",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1615746219,formattedLastUpdatedAt:"3/14/2021",frontMatter:{id:"files",title:"Plugin files explained",sidebar_label:"Plugin files explained"},sidebar:"thebridge",previous:{title:"DeveloperApi",permalink:"/thebridge/development/api"},next:{title:"FAQ",permalink:"/thebridge/support/faq"}},p=[{value:"Basic files",id:"basic-files",children:[{value:"arenas.yml",id:"arenasyml",children:[],level:3},{value:"bungee.yml",id:"bungeeyml",children:[],level:3},{value:"config.yml",id:"configyml",children:[],level:3},{value:"mysql.yml",id:"mysqlyml",children:[],level:3},{value:"rewards.yml",id:"rewardsyml",children:[],level:3}],level:2},{value:"Additional content",id:"additional-content",children:[{value:"Language and locales",id:"language-and-locales",children:[],level:3},{value:"How can I edit my locale?",id:"how-can-i-edit-my-locale",children:[],level:3},{value:"<strong>Valid localizations (gathered via POEditor API):</strong>",id:"valid-localizations-gathered-via-poeditor-api",children:[],level:3}],level:2},{value:"Stats storage types",id:"stats-storage-types",children:[{value:"<strong>Current stats storage types for player statistics:</strong>",id:"current-stats-storage-types-for-player-statistics",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"a.k.a Plugin configuration section"),(0,i.kt)("h2",{id:"basic-files"},"Basic files"),(0,i.kt)("h3",{id:"arenasyml"},"arenas.yml"),(0,i.kt)("p",null,"This file is only for in-game usage. It's not recommended to edit it while the server is on! The file contains all information about created arenas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/arenas.yml"},"Latest arenas.yml"))),(0,i.kt)("h3",{id:"bungeeyml"},"bungee.yml"),(0,i.kt)("p",null,"BungeeCord configuration is there. You must enable bungee support first in ",(0,i.kt)("strong",{parentName:"p"},"config.yml"),". Set ",(0,i.kt)("strong",{parentName:"p"},"BungeeActivated")," to ",(0,i.kt)("strong",{parentName:"p"},"true")," to enable it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/bungee.yml"},"Latest bungee.yml"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("strong",{parentName:"p"},"What is MOTD Manager?")," MOTD Manager modifies server's MOTD to make it readable by Server Bungeecord systems like ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/timocloud-the-most-efficient-cloud-system.53757/"},"Timo Cloud"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/cloudnet-v3-the-cloud-network-environment-technology.42059/"},"CloudNet "),"and ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/bungeesigns.6563/"},"Bungee Signs"),". MOTD is based on game state if that option is enabled."))),(0,i.kt)("h3",{id:"configyml"},"config.yml"),(0,i.kt)("p",null,"config.yml is very well commented. No need to explain more any part of it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/config.yml"},"Latest config.yml"))),(0,i.kt)("h3",{id:"mysqlyml"},"mysql.yml"),(0,i.kt)("p",null,"Here you can set up MySQL plugin configuration. You need to enable MySQL first in ",(0,i.kt)("strong",{parentName:"p"},"config.yml"),". Set ",(0,i.kt)("strong",{parentName:"p"},"DatabaseActivated")," option to ",(0,i.kt)("strong",{parentName:"p"},"true"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/mysql.yml"},"Latest mysql.yml"))),(0,i.kt)("h3",{id:"rewardsyml"},"rewards.yml"),(0,i.kt)("p",null,'Here you can set up rewards that your players can get after specific triggers.\nCommands are executed by default BY CONSOLE, use "p:" to preform command by player.\nYou can also use chance to execute command adding "chance(NUMBER):" (ex chance(10):) at the beginning of command.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/rewards.yml"},"Latest rewards.yml"))),(0,i.kt)("h2",{id:"additional-content"},"Additional content"),(0,i.kt)("h3",{id:"language-and-locales"},"Language and locales"),(0,i.kt)("p",null,"Plugin is 95% translatable via ",(0,i.kt)("strong",{parentName:"p"},"language.yml")," file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Plugily-Projects/TheBridge/master/src/main/resources/language.yml"},"Latest language.yml"))),(0,i.kt)("p",null,"However, you can use localization support which is implemented in MM."),(0,i.kt)("p",null,"To change locale of plugin go to ",(0,i.kt)("strong",{parentName:"p"},"config.yml")," and modify ",(0,i.kt)("strong",{parentName:"p"},"locale")," value."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Our locales system generates temporary files on ",(0,i.kt)("inlineCode",{parentName:"p"},"~/locales")),(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"only file you should edit")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"language.yml")," on the main plugin folder!"))),(0,i.kt)("h3",{id:"how-can-i-edit-my-locale"},"How can I edit my locale?"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We have been looking for a perfect solution for a very long time.\nCurrently you can change your ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"language.yml"),".\n",(0,i.kt)("strong",{parentName:"p"},"It works like this:")," The plugin loads the selected locale and everything in the language.yml that doesn't match the standard English sentence. It overwrites the locale and so you have your locale overwritten.\nSo always remember to edit only in the ",(0,i.kt)("inlineCode",{parentName:"p"},"language.yml"),"."))),(0,i.kt)("h3",{id:"valid-localizations-gathered-via-poeditor-api"},(0,i.kt)("strong",{parentName:"h3"},"Valid localizations ","(","gathered via POEditor API",")",":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"#    default - English language. Uses 'language.yml'.\n#    de - Deutsche sprache          pl - J\u0119zyk polski\n#    es - Idioma espa\xf1ol            \n#    fr - Langue fran\xe7aise          \n#    hu - Magyar nyelv              \n#    pt_br - Portugu\xeas Brasileiro   \n#    it - Lingua italiana           ru - \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\n#    nl - Dutch\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("a",{parentName:"p",href:"https://translate.plugily.xyz"},"You can always translate our plugin for free by joining here ","(","click",")")))),(0,i.kt)("h2",{id:"stats-storage-types"},"Stats storage types"),(0,i.kt)("h3",{id:"current-stats-storage-types-for-player-statistics"},(0,i.kt)("strong",{parentName:"h3"},"Current stats storage types for player statistics:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flat file ","(",".yml",")"," - enabled by default"),(0,i.kt)("li",{parentName:"ul"},"MySQL ","(","database",")"," - can be enabled in config.yml ","(","see ",(0,i.kt)("a",{parentName:"li",href:"/thebridge/support/files#mysql-yml"},"mysql.yml"),")")))}d.isMDXComponent=!0}}]);