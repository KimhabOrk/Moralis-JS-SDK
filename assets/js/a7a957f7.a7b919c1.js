"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/moralisweb3/common-aptos-utils/aptospendingtransaction",title:"Class: AptosPendingTransaction",sidebar_label:"AptosPendingTransaction"},o=void 0,s={unversionedId:"api/moralisweb3/common-aptos-utils/aptospendingtransaction",id:"api/moralisweb3/common-aptos-utils/aptospendingtransaction",title:"Class: AptosPendingTransaction",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosPendingTransaction",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptospendingtransaction.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptospendingtransaction",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptospendingtransaction",title:"Class: AptosPendingTransaction",sidebar_label:"AptosPendingTransaction"},sidebar:"sidebar",previous:{title:"AptosNFTTransfersByWalletsResponseJSON",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosnfttransfersbywalletsresponsejson"},next:{title:"AptosPendingTransactionInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isInput",id:"isinput",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"isJSON",id:"isjson",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Properties",id:"properties-1",level:2},{value:"expirationTimestampSecs",id:"expirationtimestampsecs",level:3},{value:"gasUnitPrice",id:"gasunitprice",level:3},{value:"hash",id:"hash",level:3},{value:"maxGasAmount",id:"maxgasamount",level:3},{value:"payload",id:"payload",level:3},{value:"sender",id:"sender",level:3},{value:"sequenceNumber",id:"sequencenumber",level:3},{value:"signature",id:"signature",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosPendingTransaction"),(0,r.kt)("h1",{id:"class-aptospendingtransaction"},"Class: AptosPendingTransaction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosPendingTransaction"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#fromjson"},"fromJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#isinput"},"isInput")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#isjson"},"isJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#tojson"},"toJSON"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#expirationtimestampsecs"},"expirationTimestampSecs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#gasunitprice"},"gasUnitPrice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#hash"},"hash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#maxgasamount"},"maxGasAmount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#payload"},"payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#sender"},"sender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#sequencenumber"},"sequenceNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction#signature"},"signature"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransaction"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactioninput"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionInput"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransaction")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransaction"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromjson"},"fromJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransaction"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionJSON")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransaction"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isinput"},"isInput"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isInput"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"): input is AptosPendingTransactionInput"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"input is AptosPendingTransactionInput"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isjson"},"isJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"): json is AptosPendingTransactionJSON"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"json")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"json is AptosPendingTransactionJSON"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionJSON"))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptospendingtransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionJSON"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"expirationtimestampsecs"},"expirationTimestampSecs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"expirationTimestampSecs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gasunitprice"},"gasUnitPrice"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"gasUnitPrice"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hash"},"hash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxgasamount"},"maxGasAmount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"maxGasAmount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"payload"},"payload"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"payload"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionpayloadvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionPayloadValue"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sender"},"sender"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"sender"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"A hex encoded 32 byte Aptos account address."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sequencenumber"},"sequenceNumber"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"sequenceNumber"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,r.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signature"},"signature"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"signature"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptospendingtransactionsignaturevalue"},(0,r.kt)("inlineCode",{parentName:"a"},"AptosPendingTransactionSignatureValue"))))}d.isMDXComponent=!0}}]);