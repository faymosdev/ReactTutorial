import React from 'react';
import Navbar from '../components/navbar.jsx';

const About = () => (
  <>
    <Navbar />
    <body className='bg-blue-300'>
      <div style={{ padding: "2rem" }} className='text-center'>
        <h1 className='text-3xl font-bold pb-10 text-pink-500 pt-10'>About Us</h1>
        <p className='text-xl text-gray-900'>
          Welcome to our website! We are passionate about building great web
          applications with React.
        </p>
      </div>
    </body>
  </>
);

export default About;