import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Mymusic from './Pages/MyMusic';

export default  function App() {

  let Component;
  // eslint-disable-next-line
  switch(window.location.pathname) {
    case "/":
    Component = <Home/>
    break;
    case "/music":
      Component = <Mymusic/>
      break;
  }
  return (

    <div className='body'>
      {Component}
    </div>
  );
}
