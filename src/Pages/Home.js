// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import  MyNav from '../containers/Nav'
import MyCaroussel from '../containers/Caroussel'
import MyParallax from '../containers/MyParallax'
import News from '../containers/News'
import Music from '../containers/Music'
import Video from '../containers/Video';
import Footer from '../containers/Footer';

function Home() {
  return (

    <div className='body'>
    <MyNav />
    <MyCaroussel />
    <News />
    <MyParallax />
    <Music  />
    <MyParallax />
    <Video />
    <MyParallax />
    <Footer />
    
    </div>
  );
}

export default Home;
