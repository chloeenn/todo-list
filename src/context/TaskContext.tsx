import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { get, save } from "src/hooks/useLocalStorage";
import { Task, TaskContextType } from "src/types/Task.types"

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    useEffect(() => {
        const storedTasks = get();
        setTasks(storedTasks);
    }, []);
    useEffect(() => {
        if (tasks.length) save(tasks);
    }, [tasks]);
    useEffect(() => {
        const storedTasks = get();
        setTasks(storedTasks);
        setCompletedTasks(storedTasks.filter((task) => task.done));
      }, [tasks]);
    const addTask = (title: string, description?: string, date?: string) => {
        const newTask: Task = { id: Date.now() + Math.random(), title, description, date:new Date().toISOString().slice(0, 10), done: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
    const editTask = (id: number, title: string, description?: string, date?: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => ((task.id == id) ? { ...task, title, description, date } : task))
        )
    }
    const completeTask = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
        setCompletedTasks((prevCompletedTasks) => {
            const taskToComplete = tasks.find((task) => task.id === id && task.done === true);
            if (taskToComplete) {
                return [...prevCompletedTasks, taskToComplete];
            }
            return prevCompletedTasks;
        });
    }
    return (
        <TaskContext.Provider value={{ tasks, completedTasks, addTask, deleteTask, editTask, completeTask }}>
            {children}
        </TaskContext.Provider>
    );
}

const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be wrapped in TaskProvider :)");
    return context;
}
export { TaskProvider, useTasks };
