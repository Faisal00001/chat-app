import axios from 'axios';

const useAxiosPublic = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
    // timeout: 10000, // Optional: Set a timeout (in milliseconds)
    headers: {
        'Content-Type': 'application/json', // Optional: Set default headers
    },
});

export default useAxiosPublic;