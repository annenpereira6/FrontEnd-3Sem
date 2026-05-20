import axios from "axios";

// define a porta da api
const apiPort = "3000"

//define a URL base para a API local, usando a porta definida
const localApi = `http://localhost:${apiPort}`

//define variavel para API externa
const externalApi = null

const api = axios.create({
    baseURL: localApi
})

export default api