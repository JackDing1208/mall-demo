webpackJsonp([3],{0:function(t,s,e){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",rankLists:"/category/rank",subLists:"/category/subList",searchLists:"/search/list",goods:"/goods/details",deal:"/goods/deal",cartList:"/cart/list",cartAdd:"/cart/add",cartMinus:"/cart/reduce",cartRemove:"/cart/remove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var i in a)a.hasOwnProperty(i)&&(a[i]="https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy"+a[i]);s.a=a},107:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(74),i=(e.n(a),e(75)),n=(e.n(i),e(73)),o=(e.n(n),e(78)),r=(e.n(o),e(76)),d=(e.n(r),e(77)),c=(e.n(d),e(79)),u=(e.n(c),e(1)),l=e(0),h=e(3),f=e.n(h),p=e(6),w=e(24),m=e.n(w),g=e(17),v=e.n(g),y=m.a.parse(location.search.substr(1)),k=y.id,b=["商品详情","本店成交"];new u.default({el:"#app",data:{details:null,detailTab:b,tabIndex:0,dealLists:null,swiperLists:[],showSku:!1,skuType:1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;f.a.get(l.a.goods,{id:k}).then(function(s){var e=s.data.data;e.skuList.forEach(function(t){var s=[];t.lists.forEach(function(t){s.push({active:!1,tag:t})}),t.lists=s}),t.details=e,t.details.imgs.forEach(function(s){t.swiperLists.push({clickUrl:"",img:s})})})},changeTabIndex:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;f.a.get(l.a.deal,{id:k}).then(function(s){t.dealLists=s.data.data.lists})},chooseSku:function(t){this.showSku=!0,this.skuType=t},chooseTag:function(t,s,e){t.active?t.active=!1:e.forEach(function(t,e){t.active=e===s})},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;f.a.post(l.a.cartUpdate,{id:k,number:this.skuNum}).then(function(s){200===s.data.status&&(t.isAddCart=!0,t.showSku=!1,t.showAddMessage=!0,setTimeout(function(){t.showAddMessage=!1},1e3))})}},components:{Swiper:v.a},watch:{showSku:function(t){document.body.style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.querySelector("html").style.height=t?"100%":"auto"}},mixins:[p.a]})},17:function(t,s,e){function a(t){e(37)}var i=e(7)(e(27),e(39),a,"data-v-d58721ce",null);t.exports=i.exports},27:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(63),i=e.n(a),n=e(35);e.n(n);s.default={name:"Swiper",props:{lists:{}},data:function(){return{isShow:!1}},mounted:function(){new i.a(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})},methods:{imgLoad:function(){this.isShow=!0}}}},35:function(t,s){},37:function(t,s){},39:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(s){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:"#"}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:s.img},on:{load:t.imgLoad}})])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"swiper-pagination"})])},staticRenderFns:[]}},6:function(t,s,e){"use strict";var a={filters:{price:function(t){return t.toFixed(2)}}};s.a=a},73:function(t,s){},74:function(t,s){},75:function(t,s){},76:function(t,s){},77:function(t,s){},78:function(t,s){},79:function(t,s){}},[107]);
//# sourceMappingURL=goods.2d26a89e61b5ef8272fa.js.map