import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import {TaskProvider} from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
