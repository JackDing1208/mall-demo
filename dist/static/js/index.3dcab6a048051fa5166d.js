webpackJsonp([2],{0:function(t,e,s){"use strict";var a={hotLists:"/index/hotLists",hotShops:"/index/hotShop",banner:"/index/banner",topLists:"/category/topList",rankLists:"/category/rank",subLists:"/category/subList",searchLists:"/search/list",goods:"/goods/details",deal:"/goods/deal",cartList:"/cart/list",cartAdd:"/cart/add",cartMinus:"/cart/reduce",cartRemove:"/cart/remove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var r in a)a.hasOwnProperty(r)&&(a[r]="https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy"+a[r]);e.a=a},102:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to 饥人谷 vue 项目班"}},created:function(){this.$nextTick()}}},108:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),r=s(66),i=s(3),n=s.n(i),o=s(0),c=s(80),l=(s.n(c),s(8)),u=(s.n(l),s(82)),d=(s.n(u),s(16)),v=s.n(d),h=s(17),f=s.n(h);a.default.use(u.InfiniteScroll),a.default.config.productionTip=!1,new a.default({el:"#app",router:r.a,data:{lists:null,loading:!1,page:1,isBottom:!1,pageLimit:7,banner:null,shops:null},created:function(){this.getLists(),this.getBanners(),this.getShops()},methods:{getLists:function(){var t=this;this.isBottom||(this.loading=!0,n.a.get(o.a.hotLists,{pageNum:this.page}).then(function(e){t.lists?t.page>t.pageLimit?t.isBottom=!0:t.lists=t.lists.concat(e.data.lists):t.lists=e.data.lists,t.page++,t.loading=!1}))},getBanners:function(){var t=this;n.a.get(o.a.banner).then(function(e){t.banner=e.data.lists})},getShops:function(){var t=this;n.a.get(o.a.hotShops).then(function(e){t.shops=e.data.lists})}},components:{Siderbar:v.a,Swiper:f.a}})},152:function(t,e){},16:function(t,e,s){function a(t){s(36)}var r=s(7)(s(26),s(38),a,"data-v-3db5b099",null);t.exports=r.exports},161:function(t,e,s){function a(t){s(152)}var r=s(7)(s(102),s(168),a,"data-v-32695d41",null);t.exports=r.exports},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},17:function(t,e,s){function a(t){s(37)}var r=s(7)(s(27),s(39),a,"data-v-d58721ce",null);t.exports=r.exports},26:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"siderbar",props:["selected"]}},27:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(63),r=s.n(a),i=s(35);s.n(i);e.default={name:"Swiper",props:{lists:{}},data:function(){return{isShow:!1}},mounted:function(){new r.a(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})},methods:{imgLoad:function(){this.isShow=!0}}}},35:function(t,e){},36:function(t,e){},37:function(t,e){},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-nav"},[s("ul",[s("li",{class:{active:"1"===t.selected}},[t._m(0)]),t._v(" "),s("li",{class:{active:"2"===t.selected}},[t._m(1)]),t._v(" "),s("li",{class:{active:"3"===t.selected}},[t._m(2)]),t._v(" "),s("li",{class:{active:"4"===t.selected}},[t._m(3)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"index.html"}},[s("i",{staticClass:"icon-home"}),t._v(" "),s("div",[t._v("商城")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"category.html"}},[s("i",{staticClass:"icon-category"}),t._v(" "),s("div",[t._v("分类")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"cart.html"}},[s("i",{staticClass:"icon-cart"}),t._v(" "),s("div",[t._v("购物车")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"member.html"}},[s("i",{staticClass:"icon-user"}),t._v(" "),s("div",[t._v("我")])])}]}},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(e){return s("div",{staticClass:"swp-page swiper-slide"},[s("a",{staticClass:"js-no-follow",attrs:{href:"#"}},[s("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img},on:{load:t.imgLoad}})])])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"swiper-pagination"})])},staticRenderFns:[]}},66:function(t,e,s){"use strict";var a=s(1),r=s(64),i=s(161),n=s.n(i);a.default.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:n.a}]})},8:function(t,e){},80:function(t,e){}},[108]);
//# sourceMappingURL=index.3dcab6a048051fa5166d.js.map