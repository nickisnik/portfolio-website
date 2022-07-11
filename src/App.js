import React, { Component, useState } from 'react';
import BubbleWrapper from './components/BubbleWrapper';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import {BorwserRouter, BrowserRouter, Link, Outlet, NavLink} from 'react-router-dom';

function App() {


  return (
    <div className="App">

      <svg className='svg-blur' xmlns="http://www.w3.org/2000/svg" /* viewBox="0 0 600 600" */ version="1.1">
        <defs>
            <filter id="goo" colorInterpolationFilters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                 in="blur"
                 mode="matrix"
                 values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 45 -15"
                 result="goo" />
                </filter>
        </defs>
      </svg>

      <BubbleWrapper />

      {/* <div className='color-bar'>
        <span>Welcome to my website!</span>
      </div> */}

      <nav className='navbar'>
        <span className='navbar-logo'>nick</span>
        <div className="navbar-links">
          <a href="https://github.com/nickisnik" target="_blank"><img className='contact-link' id='github' src="/GitHub-Mark-Light-32px.png"></img></a>
          <a href="https://www.linkedin.com/in/nik000/" target="_blank"><img className='contact-link' id='linkedin' src="/icons8-linkedin-96.png"></img></a>
        </div>
        {/* <button className='navbar-contact'>contact</button> */}
      </nav>

    <Outlet />

    <div className='control-panel'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}><span className='control-text'>Home</span></NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "link-active" : "link")}><span className='control-text'>Projects</span></NavLink>
            <a href='https://www.linkedin.com/in/nik000/' target="_blank" className={({ isActive }) => (isActive ? "link-active" : "link")}><span className='control-text'>Contact</span></a>
        </div>
    </div>
    
  );
}

export default App;
