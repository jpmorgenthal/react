import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 63280168a5f2f39d8d8e488e3bb8b594837dc3405c42bb1796b25369e28e8815'
    }
});