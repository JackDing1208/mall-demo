//设置请求路径
let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topLists: '/category/topList',
  rankLists: '/category/rank',
  subLists: '/category/subList',
  searchLists: '/search/list',
  goods: '/goods/details',
  deal: '/goods/deal',
  cartList: '/cart/list',
  cartAdd: '/cart/add',
  cartMinus: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartUpdate: '/cart/update'
}

//方便开发环境与生产换件接口切换
let host = 'https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
