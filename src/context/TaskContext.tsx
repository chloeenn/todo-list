import React, { useState, createContext, ReactNode, useContext } from "react";

interface Task {
    id: number;
    title: string;
    description?: string;
    date?: string;
    done: boolean;
}
interface TaskContextType {
    tasks: Task[];
    addTask: (title: string, description?: string, date?: string) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, title: string, description?: string, date?: string) => void;
    completeTask: (id: number) => void;
};
const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (title: string, description?: string, date?: string) => {
        const newTask: Task = { id: Date.now() + Math.random(), title, description, date, done: false };
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
            prevTasks.map((task) => task.id == id ? { ...task, done: !task.done } : task)
        )
    }
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, completeTask }}>
            {children}
        </TaskContext.Provider>
    );
}

const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be wrapped in TaskProvider");
    return context;
}
export { TaskProvider, useTasks };
