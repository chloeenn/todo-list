import { Task } from "../types/Task.types";

export const get = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const save = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const remove = () => {
  localStorage.removeItem("tasks");
};