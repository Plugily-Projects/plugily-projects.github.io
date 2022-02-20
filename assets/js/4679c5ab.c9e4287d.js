"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3383],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3392:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return w}});var n=a(3117),r=a(102),o=a(7294),l=a(3905),i=a(2389),s=a(4726),u=a(6010),m="tabItem_LplD";function c(e){var t,a,r,l=e.lazy,i=e.block,c=e.defaultValue,p=e.values,d=e.groupId,h=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.UB)(),k=w.tabGroupChoices,y=w.setTabGroupChoices,N=(0,o.useState)(f),T=N[0],x=N[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=k[d];null!=P&&P!==T&&g.some((function(e){return e.value===P}))&&x(P)}var O=function(e){var t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==T&&(j(t),x(n),null!=d&&y(d,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,a=e.label,r=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,u.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,o.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}var d=function(e){var t=e.children,a=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},h=["components"],b={slug:"summerbreak2021",title:"Summerbreak 21",author:"Tigerpanzer_02",author_title:"Manager of Plugily Projects",author_url:"https://github.com/Tigerpanzer02",author_image_url:"https://avatars.githubusercontent.com/u/37453987?s=460&v=4",hide_table_of_contents:!1,tags:["summerbreak","plugily projects","plugily","news","betatester","planned"]},g=void 0,v={permalink:"/blog/summerbreak2021",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/blog/2021-08-20-summerbreak2021.mdx",source:"@site/blog/2021-08-20-summerbreak2021.mdx",title:"Summerbreak 21",description:"We will be on summerbreak the next few weeks and start working again on October 2021. The support is open but the conversation rate will be lowered as we are on vacation. The average response time will be maxed out to around 72 hours instead of 2 hours.",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"summerbreak",permalink:"/blog/tags/summerbreak"},{label:"plugily projects",permalink:"/blog/tags/plugily-projects"},{label:"plugily",permalink:"/blog/tags/plugily"},{label:"news",permalink:"/blog/tags/news"},{label:"betatester",permalink:"/blog/tags/betatester"},{label:"planned",permalink:"/blog/tags/planned"}],readingTime:5.175,truncated:!0,authors:[{name:"Tigerpanzer_02",title:"Manager of Plugily Projects",url:"https://github.com/Tigerpanzer02",imageURL:"https://avatars.githubusercontent.com/u/37453987?s=460&v=4"}],frontMatter:{slug:"summerbreak2021",title:"Summerbreak 21",author:"Tigerpanzer_02",author_title:"Manager of Plugily Projects",author_url:"https://github.com/Tigerpanzer02",author_image_url:"https://avatars.githubusercontent.com/u/37453987?s=460&v=4",hide_table_of_contents:!1,tags:["summerbreak","plugily projects","plugily","news","betatester","planned"]},nextItem:{title:"Introducing our new Wiki",permalink:"/blog/new-wiki"}},f={authorsImageUrls:[void 0]},w=[],k={toc:w};function y(e){var t=e.components,a=(0,r.Z)(e,h);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Summerbreak 2021")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We will be on summerbreak the next few weeks and start working again on October 2021. The support is open but the conversation rate will be lowered as we are on vacation. The average response time will be maxed out to around 72 hours instead of 2 hours."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throwback")),(0,l.kt)("p",null,"We started the year with many internal changes. The name change from Plajers Lair to Plugily Projects took a little longer in some areas and took some time to get used to. In the end, we went through with the name change completely. Plugily Projects defines us on a broad scale and does not limit us to a one-man operation, as it seemed before.\nMainly the Wiki, Api service(s) and Discord were affected. We are looking forward to the new time together and have already spent some nice months together under the new name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Summerbreak 2021")),(0,l.kt)("p",null,"As you have already seen above, we are in the summer break at the moment. That doesn't mean we are inactive, but we are taking some time off and want to relax and spend more time than usual with friends and family. This is the most important wish in our team, to have a hobby that is fun and does not bring any pressure or stress with it. A project that is fun together and educates everyone."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"End of (old) beta testers")),(0,l.kt)("p",null,"We want to thank again all our beta testers that were included into all betas until now. Beta testers please read the last announcement on the beta channel of our discord or read the planned new beta programm to get in touch with the next steps as beta tester ;)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Planned")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"In short")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently we want to enhance the experience with our plugins by adding new stuff to them. Here and there along the lines (discord) you will see whats planned or will get changed. Therefore we want to change how we code and how the team works together. That means it will be a bit silent to the public the next weeks as we need to create/update internal stuff to go forward."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"We got several stuff on our todo")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(p,{defaultValue:"internal",values:[{label:"Internal",value:"internal"},{label:"New Beta Programm",value:"beta"},{label:"Minigame Core",value:"core"},{label:"Tails v3",value:"tails"},{label:"New Minigame",value:"minigame"},{label:"Websites",value:"web"}],mdxType:"Tabs"},(0,l.kt)(d,{value:"internal",mdxType:"TabItem"},"Goal: Being more simple, modern and stronger ",(0,l.kt)("br",null),"How: Internal changes that helps us to execute our work faster, optimize processes and start thinking about more automation/ki projects"),(0,l.kt)(d,{value:"beta",mdxType:"TabItem"},"The beta program is now going into **summer break.** We thank you for all the help over the last years! Currently we don't like the beta program anymore. It does not meet our quality standards anymore. We are thinking deeply and will start with a completely new system in the future. This new system will improve the contact between testers and plugily. It will optimize processes and the usefulness of a beta release.",(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"Current process:"),"\n1 A beta is released\n2 Almost no feedback"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"Use at the moment:")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Almost none for both sides")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Future flow:"),(0,l.kt)("br",null),"\n1 Different roles of testers (currently there are internal and beta testers - future: DEV TESTERS and BETA TESTERS)",(0,l.kt)("br",null),"\n2a DEV TESTERS will work hand in hand with Plugily in direct contact (more effort)",(0,l.kt)("br",null),"\n2b BETA TESTERS will work in close contact with Plugily (less effort)",(0,l.kt)("br",null),"\n3 Feedback will be collected through one point of contact",(0,l.kt)("br",null),"\n4 Feedback will be evaluated or assessed",(0,l.kt)("br",null),"\n5 Feedback will be implemented",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Future benefit:")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"mutual commitment to a common goal"),(0,l.kt)("li",{parentName:"ul"},"Feedback flows directly into development")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Will I be a beta tester in the future?")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Currently the new system is still in the thinking phase, so we plan that all beta testers can also be a beta tester in the new system."),(0,l.kt)("li",{parentName:"ul"},"There will be a choice of roles in the new system, so it will be your own interest"),(0,l.kt)("li",{parentName:"ul"},"It will be extensively documented, from which you can deduce if you want to be a beta tester in the new system.")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"How can I help atm until new platform get released?")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"You can always try a dev version and tell us if the feature for the dev version works or not on a ticket or in general questions"),(0,l.kt)("li",{parentName:"ul"},"Dev versions can be downloaded by using latest channel on ",(0,l.kt)("a",{parentName:"li",href:"https://download.plugily.xyz"},"https://download.plugily.xyz")))),(0,l.kt)(d,{value:"core",mdxType:"TabItem"},"Currently we are working on one code base for all plugins to maintain all our projects with only one code which minimize time effort by around 5 times. Currently we need to do code changes 4 times for the same issue. Why you did not think about it earlier? Well better late than never. The core will also include a improved systems such as easier language system for all of our plugins."),(0,l.kt)(d,{value:"minigame",mdxType:"TabItem"},"We want to realease a new minigame this year. Keep in mind to vote on our discord for one/To tell us about your ideas on the plugin ideas channel."),(0,l.kt)(d,{value:"tails",mdxType:"TabItem"},"Currently our Bot Tails is at his 2. Generation. We will try to start the 3. Generation of Tails this year with a lot of new and additional stuff that was never seens anywhere before. It doesn't only contain ticket improvements and a working verification system. It also includes some currency module to earn points with activity that can be used to claim one patreon addon as prize."),(0,l.kt)(d,{value:"web",mdxType:"TabItem"},"We are creating and redesigning all our web pages to be more simple and modern. There will be a lot of internal and external new platforms that will help with the communication beetween staff and team")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Global pandemic")),(0,l.kt)("p",null,"We hope that all your relatives survive the pandemic well and do not fall ill or have fallen ill with Corona. We wish everyone strength and health for the next months of building up various different measures against the future situation. We as Plugily Projects support local vaccination campaigns for the protection of each individual. Together we will create a world like before Corona!"))}y.isMDXComponent=!0}}]);