import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from '../pages/signup';

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signup />} path="/" exact />
        <Route element={<Signup />} path="/signup" exact />
        <Route element={<Signup />} path="/login" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
