import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9393b48d1a684baf8bec96a74dcc14d6'
    }
})