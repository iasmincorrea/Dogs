import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import { UserStorage } from './UserContext';
import User from './Pages/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/dogs" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
