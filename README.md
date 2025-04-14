# To-Do List

A full-stack To-Do List application built with **React**, **TypeScript**, and **GraphQL**. This application allows users to create, update, and manage tasks with optional notes and due dates.


## Live Demo 

Live Demo: [To-Do List Live Demo](https://todo-list-nine-brown.vercel.app)

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
   cd client
   npm install
   ```
   ```sh
   cd ../server
   npm install
   ```
3. Start the development server:

   From the root directory:
   ```sh
   npm install -D concurrently 
   npm run dev
   ```
## Running Tests

To run unit tests:

```sh
npm test 
```

This will execute all test cases using Vitest.

## Folder Structure
```
todo-list/
├── client/         # React frontend (Vite + TS)
├── server/         # Node.js + Apollo GraphQL backend
├── README.md
```
