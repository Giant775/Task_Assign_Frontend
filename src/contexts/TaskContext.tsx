import { createContext } from 'react';
import { Task } from '../types';
import { Assignee } from '../types';

type TaskContextType = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  assignTask: (taskId: string, assignee: Assignee) => Promise<void>;
};

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    loading: false,
    error: null,
    createTask: async () => {},
    updateTask: async () => {},
    deleteTask: async () => {},
    assignTask: async () => {},
});



