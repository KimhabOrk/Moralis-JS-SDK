"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=s,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",title:"Class: AptosEncodeSubmissionRequest",sidebar_label:"AptosEncodeSubmissionRequest"},r=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",id:"api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",title:"Class: AptosEncodeSubmissionRequest",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosEncodeSubmissionRequest",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest",title:"Class: AptosEncodeSubmissionRequest",sidebar_label:"AptosEncodeSubmissionRequest"},sidebar:"sidebar",previous:{title:"AptosEd25519SignatureRequestJSON",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosed25519signaturerequestjson"},next:{title:"AptosEncodeSubmissionRequestInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestinput"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Properties",id:"properties-1",level:2},{value:"expirationTimestampSecs",id:"expirationtimestampsecs",level:3},{value:"gasUnitPrice",id:"gasunitprice",level:3},{value:"maxGasAmount",id:"maxgasamount",level:3},{value:"payload",id:"payload",level:3},{value:"secondarySigners",id:"secondarysigners",level:3},{value:"sender",id:"sender",level:3},{value:"sequenceNumber",id:"sequencenumber",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosEncodeSubmissionRequest"),(0,s.kt)("h1",{id:"class-aptosencodesubmissionrequest"},"Class: AptosEncodeSubmissionRequest"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosEncodeSubmissionRequest"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"methods"},"Methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#create"},"create")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#fromjson"},"fromJSON")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#tojson"},"toJSON"))),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#expirationtimestampsecs"},"expirationTimestampSecs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#gasunitprice"},"gasUnitPrice")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#maxgasamount"},"maxGasAmount")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#payload"},"payload")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#secondarysigners"},"secondarySigners")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#sender"},"sender")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest#sequencenumber"},"sequenceNumber"))),(0,s.kt)("h2",{id:"methods-1"},"Methods"),(0,s.kt)("h3",{id:"create"},"create"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"create"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequest"))),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"input")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestinput"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestInput"))," ","|"," ",(0,s.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequest")))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequest"))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"fromjson"},"fromJSON"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"fromJSON"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"json"),"): ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequest"))),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"json")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestJSON")))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequest"))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tojson"},"toJSON"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestJSON"))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestJSON"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"expirationtimestampsecs"},"expirationTimestampSecs"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"expirationTimestampSecs"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gasunitprice"},"gasUnitPrice"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"gasUnitPrice"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxgasamount"},"maxGasAmount"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"maxGasAmount"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"A string containing a 64-bit unsigned integer."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"payload"},"payload"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"payload"),": ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosencodesubmissionrequestpayloadvalue"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestPayloadValue"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"An enum of the possible transaction payloads"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"secondarysigners"},"secondarySigners"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"secondarySigners"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"Secondary signer accounts of the request for Multi-agent"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sender"},"sender"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"sender"),": ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosaddress"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosAddress"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"A hex encoded 32 byte Aptos account address."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sequencenumber"},"sequenceNumber"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"sequenceNumber"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Description"))),(0,s.kt)("p",null,"A string containing a 64-bit unsigned integer."))}u.isMDXComponent=!0}}]);