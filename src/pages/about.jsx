import React from 'react';
import Navbar from '../components/navbar.jsx';

const About = () => (
  <>
    <Navbar />
    <div style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are passionate about building great web
        applications with React.
      </p>
    </div>
  </>
);

export default About;