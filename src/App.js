import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portal from './components/Portal';

function App() {
  return (
    <div>
      <Header/>
      <Portal/>
      <Footer/>
    </div>
  );
}

export default App;
