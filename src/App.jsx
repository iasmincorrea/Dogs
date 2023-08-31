import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Photo from './Components/Photo/Photo';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';

import { UserStorage } from './UserContext';
import UserProfile from './Pages/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
