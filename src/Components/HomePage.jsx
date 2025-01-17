import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import About from './About';

const HomePage = () => {
  
  return (

    <div className="bg-gray-50 min-h-screen flex flex-col">
        
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;