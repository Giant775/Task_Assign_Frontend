import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";
import { apiService } from "../services/api";
import { useUser } from "../hooks/useUser";
import { Task } from "../types";
import { Assignee } from "../types";
import socket from "../services/socket";

export function TaskProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useUser();
  
    useEffect(() => {
      fetchTasks();
      socket.on('taskCreated', (newTask) => {
        setTasks(prev => [...prev, newTask]);
      });

      socket.on('taskUpdated', (updatedTask) => {
        setTasks(prev => prev.map(t =>
          t.id === updatedTask.id ? updatedTask : t
        ));
      });

      socket.on('taskDeleted', (deleteTaskId) => {
        setTasks(prev => prev.filter(t => t.id !== deleteTaskId));
      });

      return () => {
        socket.off('taskCreated');
        socket.off('taskUpdated');
        socket.off('taskDeleted');
      }
    }, []);
  
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const data = await apiService.getTasks();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };
  
    const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
      if (user?.grade !== 0) throw new Error('Unauthorized');
      const newTask = await apiService.createTask(task);
      setTasks(prev => [...prev, newTask]);
    };
  
    const updateTask = async (id: string, updates: Partial<Task>) => {
      const updatedTask = await apiService.updateTask(id, updates);
      setTasks(prev => prev.map(t => t.id === id ? updatedTask : t));
    };
  
    const deleteTask = async (id: string) => {
      if (user?.grade !== 0) throw new Error('Unauthorized');
      await apiService.deleteTask(id);
      setTasks(prev => prev.filter(t => t.id !== id));
    };
  
    const assignTask = async (taskId: string, assignee: Assignee) => {
      if (!user) throw new Error('Not authenticated');
      await apiService.updateTask(taskId, {assignee: assignee});
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, assignee: assignee } : t));
    };
  
    return (
      <TaskContext.Provider value={{ tasks, loading, error, createTask, updateTask, deleteTask, assignTask }}>
        {children}
      </TaskContext.Provider>
    );
  }