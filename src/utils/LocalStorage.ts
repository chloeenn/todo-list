
export const get = (): any[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const save = (tasks: any[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const remove = () => {
  localStorage.removeItem("tasks");
};