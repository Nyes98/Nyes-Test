import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
});

export const testDB = async () => {
    return await request.post('/user/test');
};

export const createDB = async (a: string, b: string) => {
    return await request.post('/user/create', { name: a, address: b });
};
