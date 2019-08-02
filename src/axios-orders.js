import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e6883.firebaseio.com/'
});

export default instance;
