import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChangeRequestEditPage from './pages/ChangeRequestEditPage';
import ChangeRequestEntryPage from './pages/ChangeRequestEntryPage';
import CiarEntryPage from './pages/CiarEntryPage';
import CiarEditPage from './pages/CiarEditPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import CiarHome from './pages/CiarHome';
import ChangeHome from './pages/ChangeHome';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ciar' element={<CiarHome />} />
        <Route path='/change-request' element={<ChangeHome />} />
        <Route path='/change-request/new' element={<ChangeRequestEntryPage />} />
        <Route path='/change-request/edit' element={<ChangeRequestEditPage />} />
        <Route path='/ciar/new' element={<CiarEntryPage />} />
        <Route path='/ciar/edit' element={<CiarEditPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

