// import logo from './logo.svg';
import React from 'react';
import './App.css';
import  MyNav from './containers/Nav'
import MyCaroussel from './containers/Caroussel'
import MyParallax from './containers/MyParallax'
import News from './containers/News'
import Music from './containers/Music'

function App() {
  return (

    <div className='body'>
    <MyNav />
    <MyCaroussel />
    <News />
    <MyParallax />
    <Music  />
    <MyParallax />
    <News />
    <News />
    <News />
    
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Datagend
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Coming soon
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
