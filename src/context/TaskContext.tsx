import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { get, save, remove } from "../utils/useLocalStorage";
import { Task, TaskContextType } from "../types/Task.types";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = get();
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    if (tasks.length) save(tasks);
  }, [tasks]);

  const completedTasks = tasks.filter((task) => task.done);

  const addTask = (title: string, description?: string, date?: string) => {
    const newTask: Task = {
      id: Date.now() + Math.random(),
      title,
      description,
      date: new Date().toISOString().slice(0, 10),
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const deleteAllTasks = () => {
    setTasks([]);
    remove();
  };

  const editTask = (id: number, title: string, description?: string, date?: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title, description, date } : task
      )
    );
  };

  const completeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, completedTasks, addTask, deleteTask, deleteAllTasks, editTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be wrapped in TaskProvider :)");
  return context;
};

export { TaskProvider, useTasks };