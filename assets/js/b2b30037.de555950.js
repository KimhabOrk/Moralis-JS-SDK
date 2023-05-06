"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,b=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(b,r(r({ref:t},m),{},{components:n})):o.createElement(b,r({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),s=(n(67294),n(3905));const a={slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",title:"Interface: AptosEncodeSubmissionRequestJSON",sidebar_label:"AptosEncodeSubmissionRequestJSON"},r=void 0,i={unversionedId:"api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",id:"api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",title:"Interface: AptosEncodeSubmissionRequestJSON",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosEncodeSubmissionRequestJSON",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson",title:"Interface: AptosEncodeSubmissionRequestJSON",sidebar_label:"AptosEncodeSubmissionRequestJSON"},sidebar:"sidebar",previous:{title:"AptosEncodeSubmissionRequestInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestinput"},next:{title:"AptosEncodeSubmissionRequestPayload",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestpayload"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"expiration_timestamp_secs",id:"expiration_timestamp_secs",level:3},{value:"gas_unit_price",id:"gas_unit_price",level:3},{value:"max_gas_amount",id:"max_gas_amount",level:3},{value:"payload",id:"payload",level:3},{value:"secondary_signers",id:"secondary_signers",level:3},{value:"sender",id:"sender",level:3},{value:"sequence_number",id:"sequence_number",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosEncodeSubmissionRequestJSON"),(0,s.kt)("h1",{id:"interface-aptosencodesubmissionrequestjson"},"Interface: AptosEncodeSubmissionRequestJSON"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosEncodeSubmissionRequestJSON"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#expiration_timestamp_secs"},"expiration","_","timestamp","_","secs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#gas_unit_price"},"gas","_","unit","_","price")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#max_gas_amount"},"max","_","gas","_","amount")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#payload"},"payload")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#secondary_signers"},"secondary","_","signers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#sender"},"sender")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosencodesubmissionrequestjson#sequence_number"},"sequence","_","number"))),(0,s.kt)("h2",{id:"properties-1"},"Properties"),(0,s.kt)("h3",{id:"expiration_timestamp_secs"},"expiration","_","timestamp","_","secs"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"expiration","_","timestamp","_","secs"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gas_unit_price"},"gas","_","unit","_","price"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"gas","_","unit","_","price"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"max_gas_amount"},"max","_","gas","_","amount"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"max","_","gas","_","amount"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"payload"},"payload"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"payload"),": ",(0,s.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosencodesubmissionrequestpayloadjson"},(0,s.kt)("inlineCode",{parentName:"a"},"AptosEncodeSubmissionRequestPayloadJSON"))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"secondary_signers"},"secondary","_","signers"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"secondary","_","signers"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sender"},"sender"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"sender"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sequence_number"},"sequence","_","number"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"sequence","_","number"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")))}u.isMDXComponent=!0}}]);