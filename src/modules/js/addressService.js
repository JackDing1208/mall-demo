import http from 'js/http.js'
import url from 'js/api.js'

class Address {

  static list() {
    return http.get(url.addressLists)
  }

  static add(data) {
    return http.post(url.addressAdd, data)
  }

  static remove(id) {
    return http.post(url.addressRemove, id)
  }

  static update(data) {
    return http.post(url.addressUpdate, data)
  }

  static setDefault(id) {
    return http.post(url.addressSetDefault, id)
  }
}

export default Address
