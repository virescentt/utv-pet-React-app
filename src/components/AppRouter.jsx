import React from 'react';
import Posts from '../pages/Posts';
import About from '../pages/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />

        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/error" element={<Error />} />

        <Route path="*" element={<Navigate to="/error" />} />    
    </Routes>
  );
};

export default AppRouter;