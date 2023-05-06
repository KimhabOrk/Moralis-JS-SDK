"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/moralisweb3/common-sol-utils/getbalancerequest",title:"Interface: GetBalanceRequest",sidebar_label:"GetBalanceRequest"},l=void 0,s={unversionedId:"api/moralisweb3/common-sol-utils/getbalancerequest",id:"api/moralisweb3/common-sol-utils/getbalancerequest",title:"Interface: GetBalanceRequest",description:"moralis-monorepo / @moralisweb3/common-sol-utils / GetBalanceRequest",source:"@site/docs/api/moralisweb3/common-sol-utils/getbalancerequest.md",sourceDirName:"api/moralisweb3/common-sol-utils",slug:"/moralisweb3/common-sol-utils/getbalancerequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/getbalancerequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-sol-utils/getbalancerequest",title:"Interface: GetBalanceRequest",sidebar_label:"GetBalanceRequest"},sidebar:"sidebar",previous:{title:"GetBalanceJSONResponse",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/getbalancejsonresponse"},next:{title:"GetBalanceResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/getbalanceresponseadapter"}},i={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"network",id:"network",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index"},"@moralisweb3/common-sol-utils")," / GetBalanceRequest"),(0,a.kt)("h1",{id:"interface-getbalancerequest"},"Interface: GetBalanceRequest"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index"},"@moralisweb3/common-sol-utils"),".GetBalanceRequest"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"PathParams"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"network"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"address"'),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"GetBalanceRequest"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/getbalancerequest#address"},"address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/getbalancerequest#network"},"network"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index#soladdressish"},(0,a.kt)("inlineCode",{parentName:"a"},"SolAddressish"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"network"},"network"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"network"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-sol-utils/index#solnetworkish"},(0,a.kt)("inlineCode",{parentName:"a"},"SolNetworkish"))))}m.isMDXComponent=!0}}]);