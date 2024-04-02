import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('token') ? true : false
  );
  const [userId, setUserId] = useState(
    sessionStorage.getItem('userId') || null
  );
  const [userName, setUserName] = useState(
    sessionStorage.getItem('userName') || null
  );
  const [email, setEmail] = useState(
    sessionStorage.getItem('email') || null
  );
  const [phone, setPhone] = useState(
    sessionStorage.getItem('phone') || null
  );

  const login = (token, id, name,email,phone) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', id);
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone); 
    setIsAuthenticated(true);
    setUserId(id);
    setUserName(name);
    setEmail(email);
    setPhone(phone);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');
    setIsAuthenticated(false);
    setUserId(null);
    setUserName(null);
    setEmail(null);
    setPhone(null);
    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, userName, login, logout, email,phone }}>
      {children}
    </AuthContext.Provider>
  );
};
