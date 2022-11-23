import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Mymusic from './Pages/MyMusic';

function App() {

  let Component;
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

export default App;
