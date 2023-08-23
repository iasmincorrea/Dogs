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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/Dogs" element={<Home />} />
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
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
