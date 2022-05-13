import React, { Component } from 'react';
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

      <BubbleWrapper/>

      <div className='color-bar'>
        <span>Welcome to my website!</span>
      </div>

      <nav className='navbar'>
        <span className='navbar-logo'>logo</span>
        <button className='navbar-contact'>contact</button>
      </nav>

    <Outlet />

    <div className='control-panel'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}><div className='control-previous'>Home</div></NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "link-active" : "link")}><div className='control-next'>Projects</div></NavLink>
        </div>
    </div>
    
  );
}

export default App;
