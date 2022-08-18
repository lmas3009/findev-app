import axios from "axios"

const instance = axios.create({
    baseURL: "https://findev-server.herokuapp.com/findev/api/v1",
})

export default instance