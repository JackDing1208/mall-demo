webpackJsonp([5],{0:function(t,s,e){"use strict";var o={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",rankLists:"/category/rank",subLists:"/category/subList",searchLists:"/search/list",goods:"/goods/details",deal:"/goods/deal",cartList:"/cart/list",cartAdd:"/cart/add",cartMinus:"/cart/reduce",cartRemove:"/cart/remove",cartUpdate:"/cart/update"};for(var a in o)o.hasOwnProperty(a)&&(o[a]="https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy"+o[a]);s.a=o},105:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e(1),a=e(2),n=e.n(a),r=e(0),c=e(23),i=e.n(c),d=e(80),u=e.n(d),l=e(6),p=e(78),f=(e.n(p),e(7)),h=(e.n(f),i.a.parse(location.search.substr(1))),L=h.keyword,g=h.id;new o.default({el:"#app",data:{keyword:L,id:g,searchLists:null,goTop:!1},created:function(){var t=this;n.a.get(r.a.searchLists,{keyword:L,id:g}).then(function(s){t.searchLists=s.data.lists,console.log(t.searchLists)})},mounted:function(){var t=this;document.addEventListener("scroll",function(){window.scrollY>800?t.goTop=!0:t.goTop=!1})},methods:{goToTop:function(){u()(document.body,"scroll",{duration:500})}},mixins:[l.a]})},6:function(t,s,e){"use strict";var o={filters:{price:function(t){return t.toFixed(2)}}};s.a=o},7:function(t,s){},78:function(t,s){}},[105]);
//# sourceMappingURL=search.990a13af7984234b0b2e.js.map