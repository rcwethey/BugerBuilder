import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-82273.firebaseio.com/'
});

export default instance;