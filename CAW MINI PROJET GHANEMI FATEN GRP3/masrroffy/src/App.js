import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import NavBar from './components/navbar';
import Home from './pages/home';
import AddTransaction from './pages/add-transaction';
import TransactionList from './pages/transaction-list';
import VisualReports from './pages/visual-reports';
import SignIn from './pages/sign-in';
import './App.css';


const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
   
          <Route
            path="/"
            element={isAuthenticated() ? <Navigate to="/home" replace /> : <Navigate to="/signin" replace />}
          />

       
          <Route path="/signin" element={<SignIn />} />

  
          <Route
            path="/home"
            element={
              isAuthenticated() ? (
                <>
                  <NavBar />
                  <Home />
                </>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/add-transaction"
            element={
              isAuthenticated() ? (
                <>
                  <NavBar />
                  <AddTransaction />
                </>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/transaction-list"
            element={
              isAuthenticated() ? (
                <>
                  <NavBar />
                  <TransactionList />
                </>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/visual-reports"
            element={
              isAuthenticated() ? (
                <>
                  <NavBar />
                  <VisualReports />
                </>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
