import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'http://nyx.vima.ekt.gr:3000/api'
});

export default clienteAxios;