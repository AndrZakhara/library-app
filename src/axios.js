import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://incode-blog-internship.herokuapp.com/',
    headers: {'Authorization': "bearer " }
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
});


export default instance
