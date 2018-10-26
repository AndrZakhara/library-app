import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://incode-blog-internship.herokuapp.com/',
    headers: !localStorage.getItem('cks_token')
        ? {}
        : {Authorization: `Bearer ${localStorage.getItem('cks_token')}`}
});

export default instance
