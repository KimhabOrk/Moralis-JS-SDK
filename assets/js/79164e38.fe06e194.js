"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7474],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=o.createContext({}),p=function(t){var e=o.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(a),u=n,d=k["".concat(i,".").concat(u)]||k[u]||c[u]||r;return a?o.createElement(d,s(s({ref:e},m),{},{components:a})):o.createElement(d,s({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,s=new Array(r);s[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88297:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",title:"Interface: AptosBlockMetadataTransactionJSON",sidebar_label:"AptosBlockMetadataTransactionJSON"},s=void 0,l={unversionedId:"api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",id:"api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",title:"Interface: AptosBlockMetadataTransactionJSON",description:"moralis-monorepo / @moralisweb3/common-aptos-utils / AptosBlockMetadataTransactionJSON",source:"@site/docs/api/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson.md",sourceDirName:"api/moralisweb3/common-aptos-utils",slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson",title:"Interface: AptosBlockMetadataTransactionJSON",sidebar_label:"AptosBlockMetadataTransactionJSON"},sidebar:"sidebar",previous:{title:"AptosBlockMetadataTransactionInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactioninput"},next:{title:"AptosBlockTransactionsItem",permalink:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblocktransactionsitem"}},i={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"accumulator_root_hash",id:"accumulator_root_hash",level:3},{value:"changes",id:"changes",level:3},{value:"epoch",id:"epoch",level:3},{value:"event_root_hash",id:"event_root_hash",level:3},{value:"events",id:"events",level:3},{value:"failed_proposer_indices",id:"failed_proposer_indices",level:3},{value:"gas_used",id:"gas_used",level:3},{value:"hash",id:"hash",level:3},{value:"id",id:"id",level:3},{value:"previous_block_votes_bitvec",id:"previous_block_votes_bitvec",level:3},{value:"proposer",id:"proposer",level:3},{value:"round",id:"round",level:3},{value:"state_change_hash",id:"state_change_hash",level:3},{value:"state_checkpoint_hash",id:"state_checkpoint_hash",level:3},{value:"success",id:"success",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"type",id:"type",level:3},{value:"version",id:"version",level:3},{value:"vm_status",id:"vm_status",level:3}],m={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils")," / AptosBlockMetadataTransactionJSON"),(0,n.kt)("h1",{id:"interface-aptosblockmetadatatransactionjson"},"Interface: AptosBlockMetadataTransactionJSON"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index"},"@moralisweb3/common-aptos-utils"),".AptosBlockMetadataTransactionJSON"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#accumulator_root_hash"},"accumulator","_","root","_","hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#changes"},"changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#epoch"},"epoch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#event_root_hash"},"event","_","root","_","hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#events"},"events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#failed_proposer_indices"},"failed","_","proposer","_","indices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#gas_used"},"gas","_","used")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#hash"},"hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#id"},"id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#previous_block_votes_bitvec"},"previous","_","block","_","votes","_","bitvec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#proposer"},"proposer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#round"},"round")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#state_change_hash"},"state","_","change","_","hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#state_checkpoint_hash"},"state","_","checkpoint","_","hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#success"},"success")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#timestamp"},"timestamp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#type"},"type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#version"},"version")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptosblockmetadatatransactionjson#vm_status"},"vm","_","status"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"accumulator_root_hash"},"accumulator","_","root","_","hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"accumulator","_","root","_","hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"changes"},"changes"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"changes"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/index#aptosblockmetadatatransactionchangesitemjson"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosBlockMetadataTransactionChangesItemJSON")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"epoch"},"epoch"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"epoch"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"event_root_hash"},"event","_","root","_","hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"event","_","root","_","hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"events"},"events"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"events"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-aptos-utils/aptostransactioneventjson"},(0,n.kt)("inlineCode",{parentName:"a"},"AptosTransactionEventJSON")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"failed_proposer_indices"},"failed","_","proposer","_","indices"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"failed","_","proposer","_","indices"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gas_used"},"gas","_","used"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"gas","_","used"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hash"},"hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"previous_block_votes_bitvec"},"previous","_","block","_","votes","_","bitvec"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"previous","_","block","_","votes","_","bitvec"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"proposer"},"proposer"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"proposer"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"round"},"round"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"round"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"state_change_hash"},"state","_","change","_","hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"state","_","change","_","hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"state_checkpoint_hash"},"state","_","checkpoint","_","hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"state","_","checkpoint","_","hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"success"},"success"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"success"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"timestamp"},"timestamp"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"type"},"type"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"version"},"version"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"version"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"vm_status"},"vm","_","status"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"vm","_","status"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);