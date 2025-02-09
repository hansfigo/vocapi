import axios from "axios";

const BASE_URL = 'https://vocadb.net/api/';

const ax = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default ax;