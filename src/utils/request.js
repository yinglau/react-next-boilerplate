import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://cnodejs.org/api/v1',
  baseURL: 'http://127.0.0.1:1337',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTU4NTE3MDI4LCJleHAiOjE1NjExMDkwMjh9.VYrSiG9-fvipJBFGanvHA4K07-iQ9g3jtDgCOK_Wv1w'
  }
})

export const get = (path, data) => {
  return instance.get(path, {
    params: data || {}
  }).then(res => res.data)
}

export const post = (path, data) => {
  return instance.post(path, data || {})
    .then(res => res.data)
}
