(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{534:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r}});var d=c(8788),e=c(4051),f=c.n(e),g=c(5893),h=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:6;return a?"".concat(a.slice(0,b),"...").concat(a.slice(a.length-b)):""},i=c(3299),j=c(5675),k=c.n(j),l=c(1664),m=c.n(l),n=c(8624),o=c.n(n),p=c(7295),q=function(){var a,b=(0,i.useSession)(),c=b.data,e=b.status,j=(0,p.K)(),l=j.chainId,n=j.deactivate,q=(a=(0,d.Z)(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(),a.next=3,(0,i.signOut)({callbackUrl:"/signin"});case 3:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});return(0,g.jsx)("div",{className:o().walletInfo__wrapper,children:"authenticated"===e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:o().wallet,children:[(0,g.jsxs)("div",{className:o().walletInfo,children:[(0,g.jsx)("div",{children:(0,g.jsx)("span",{children:l||"no network"})}),(0,g.jsx)("div",{className:"".concat(o().status," ").concat("authenticated"==e?o().active:o().nonActive)}),(0,g.jsx)("span",{children:h(null==c?void 0:c.user.address)})]}),(0,g.jsx)("button",{className:o().disconnectButton,onClick:q,children:"Disconnect"})]}),(0,g.jsx)(k(),{src:"/assets/mage.svg",width:34,height:34,alt:"profile"})]}):(0,g.jsx)(m(),{href:"/signin",children:(0,g.jsx)("a",{className:o().authenticate,children:"Authenticate"})})})},r=q},8624:function(a){a.exports={walletInfo__wrapper:"WalletInfo_walletInfo__wrapper__7UhWO",wallet:"WalletInfo_wallet__lF3CK",walletInfo:"WalletInfo_walletInfo__50jYD",status:"WalletInfo_status__DGWmK",active:"WalletInfo_active__tC7fb",nonActive:"WalletInfo_nonActive__ah_u6",disconnectButton:"WalletInfo_disconnectButton__kIxkC",authenticate:"WalletInfo_authenticate__aeC7h"}},8788:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})}}])