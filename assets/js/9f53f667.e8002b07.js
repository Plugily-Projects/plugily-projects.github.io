"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5021],{1567:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(7294),n=i(614);i(1905);class o extends a.Component{constructor(e){super(e),this.state={text:"Fetching latest config.."},this.props.url?fetch(this.props.url).then((e=>e.text())).then((e=>{this.setState({text:e})})).catch((e=>this.setState({text:"Error: "+e}))):this.state.text="Missing URL property"}render(){return a.createElement(n.Z,{language:"yaml"},this.state.text)}}},5490:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=i(7462),n=(i(7294),i(3905));i(1567),i(4866),i(5162);const o={id:"api",title:"Developer API",sidebar_label:"DeveloperApi"},s=void 0,p={unversionedId:"minigame/development/api",id:"minigame/development/api",title:"Developer API",description:"---",source:"@site/docs/minigame/development/developer-api.mdx",sourceDirName:"minigame/development",slug:"/minigame/development/api",permalink:"/minigame/development/api",draft:!1,editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/docs/minigame/development/developer-api.mdx",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1709669129,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"api",title:"Developer API",sidebar_label:"DeveloperApi"},sidebar:"minigames",previous:{title:"Free maps",permalink:"/minigame/setup/maps"},next:{title:"Plugin files explained",permalink:"/minigame/support/files"}},r={},l=[],m={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Get the API and some examples"),(0,n.kt)("p",null,"Full java documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://maven.plugily.xyz/"},"https://maven.plugily.xyz/")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This site gets a refresh soon as the new minigame core changed the api workage!\nGithub repos: Core -> ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Plugily-Projects/MiniGamesBox/commits/development"},"https://github.com/Plugily-Projects/MiniGamesBox/commits/development")," - Plugin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Plugily-Projects/PLUGINNAME"},"https://github.com/Plugily-Projects/PLUGINNAME"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Contents may be not up to date! Please use java docs instead. Here you can only get some simple examples.")))}u.isMDXComponent=!0}}]);