webpackJsonp([1],{0:function(t,e,a){"use strict";var s={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",rankLists:"/category/rank",subLists:"/category/subList",searchLists:"/search/list",goods:"/goods/details",deal:"/goods/deal",cartList:"/cart/list",cartAdd:"/cart/add",cartMinus:"/cart/reduce",cartRemove:"/cart/remove",cartUpdate:"/cart/update"};for(var i in s)s.hasOwnProperty(i)&&(s[i]="https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy"+s[i]);e.a=s},103:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),i=a(63),n=a(2),r=a.n(n),o=a(0),c=a(75),l=(a.n(c),a(7)),u=(a.n(l),a(79)),v=(a.n(u),a(14)),d=a.n(v),f=a(15),_=a.n(f);s.default.use(u.InfiniteScroll),s.default.config.productionTip=!1,new s.default({el:"#app",router:i.a,data:{lists:null,loading:!1,page:1,isBottom:!1,pageLimit:7,banner:null},created:function(){this.getLists(),this.getBanners()},methods:{getLists:function(){var t=this;this.isBottom||(this.loading=!0,r.a.get(o.a.hotLists,{pageNum:this.page}).then(function(e){t.lists?t.page>t.pageLimit?t.isBottom=!0:t.lists=t.lists.concat(e.data.lists):t.lists=e.data.lists,t.page++,t.loading=!1,console.log(t.lists)}))},getBanners:function(){var t=this;r.a.get(o.a.banner).then(function(e){t.banner=e.data.lists})}},components:{Siderbar:d.a,Swiper:_.a}})},14:function(t,e,a){function s(t){a(35)}var i=a(13)(a(25),a(37),s,"data-v-3db5b099",null);t.exports=i.exports},142:function(t,e){},149:function(t,e,a){function s(t){a(142)}var i=a(13)(a(99),a(150),s,"data-v-32695d41",null);t.exports=i.exports},15:function(t,e,a){function s(t){a(36)}var i=a(13)(a(26),a(38),s,"data-v-d58721ce",null);t.exports=i.exports},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},25:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"siderbar",props:["selected"]}},26:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(61),i=a(34);a.n(i);e.default={name:"Swiper",props:{lists:{}},data:function(){return{isShow:!1}},mounted:function(){new s.a(".swiper-container",{direction:"horizontal",loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})},methods:{imgLoad:function(){this.isShow=!0}}}},34:function(t,e){},35:function(t,e){},36:function(t,e){},37:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",[a("li",{class:{active:"1"===t.selected}},[t._m(0)]),t._v(" "),a("li",{class:{active:"2"===t.selected}},[t._m(1)]),t._v(" "),a("li",{class:{active:"3"===t.selected}},[t._m(2)]),t._v(" "),a("li",{class:{active:"4"===t.selected}},[t._m(3)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"index.html"}},[a("i",{staticClass:"icon-home"}),t._v(" "),a("div",[t._v("商城")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"category.html"}},[a("i",{staticClass:"icon-category"}),t._v(" "),a("div",[t._v("分类")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"cart.html"}},[a("i",{staticClass:"icon-cart"}),t._v(" "),a("div",[t._v("购物车")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"member.html"}},[a("i",{staticClass:"icon-user"}),t._v(" "),a("div",[t._v("我")])])}]}},38:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(e){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:"#"}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img},on:{load:t.imgLoad}})])])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"swiper-pagination"})])},staticRenderFns:[]}},63:function(t,e,a){"use strict";var s=a(1),i=a(151),n=a(149),r=a.n(n);s.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:r.a}]})},7:function(t,e){},75:function(t,e){},99:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to 饥人谷 vue 项目班"}}}}},[103]);
//# sourceMappingURL=index.8a7186d6c666b34c3dbe.js.map