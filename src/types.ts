
export interface User {
    id: string;
    email: string;
    name: string;
    grade: number;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface Comment {
    id: string;
    text: string;
    author: string; // User ID
    createdAt: Date;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in progress' | 'completed';
    assignee?: string; // User ID
    dueDate?: Date;
    labels?: string[];
    comments?: Comment[];
    createdAt: Date;
    updatedAt?: Date
}

export interface ErrorResponse {
    message: string;
    statusCode: number;
}


export type FormType = {
    name?: string;
    email: string;
    password: string;
}