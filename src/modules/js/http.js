import axios from 'axios'

let ajax = function (method, url, data) {
  return new Promise((resolve, reject) => {
    axios({method, url, data})
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          resolve(res)
        } else if (res.status === 401) {
          location.href = 'index.html'
        }

      })
      .catch((res) => {
        reject(res)
      })
  })
}
let http = {
  get(url, data) {
    return ajax('get', url, data)
  },
  post(url, data) {
    return ajax('post', url, data)
  }
}


export default http
