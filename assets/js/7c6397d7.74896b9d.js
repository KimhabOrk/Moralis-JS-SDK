"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49612],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,d=c["".concat(m,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/moralisweb3/common-streams-utils/streamevminternaltransaction",title:"Class: StreamEvmInternalTransaction",sidebar_label:"StreamEvmInternalTransaction"},i=void 0,s={unversionedId:"api/moralisweb3/common-streams-utils/streamevminternaltransaction",id:"api/moralisweb3/common-streams-utils/streamevminternaltransaction",title:"Class: StreamEvmInternalTransaction",description:"moralis-monorepo / @moralisweb3/common-streams-utils / StreamEvmInternalTransaction",source:"@site/docs/api/moralisweb3/common-streams-utils/streamevminternaltransaction.md",sourceDirName:"api/moralisweb3/common-streams-utils",slug:"/moralisweb3/common-streams-utils/streamevminternaltransaction",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-streams-utils/streamevminternaltransaction",title:"Class: StreamEvmInternalTransaction",sidebar_label:"StreamEvmInternalTransaction"},sidebar:"sidebar",previous:{title:"StreamErc721ApprovalInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approvalinput"},next:{title:"StreamEvmInternalTransactionData",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransactiondata"}},m={},o=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"chain",id:"chain",level:3},{value:"Returns",id:"returns-5",level:4},{value:"from",id:"from",level:3},{value:"Returns",id:"returns-6",level:4},{value:"gas",id:"gas",level:3},{value:"Returns",id:"returns-7",level:4},{value:"to",id:"to",level:3},{value:"Returns",id:"returns-8",level:4},{value:"transactionHash",id:"transactionhash",level:3},{value:"Returns",id:"returns-9",level:4},{value:"triggers",id:"triggers",level:3},{value:"Returns",id:"returns-10",level:4},{value:"value",id:"value",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils")," / StreamEvmInternalTransaction"),(0,r.kt)("h1",{id:"class-streamevminternaltransaction"},"Class: StreamEvmInternalTransaction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils"),".StreamEvmInternalTransaction"),(0,r.kt)("p",null,"The StreamEvmInternalTransaction class is a representation of an internal transaction that is returned by the Moralis Stream API"),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MoralisDataObject"))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#equals"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#equals-1"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#format"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#tojson"},"toJSON"))),(0,r.kt)("h3",{id:"accessors"},"Accessors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#chain"},"chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#from"},"from")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#gas"},"gas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#to"},"to")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#transactionhash"},"transactionHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#triggers"},"triggers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#value"},"value"))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction#constructor"},"constructor"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransaction"))),(0,r.kt)("p",null,"Create a new instance of StreamEvmInternalTransactionish"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const transaction = StreamEvmTransactionish.create(data);\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the StreamEvmInternalTransactionishish type")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransaction"))),(0,r.kt)("p",null,"an instance of StreamEvmInternalTransaction"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"valueA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"valueB"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Compares two StreamEvmInternalTransaction data. It checks a deep equality check of both values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"}," StreamEvmInternalTransaction.equals(valueA, valueB);\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"valueA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the first StreamEvmInternalTransactionish data to compare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"valueB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the second StreamEvmInternalTransactionish data to compare")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"true if the values are equal, false otherwise"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals-1"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Compares an StreamEvmInternalTransactionish data to this StreamEvmInternalTransaction instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"evmInternalTransaction.equals(value);\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the value to compare")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"true if the value is equal to the current instance, false otherwise"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.equals"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"format"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionJSON"))),(0,r.kt)("p",null,"Converts the StreamEvmInternalTransaction instance to a JSON object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"evmInternalTransaction.format()")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionJSON"))),(0,r.kt)("p",null,"JSON object of the StreamEvmInternalTransaction instance"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.format"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionJSON"))),(0,r.kt)("p",null,"Converts the StreamEvmInternalTransaction instance to a JSON object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"evmInternalTransaction.toJSON()")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamevminternaltransactionjson"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionJSON"))),(0,r.kt)("p",null,"JSON object of the StreamEvmInternalTransaction instance"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.toJSON"),(0,r.kt)("h2",{id:"accessors-1"},"Accessors"),(0,r.kt)("h3",{id:"chain"},"chain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"chain"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmChain")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EvmChain")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"from"},"from"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"from"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gas"},"gas"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"gas"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"to"},"to"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"to"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"transactionHash"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"triggers"},"triggers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"triggers"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamtriggeroutput"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamTriggerOutput")),"[]"),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamtriggeroutput"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamTriggerOutput")),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"value"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new StreamEvmInternalTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),")"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevminternaltransactioninput"},(0,r.kt)("inlineCode",{parentName:"a"},"StreamEvmInternalTransactionInput")))))))}u.isMDXComponent=!0}}]);