import axios from 'axios'

let fetch = function (method, url, data) {
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
    return fetch('get', url, data)
  },
  post(url, data) {
    return fetch('post', url, data)
  }
}


export default http
