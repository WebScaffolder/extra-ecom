(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1250],{7285:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-profile",function(){return n(6021)}])},7252:function(e,r,n){"use strict";var t=n(5893),s=(n(7294),n(1664)),i=n.n(s);r.Z=function(e){var r=e.pageTitle,n=e.homePageUrl,s=e.homePageText,c=e.activePageText;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"page-title-area",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-7",children:(0,t.jsx)("h2",{children:r})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-5",children:(0,t.jsxs)("ul",{className:"page-title-content",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:n,children:(0,t.jsx)("a",{children:s})})}),(0,t.jsx)("li",{children:c})]})})]})})})})}},6021:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var t=n(5893),s=n(8871),i=n(7252),c=n(5245),a=n(7568),l=n(655),o=n(7294),u=n(7105),d=n(5297),h=n(2286),x=n(9669),f=n.n(x),j=function(){var e=(0,h.parseCookies)().luan_token,r=(0,o.useState)([]),n=r[0],s=r[1],i={headers:{Authorization:e}},c="".concat(u.Z,"/api/v1/auth/account");return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((function(){var e;return(0,l.__generator)(this,(function(r){switch(r.label){case 0:return[4,f().get(c,i)];case 1:return e=r.sent(),s(e.data),[2]}}))}));return function(){return e.apply(this,arguments)}}();return e(),function(){return!1}}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"user-area-wrap ptb-100 container",children:[(0,t.jsx)("h4",{className:"mb-3",children:"User Profile"}),(0,t.jsx)("div",{className:"table-responsive",children:(0,t.jsx)("table",{className:"table table-bordered table-p15",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:"Username:"}),(0,t.jsx)("td",{children:n.name})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:"Email:"}),(0,t.jsx)("td",{children:n.email})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:"Role:"}),(0,t.jsx)("td",{children:n.role})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:"Joining Date:"}),(0,t.jsx)("td",{children:(0,d.Z)(n.createdAt)})]})]})})})]})})},m=function(e){var r=e.user;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{user:r}),(0,t.jsx)(i.Z,{pageTitle:"My Profile",homePageUrl:"/",homePageText:"Home",activePageText:"My Profile"}),(0,t.jsx)(j,{}),(0,t.jsx)(c.Z,{})]})}},5297:function(e,r){"use strict";r.Z=function(e){return new Date(e).toLocaleDateString("en-US")}},9534:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(r,{Z:function(){return t}})}},function(e){e.O(0,[162,2244,9774,2888,179],(function(){return r=7285,e(e.s=r);var r}));var r=e.O();_N_E=r}]);