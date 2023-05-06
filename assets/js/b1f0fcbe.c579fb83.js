"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=s(a),u=n,c=k["".concat(m,".").concat(u)]||k[u]||d[u]||l;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},98519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/moralisweb3/common-evm-utils/evmtrade",title:"Class: EvmTrade",sidebar_label:"EvmTrade"},o=void 0,i={unversionedId:"api/moralisweb3/common-evm-utils/evmtrade",id:"api/moralisweb3/common-evm-utils/evmtrade",title:"Class: EvmTrade",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmTrade",source:"@site/docs/api/moralisweb3/common-evm-utils/evmtrade.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmtrade",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmtrade",title:"Class: EvmTrade",sidebar_label:"EvmTrade"},sidebar:"sidebar",previous:{title:"EvmSimpleBlockInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"},next:{title:"EvmTradeCollection",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtradecollection"}},m={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Properties",id:"properties-1",level:2},{value:"blockHash",id:"blockhash",level:3},{value:"blockNumber",id:"blocknumber",level:3},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"buyerAddress",id:"buyeraddress",level:3},{value:"marketplaceAddress",id:"marketplaceaddress",level:3},{value:"price",id:"price",level:3},{value:"priceTokenAddress",id:"pricetokenaddress",level:3},{value:"sellerAddress",id:"selleraddress",level:3},{value:"tokenAddress",id:"tokenaddress",level:3},{value:"tokenIds",id:"tokenids",level:3},{value:"transactionHash",id:"transactionhash",level:3},{value:"transactionIndex",id:"transactionindex",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmTrade"),(0,n.kt)("h1",{id:"class-evmtrade"},"Class: EvmTrade"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmTrade"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#create"},"create")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#fromjson"},"fromJSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#tojson"},"toJSON"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#blockhash"},"blockHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#blocknumber"},"blockNumber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#blocktimestamp"},"blockTimestamp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#buyeraddress"},"buyerAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#marketplaceaddress"},"marketplaceAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#price"},"price")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#pricetokenaddress"},"priceTokenAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#selleraddress"},"sellerAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#tokenaddress"},"tokenAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#tokenids"},"tokenIds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#transactionhash"},"transactionHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade#transactionindex"},"transactionIndex"))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"create"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTrade"))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"input")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtradeinput"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTradeInput"))," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTrade")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTrade"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fromjson"},"fromJSON"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"json"),"): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTrade"))),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"json")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtradejson"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTradeJSON")))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtrade"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTrade"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tojson"},"toJSON"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtradejson"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTradeJSON"))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmtradejson"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmTradeJSON"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"blockhash"},"blockHash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The block hash"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The block number of the transaction"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"blockTimestamp"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The block timestamp"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"buyeraddress"},"buyerAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"buyerAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The address that bought the NFT"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"marketplaceaddress"},"marketplaceAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"marketplaceAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The address of the contract that traded the NFT"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"price"},"price"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"price"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The value that was sent in the transaction (ETH/BNB/etc..)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pricetokenaddress"},"priceTokenAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"priceTokenAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The address of the token used to pay for the NFT"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"selleraddress"},"sellerAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"sellerAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The address that sold the NFT"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenaddress"},"tokenAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"tokenAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The address of the NFT contract"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenids"},"tokenIds"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"tokenIds"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The token ID(s) traded"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The transaction hash"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,n.kt)("p",null,"The transaction index"))}d.isMDXComponent=!0}}]);