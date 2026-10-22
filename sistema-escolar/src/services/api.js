import axios from "axios"

// empacotamento do axios com a api
const api = axios.create({
    baseURL:"/api", withCredentials:true
})

export default api