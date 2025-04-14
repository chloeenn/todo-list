export interface Task {
    id: number;
    title: string;
    description?: string;
    date?: string;
    done: boolean;
}
// export interface TaskContextType {
//     tasks: Task[];
//     completedTasks: Task[];
//     addTask: (title: string, description?: string, date?: string) => void;
//     deleteTask: (id: number) => void;
//     deleteAllTasks: () => void;
//     editTask: (id: number, title: string, description?: string, date?: string) => void;
//     completeTask: (id: number) => void;
// };


// export type Query {
//     tasks: [Task!]!
//     completedTasks: [Task!]!
// };

// export type Mutation {
//     addTask(title: String!, description: String, date: String): Task!
//     updateTask(id: Int!, title: String, description: String, date: String, done: Boolean): Task!
//     deleteTask(id: Int!): Boolean!
// };