# To-Do List

This project is a simple to-do list application built using React.

The application provides functionality for adding, editing, deleting, completing tasks, providing interface for daily task management.

## Features

- Add new tasks with an optional note and due date.
- Modify existing tasks.
- Mark tasks as completed and view them separately.
- Persistent task storage using localStorage.
- Responsive UI for a seamless experience across devices.

## Demo
https://github.com/user-attachments/assets/7ea77d4c-00f7-446d-aaad-10ca651630f6

## Usage Instructions

### Installation


1. Clone the repository:
   ```sh
   git clone https://github.com/chloeenn/todo-list.git
   cd todo-list
   ```
2. Install dependencies:
   ```sh
   npm install 
   ```
3. Start the development server:
   ```sh
   npm start  
   ```
## Running Tests

To run unit tests:

```sh
npm test 
```

This will execute all test cases using Vitest.

## Folder Structure
```
src
   ├─ App.tsx
   ├─ components
   │  ├─ CreateTask
   │  │  └─ __tests_
   │  ├─ Layout
   │  ├─ Search
   │  ├─ Sidebar
   │  ├─ TaskItem
   │  │  └─ __tests
   │  ├─ TaskList
   │  │  └─ __tests__
   │  └─ icons
   ├─ context
   ├─ index.css
   ├─ index.tsx
   ├─ pages
   │  ├─ CompletedTask
   │  └─ Home
   ├─ setupTests.ts
   ├─ types
   └─ utils


```
