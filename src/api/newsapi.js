import { apiDomain, apiKey } from './env';

const headers = {
    'Accept': 'application/json',
    'Bearer': 'Bearer ' + apiKey
}

const axios = require('axios');

const news = axios.create({
    baseURL: apiDomain, 
    headers: headers
});

export default news;