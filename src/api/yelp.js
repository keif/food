import axios from 'axios'

const YELP_URL = `https://api.yelp.com/v3/businesses`
const API_KEY = ``

export default axios.create({
    baseURL: YELP_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})