import axios from 'axios';

// Define the base URL for your API
const baseURL = 'https://api.example.com';

// Create an instance of the Axios client with the base URL
const client = axios.create({
    baseURL,
});

// Define your API endpoints
const api = {
    getUsers: () => client.get('/users'),
    getUser: (id: number) => client.get(`/users/${id}`),
    createUser: (data: any) => client.post('/users', data),
    updateUser: (id: number, data: any) => client.put(`/users/${id}`, data),
    deleteUser: (id: number) => client.delete(`/users/${id}`),
};

// Usage example
api.getUsers()
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });