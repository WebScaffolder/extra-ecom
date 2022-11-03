(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1426],{3450:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/orders",function(){return n(9813)}])},7252:function(e,r,n){"use strict";var t=n(5893),s=(n(7294),n(1664)),i=n.n(s);r.Z=function(e){var r=e.pageTitle,n=e.homePageUrl,s=e.homePageText,c=e.activePageText;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"page-title-area",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-7",children:(0,t.jsx)("h2",{children:r})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-5",children:(0,t.jsxs)("ul",{className:"page-title-content",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:n,children:(0,t.jsx)("a",{children:s})})}),(0,t.jsx)("li",{children:c})]})})]})})})})}},9813:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var t=n(5893),s=n(7294),i=n(7252),c=n(7568),a=n(655),l=n(9669),d=n.n(l),h=n(7105),o=n(5297),u=function(){var e="".concat(h.Z,"/api/v1/orders"),r=(0,s.useState)(""),n=r[0],i=r[1];(0,s.useEffect)((function(){var r=function(){var r=(0,c.Z)((function(){var r;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,d().get(e)];case 1:return r=n.sent(),i(r.data.orders),[2]}}))}));return function(){return r.apply(this,arguments)}}();return r(),function(){return!1}}),[]);var l=function(){var e=(0,c.Z)((function(e){var r,n;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return r=e.target.id,[4,d().put("".concat(h.Z,"/api/v1/orders/delivered/").concat(r))];case 1:return n=t.sent(),i(n.data),[2]}}))}));return function(r){return e.apply(this,arguments)}}();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"table-responsive",children:(0,t.jsxs)("table",{className:"table table-striped align-middle table-p15 fs-15",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"User"}),(0,t.jsx)("th",{children:"Address"}),(0,t.jsx)("th",{children:"Email"}),(0,t.jsx)("th",{children:"Phone"}),(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Total"}),(0,t.jsx)("th",{children:"Paid"}),(0,t.jsx)("th",{children:"Status"}),(0,t.jsx)("th",{className:"text-center",children:"Action"})]})}),(0,t.jsx)("tbody",{children:n.length>0?n.map((function(e,r){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.name}),(0,t.jsx)("td",{children:e.address}),(0,t.jsx)("td",{children:e.email}),(0,t.jsx)("td",{children:e.phone}),(0,t.jsx)("td",{children:(0,o.Z)(e.createdAt)}),(0,t.jsxs)("td",{children:["$",e.totalPrice]}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:!1===e.isDelivered?"badge bg-warning text-dark fw-normal order-pending":"badge bg-success fw-normal order-button",children:!1===e.isDelivered?"Not Paid":"Paid"})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:!1===e.isDelivered?"badge bg-warning text-dark fw-normal order-pending":"badge bg-success fw-normal order-button",children:!1===e.isDelivered?"Pending":"Delivered"})}),(0,t.jsx)("td",{className:"text-center",children:(0,t.jsxs)("label",{className:"switch",children:[(0,t.jsx)("input",{type:"checkbox",id:e.id,checked:e.isDelivered,onChange:l}),(0,t.jsx)("span",{className:"slider round"})]})})]},r),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:"9",children:(0,t.jsxs)("table",{className:"table table-hover table-p15 fs-15 align-middle",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Image"}),(0,t.jsx)("th",{children:"Product"}),(0,t.jsx)("th",{children:"Price"})]})}),(0,t.jsx)("tbody",{children:e.ordersItem.map((function(e){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("img",{src:e.img_url,alt:"Product Image",width:"40"})}),(0,t.jsxs)("td",{children:[e.title," : ",e.quantity]}),(0,t.jsxs)("td",{children:[e.price," x ",e.quantity]})]},e.id)}))})]})})})]})})):(0,t.jsx)("tr",{className:"empty-tr",children:(0,t.jsx)("td",{colSpan:"9",children:"No Order!"})})})]})})})})},x=n(8871),j=n(5245),m=function(e){var r=e.user;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.Z,{user:r}),(0,t.jsx)(i.Z,{pageTitle:"Orders",homePageUrl:"/",homePageText:"Home",activePageText:"Orders"}),(0,t.jsx)("div",{className:"ptb-100",children:(0,t.jsx)(u,{})}),(0,t.jsx)(j.Z,{})]})}},5297:function(e,r){"use strict";r.Z=function(e){return new Date(e).toLocaleDateString("en-US")}},9534:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(r,{Z:function(){return t}})}},function(e){e.O(0,[162,2244,9774,2888,179],(function(){return r=3450,e(e.s=r);var r}));var r=e.O();_N_E=r}]);