import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { AuthResponse, Task, ErrorResponse } from "../types";

// Create axios instance
const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL || 'https://task-assign-backend.onrender.com//api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for auth token
api.interceptors.request.use((config) => {
    // Token include part, 
    /*
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    */
    // It doesn't need because we use the HttpOnly cookie
    return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<ErrorResponse>) => {
        return handleApiError(error);
    }
);

// Error handling utility
const handleApiError = (error: AxiosError<ErrorResponse>): Promise<never> => {
    if (error.response) {
        // The request was made and the server responded with a status code
        const message = error.response.data?.message || 'An error occurred';
        return Promise.reject(new Error(message));
    } else if (error.request) {
        // The request was made but no resonse was received
        return Promise.reject(new Error('Network error - please check your connection'));
    } else {
        // Something happend in setting up the request
        return Promise.reject(new Error('Requset configuration error'));
    }
};

// API methods
export const apiService = {
    // Auth
    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/login', {email, password});
        return response.data;
    },

    signup: async (name: string, email: string, password: string): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/signup', {name, email, password});
        return response.data;
    },

    me: async (): Promise<AuthResponse> => {
        const response= await api.get<AuthResponse>('/auth/me');
        return response.data;
    },
    // Tasks
    getTasks: async (): Promise<Task[]> => {
        const response = await api.get<Task[]>('/tasks');
        return response.data;
    },

    createTask: async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> => {
        console.log("Tasks request send.");
        const response = await api.post<Task>('/tasks', task);
        console.log("Response from the Tasks API:", response);
        return response.data;
    },

    updateTask: async (id: string, updates: Partial<Task>): Promise<Task> => {
        console.log("Update request send:", updates);
        const response = await api.patch<Task>(`/tasks/${id}`, updates);
        return response.data;
    },

    deleteTask: async (id: string): Promise<void> => {
        await api.delete(`/tasks/${id}`);
    },

}
