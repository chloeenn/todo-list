export interface Task {
    id: number;
    title: string;
    description?: string;
    date?: string;
    done: boolean;
}
export interface TaskContextType {
    tasks: Task[];
    completedTasks: Task[];
    addTask: (title: string, description?: string, date?: string) => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, title: string, description?: string, date?: string) => void;
    completeTask: (id: number) => void;
};