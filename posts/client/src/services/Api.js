import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
    // baseURL: `http://192.168.21.105:8081`
  })
}
