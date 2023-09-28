import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { defaultTheme, title_api } from '../configs.js';

import LoadingPages from './pages/LoadingPages.jsx';
import ErrorPages from './pages/ErrorPages.jsx';
import HomePages from './pages/HomePages.jsx';
import LoginPages from './pages/LoginPages.jsx';
import RegisterPages from './pages/RegisterPages.jsx';
import ProfilePages from './pages/ProfilePages.jsx';
import NotFoundPages from './Pages/NotFoundPages.jsx';

const App = () => {
  useEffect(() => {
    document.title = title_api;
    const savedTheme = window.localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', savedTheme || defaultTheme);
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route path="*" errorElement={ErrorPages} loader={LoadingPages} Component={NotFoundPages} />
        <Route path="/" errorElement={ErrorPages} loader={LoadingPages} Component={HomePages} />
        <Route path="/profile" errorElement={ErrorPages} loader={LoadingPages} Component={ProfilePages} />
        <Route path="/login" errorElement={ErrorPages} loader={LoadingPages} Component={LoginPages} />
        <Route path="/register" errorElement={ErrorPages} loader={LoadingPages} Component={RegisterPages} />
      </Routes>
    </React.Fragment>
  );
};

export default App;