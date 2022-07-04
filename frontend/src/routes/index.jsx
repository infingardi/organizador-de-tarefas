import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from '../pages/signup';
import Login from '../pages/login';
import Tasks from '../pages/todo';

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tasks />} path="/tasks" exact />
        <Route element={<Signup />} path="/signup" exact />
        <Route element={<Login />} path="/login" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
