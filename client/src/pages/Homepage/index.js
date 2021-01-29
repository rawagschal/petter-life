import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Signup from '../Signup';
import Login from '../Login';
import Nav from '../../components/Nav';

function Homepage() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default Homepage;
