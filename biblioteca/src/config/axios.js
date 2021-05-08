import axios from 'axios';

const clientAxios = axios.create({
    baseURL:'http://nyx.vima.ekt.gr:3000/api'
});

export default clientAxios;