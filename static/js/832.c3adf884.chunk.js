"use strict";(self.webpackChunkgadget_glamour=self.webpackChunkgadget_glamour||[]).push([[832],{7413:function(s,e,a){a.d(e,{Z:function(){return l}});var t=a(7022),n=a(9743),c=a(2677),i=a(3116),r=a(184),l=function(s){var e=s.title,a=s.productBgImg;return(0,r.jsxs)("div",{className:"image-container",children:[(0,r.jsx)("img",{src:a||i,alt:"Product-bg"}),(0,r.jsx)("div",{className:e?"overlay":"",children:(0,r.jsx)(t.Z,{children:(0,r.jsx)(n.Z,{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)("h2",{children:e})})})})})]})}},3622:function(s,e,a){a.d(e,{Z:function(){return o}});var t=a(9439),n=a(2791),c=a(2677),i=a(7689),r=a(1593),l=a(9085),d=a(184),o=function(s){var e=s.title,a=s.productItem,o=s.addToCart,u=(0,n.useContext)(r.c).setSelectedProduct,f=(0,i.s0)(),m=(0,n.useState)(0),x=(0,t.Z)(m,2),j=x[0],h=x[1],v=function(){u(a),localStorage.setItem("selectedProduct-".concat(a.id),JSON.stringify(a)),f("/shop/".concat(a.id))};return(0,d.jsxs)(c.Z,{md:2,sm:4,xs:10,className:"product mtop",children:["Big Discount"===e?(0,d.jsxs)("span",{className:"discount",children:[a.discount,"% Off"]}):null,(0,d.jsx)("img",{loading:"lazy",onClick:function(){return v()},src:a.imgUrl,alt:""}),(0,d.jsxs)("div",{className:"product-like",children:[(0,d.jsx)("label",{children:j})," ",(0,d.jsx)("br",{}),(0,d.jsx)("ion-icon",{name:"heart-outline",onClick:function(){h(j+1)}})]}),(0,d.jsxs)("div",{className:"product-details",children:[(0,d.jsx)("h3",{onClick:function(){return v()},children:a.productName}),(0,d.jsxs)("div",{className:"rate",children:[(0,d.jsx)("i",{className:"fa fa-solid fa-star"}),(0,d.jsx)("i",{className:"fa fa-solid fa-star"}),(0,d.jsx)("i",{className:"fa fa-solid fa-star"}),(0,d.jsx)("i",{className:"fa fa-solid fa-star"}),(0,d.jsx)("i",{className:"fa fa-solid fa-star"})]}),(0,d.jsxs)("div",{className:"price",children:[(0,d.jsxs)("h4",{children:["$",a.price]}),(0,d.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(s){o(s),l.Am.success("Product has been added to cart!")}(a)}})]})]})]})}},9135:function(s,e,a){var t=a(9743),n=a(2791),c=a(3622),i=a(184);e.Z=function(s){var e=s.productItems,a=s.addToCart;return(0,n.useEffect)((function(){}),[e]),0===e.length?(0,i.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,i.jsx)(t.Z,{className:"justify-content-center",children:e.map((function(s){return(0,i.jsx)(c.Z,{title:null,productItem:s,addToCart:a},s.id)}))})}},8832:function(s,e,a){a.r(e),a.d(e,{default:function(){return h}});var t=a(9439),n=a(2791),c=a(7413),i=a(1593),r=a(7022),l=a(9743),d=a(2677),o=a(9135),u=a(7739),f=a(7689),m=a(9085),x=a(1662),j=a(184),h=function(){var s=(0,n.useState)("desc"),e=(0,t.Z)(s,2),a=e[0],h=e[1],v=(0,n.useState)([]),p=(0,t.Z)(v,2),N=p[0],g=p[1],b=(0,n.useContext)(i.c),C=b.selectedProduct,Z=b.setSelectedProduct,k=b.addToCart,y=(0,f.UO)().id;if(!C){var S=localStorage.getItem("selectedProduct-".concat(y));Z(JSON.parse(S))}var I=(0,n.useState)(1),P=(0,t.Z)(I,2),w=P[0],T=P[1];return(0,n.useEffect)((function(){window.scrollTo(0,0),g(u.RB.filter((function(s){return s.category===(null===C||void 0===C?void 0:C.category)&&s.id!==(null===C||void 0===C?void 0:C.id)})))}),[C]),(0,j.jsxs)(n.Fragment,{children:[(0,j.jsx)(c.Z,{title:null===C||void 0===C?void 0:C.productName,productBgImg:"https://priceoye.pk/assets/images/home/dk-banner-static.jpg"}),(0,j.jsx)("section",{className:"product-page",children:(0,j.jsx)(r.Z,{children:(0,j.jsxs)(l.Z,{className:"justify-content-center",children:[(0,j.jsx)(d.Z,{md:6,children:(0,j.jsx)("img",{loading:"lazy",src:null===C||void 0===C?void 0:C.imgUrl,alt:""})}),(0,j.jsxs)(d.Z,{md:6,children:[(0,j.jsx)("h2",{children:null===C||void 0===C?void 0:C.productName}),(0,j.jsxs)("div",{className:"rate",children:[(0,j.jsxs)("div",{className:"stars",children:[(0,j.jsx)("i",{className:"fa fa-star"}),(0,j.jsx)("i",{className:"fa fa-star"}),(0,j.jsx)("i",{className:"fa fa-star"}),(0,j.jsx)("i",{className:"fa fa-star"}),(0,j.jsx)("i",{className:"fa fa-star"})]}),(0,j.jsxs)("span",{children:[null===C||void 0===C?void 0:C.avgRating," ratings"]})]}),(0,j.jsxs)("div",{className:"info",children:[(0,j.jsxs)("span",{className:"price",children:["$",null===C||void 0===C?void 0:C.price]}),(0,j.jsx)("h4",{children:"Category: "}),(0,j.jsx)("h5",{children:null===C||void 0===C?void 0:C.category})]}),(0,j.jsx)("p",{children:null===C||void 0===C?void 0:C.shortDesc}),(0,j.jsxs)("span",{className:"qty-counter",children:[(0,j.jsxs)("button",{className:"incCart",onClick:function(){T((function(s){return s+1}))},children:[(0,j.jsx)("i",{className:"fa fa-solid fa-plus"}),"+"]}),(0,j.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:w,onChange:function(s){T(parseInt(s.target.value))}}),(0,j.jsxs)("button",{className:"desCart",onClick:function(){T((function(s){return s>0?s-1:0}))},children:[(0,j.jsx)("i",{className:"fa fa-solid fa-minus"}),"-"]})]}),(0,j.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(s,e){k(s,e),m.Am.success("Product has been added to cart!")}(C,w)},children:"Add To Cart"})]})]})})}),(0,j.jsx)("section",{className:"product-reviews",children:(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{style:{color:"desc"===a?"black":"#9c9b9b"},onClick:function(){return h("desc")},children:"Description"}),(0,j.jsxs)("li",{style:{color:"rev"===a?"black":"#9c9b9b"},onClick:function(){return h("rev")},children:["Reviews (",null===C||void 0===C?void 0:C.reviews.length,")"]})]}),"desc"===a?(0,j.jsx)("p",{children:null===C||void 0===C?void 0:C.description}):(0,j.jsx)("div",{className:"rates",children:null===C||void 0===C?void 0:C.reviews.map((function(s){return(0,j.jsxs)("div",{className:"rate-comment",children:[(0,j.jsx)("span",{children:"Jhon Doe"}),(0,j.jsxs)("span",{children:[s.rating," (rating)"]}),(0,j.jsx)("p",{children:s.text})]},s.rating)}))})]})}),(0,j.jsx)(x.Z,{}),(0,j.jsxs)("section",{className:"related-products",children:[(0,j.jsx)(r.Z,{children:(0,j.jsx)("h3",{children:"You might also like"})}),(0,j.jsx)(o.Z,{productItems:N,addToCart:k})]})]})}}}]);
//# sourceMappingURL=832.c3adf884.chunk.js.map