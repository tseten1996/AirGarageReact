import axios from 'axios';

const baseApiUrl = 'http://localhost:5000/yelp';
export default axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "accept": "application/json"
    }
});