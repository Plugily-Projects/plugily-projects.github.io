"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[856],{1567:(t,e,a)=>{a.d(e,{Z:()=>i});var l=a(7294),r=a(614);a(1905);class i extends l.Component{constructor(t){super(t),this.state={text:"Fetching latest config.."},this.props.url?fetch(this.props.url).then((t=>t.text())).then((t=>{this.setState({text:t})})).catch((t=>this.setState({text:"Error: "+t}))):this.state.text="Missing URL property"}render(){return l.createElement(r.Z,{language:"yaml"},this.state.text)}}},9252:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var l=a(7462),r=(a(7294),a(3905)),i=(a(1567),a(4866)),n=a(5162);const s={id:"overview",title:"Minigame Plugin Docs",sidebar_label:"Overview",slug:"/minigame/"},m=void 0,p={unversionedId:"minigame/overview",id:"minigame/overview",title:"Minigame Plugin Docs",description:"---",source:"@site/docs/minigame/overview.mdx",sourceDirName:"minigame",slug:"/minigame/",permalink:"/minigame/",draft:!1,editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/docs/minigame/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1691595440,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"overview",title:"Minigame Plugin Docs",sidebar_label:"Overview",slug:"/minigame/"},sidebar:"minigames",next:{title:"Placeholders",permalink:"/minigame/placeholders"}},u={},o=[{value:"General information",id:"general-information",level:2},{value:"Official download links/platforms we share the plugins with",id:"offical-links",level:2},{value:"Get started",id:"get-started",level:2}],d={toc:o},g="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("p",null,"This is the official Plugily Projects Wiki of our minigame plugins."),(0,r.kt)("p",null,"You can select your plugin by tabbing the correct tab for the plugin you want assistance with."),(0,r.kt)("h2",{id:"offical-links"},"Official download links/platforms we share the plugins with"),(0,r.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"villagedefense",mdxType:"TabItem"},(0,r.kt)("p",null,"View on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/41869/"},"SpigotMC")))),(0,r.kt)(n.Z,{value:"buildbattle",mdxType:"TabItem"},(0,r.kt)("p",null,"View on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/44703/"},"SpigotMC")))),(0,r.kt)(n.Z,{value:"murdermystery",mdxType:"TabItem"},(0,r.kt)("p",null,"View on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/66614/"},"SpigotMC")))),(0,r.kt)(n.Z,{value:"thebridge",mdxType:"TabItem"},(0,r.kt)("p",null,"View on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/87320/"},"SpigotMC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.plugily.xyz"},"Our own Discord"))),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"setup/cmdsandperms"},"Commands and Permissions")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"setup/simple-setup"},"Simple arena setup")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"setup/maps"},"Free Maps")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"development/api"},"Developers API")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"support/faq"},"FAQ")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://i.imgur.com/8FJE8tg.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://i.imgur.com/ekmDyHw.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://i.imgur.com/4SndPkW.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://i.imgur.com/RDZGbgs.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://i.imgur.com/cBRPKFZ.png",alt:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Commands and permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"How to create arena tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequently asked questions"),(0,r.kt)("td",{parentName:"tr",align:null},"Some stuff for developers"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequent problems and tips")))))}k.isMDXComponent=!0}}]);