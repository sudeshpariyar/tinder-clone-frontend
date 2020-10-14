import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-clone-backend-node.herokuapp.com/",
})

export default instance;