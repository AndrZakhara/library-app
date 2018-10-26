import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {'Authorization': "bearer " }
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
});


export default instance
