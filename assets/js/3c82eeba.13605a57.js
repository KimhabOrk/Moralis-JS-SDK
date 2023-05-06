"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/moralisweb3/common-evm-utils/erc20transferinput",title:"Interface: Erc20TransferInput",sidebar_label:"Erc20TransferInput"},i=void 0,o={unversionedId:"api/moralisweb3/common-evm-utils/erc20transferinput",id:"api/moralisweb3/common-evm-utils/erc20transferinput",title:"Interface: Erc20TransferInput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / Erc20TransferInput",source:"@site/docs/api/moralisweb3/common-evm-utils/erc20transferinput.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/erc20transferinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/erc20transferinput",title:"Interface: Erc20TransferInput",sidebar_label:"Erc20TransferInput"},sidebar:"sidebar",previous:{title:"Erc20TransferData",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferdata"},next:{title:"Erc20Value",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value"}},s={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"blockHash",id:"blockhash",level:3},{value:"blockNumber",id:"blocknumber",level:3},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"chain",id:"chain",level:3},{value:"fromAddress",id:"fromaddress",level:3},{value:"logIndex",id:"logindex",level:3},{value:"possibleSpam",id:"possiblespam",level:3},{value:"toAddress",id:"toaddress",level:3},{value:"transactionHash",id:"transactionhash",level:3},{value:"transactionIndex",id:"transactionindex",level:3},{value:"value",id:"value",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / Erc20TransferInput"),(0,a.kt)("h1",{id:"interface-erc20transferinput"},"Interface: Erc20TransferInput"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".Erc20TransferInput"),(0,a.kt)("p",null,"This can be any object with valid erc20 transfer data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const input = {\n chain: 1,\n address: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",\n toAddress: "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044",\n fromAddress: "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",\n value: "650000000000000000",\n blockTimestamp: "2021-04-02T10:07:54.000Z",\n blockHash: "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",\n blockNumber: "12526958",\n transactionHash: "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",\n transactionIndex: 3,\n possibleSpam: false,\n logIndex: 2\n}\n')),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#address"},"address")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#blockhash"},"blockHash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#blocknumber"},"blockNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#blocktimestamp"},"blockTimestamp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#chain"},"chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#fromaddress"},"fromAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#logindex"},"logIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#possiblespam"},"possibleSpam")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#toaddress"},"toAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#transactionhash"},"transactionHash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#transactionindex"},"transactionIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput#value"},"value"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressinput"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmAddressInput"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blockhash"},"blockHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumberInput")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockTimestamp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chain"},"chain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"chain"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fromAddress"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressinput"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmAddressInput"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"logindex"},"logIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"logIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"possiblespam"},"possibleSpam"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"possibleSpam"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toaddress"},"toAddress"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"toAddress"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressinput"},(0,a.kt)("inlineCode",{parentName:"a"},"EvmAddressInput"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumberInput")))}c.isMDXComponent=!0}}]);