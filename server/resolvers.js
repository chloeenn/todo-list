// server/resolvers.js
let tasks = [];
let nextId = 1;

const resolvers = {
  Query: {
    tasks: () => tasks,
    completedTasks: () => tasks.filter(t => t.done),
  },
  Mutation: {
    addTask: (_, { title, description, date }) => {
      if (!title.trim()) throw new Error('Title is required');
      const newTask = {
        id: nextId++,
        title,
        description,
        date,
        done: false,
      };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, title, description, date, done }) => {
      const task = tasks.find(t => t.id === id);
      if (!task) throw new Error('Task not found');
      Object.assign(task, {
        title: title ?? task.title,
        description: description ?? task.description,
        date: date ?? task.date,
        done: done ?? task.done,
      });
      return task;
    },
    deleteTask: (_, { id }) => {
      const index = tasks.findIndex(t => t.id === id);
      if (index === -1) return false;
      tasks.splice(index, 1);
      return true;
    },
  },
};

module.exports = resolvers;