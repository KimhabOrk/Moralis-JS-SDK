"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptospendingtransactioninput",title:"Interface: AptosPendingTransactionInput",sidebar_label:"AptosPendingTransactionInput"},o=void 0,s={unversionedId:"api/moralisweb3/common-aptos-utils/aptospendingtransactioninput",id:"api/moralisweb3/common-aptos-utils/aptospendingtransactioninput",title:"Interface: AptosPendingTransactionInput",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosPendingTransactionInput",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptospendingtransactioninput.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptospendingtransactioninput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptospendingtransactioninput",title:"Interface: AptosPendingTransactionInput",sidebar_label:"AptosPendingTransactionInput"},sidebar:"sidebar",previous:{title:"AptosPendingTransaction",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},next:{title:"AptosPendingTransactionJSON",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactionjson"}},p={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"expirationTimestampSecs",id:"expirationtimestampsecs",level:3},{value:"gasUnitPrice",id:"gasunitprice",level:3},{value:"hash",id:"hash",level:3},{value:"maxGasAmount",id:"maxgasamount",level:3},{value:"payload",id:"payload",level:3},{value:"sender",id:"sender",level:3},{value:"sequenceNumber",id:"sequencenumber",level:3},{value:"signature",id:"signature",level:3}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosPendingTransactionInput"),(0,i.kt)("h1",{id:"interface-aptospendingtransactioninput"},"Interface: AptosPendingTransactionInput"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosPendingTransactionInput"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#expirationtimestampsecs"},"expirationTimestampSecs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#gasunitprice"},"gasUnitPrice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#hash"},"hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#maxgasamount"},"maxGasAmount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#payload"},"payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#sender"},"sender")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#sequencenumber"},"sequenceNumber")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput#signature"},"signature"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"expirationtimestampsecs"},"expirationTimestampSecs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"expirationTimestampSecs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gasunitprice"},"gasUnitPrice"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"gasUnitPrice"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hash"},"hash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"hash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxgasamount"},"maxGasAmount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"maxGasAmount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"payload"},"payload"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"payload"),": ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionpayloadinput"},(0,i.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionPayloadInput"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionpayloadvalue"},(0,i.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionPayloadValue"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sender"},"sender"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"sender"),": ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosaddressinput"},(0,i.kt)("inlineCode",{parentName:"a"},"AptosAddressInput"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sequencenumber"},"sequenceNumber"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"sequenceNumber"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signature"},"signature"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"signature"),": ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionsignatureinput"},(0,i.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionSignatureInput"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionsignaturevalue"},(0,i.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionSignatureValue"))))}u.isMDXComponent=!0}}]);