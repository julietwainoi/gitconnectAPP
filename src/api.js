import axios from 'axios';

const API_URL = 'http://localhost:8000/v1';  // URL of the Laravel backend


// Example: registration request
export const register = async (name, email, userType, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            name,
            email,
            userType,
            password
        });
        const token = response.data.token;  // Extract token from the response
        localStorage.setItem('token', token);  // Store token in localStorage
        return response.data;
    } catch (error) {
        console.error('Error during register', error);
        throw error;
    }
};

// Example: Login request
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password
        });
        const token = response.data.token;  // Extract token from the response
        localStorage.setItem('token', token);  // Store token in localStorage
        return response.data;
    } catch (error) {
        console.error('Error during login', error);
        throw error;
    }
};

// Example: get categories
export const getCategories = async () => {
    try {
        const token = localStorage.getItem('token');  // Retrieve token from localStorage
        //http://localhost:8000/v1/auth/categories/
        const response = await axios.get(`${API_URL}/auth/categories/`, {
            headers: {
                Authorization: `Bearer ${token}`  // Send the token in the Authorization header
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categories', error);
        throw error;
    }
};
