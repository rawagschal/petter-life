import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Header/>
      {/* <Login/> */}
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
