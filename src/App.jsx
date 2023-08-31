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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/Dogs" element={<Home />} />
              <Route path="Dogs/login/*" element={<Login />} />
              <Route
                path="Dogs/conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="Dogs/foto/:id" element={<Photo />} />
              <Route path="Dogs/perfil/:user" element={<UserProfile />} />
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
