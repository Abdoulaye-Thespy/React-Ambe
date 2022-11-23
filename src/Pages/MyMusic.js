// import logo from './logo.svg';
import React from 'react';
import  MyNav from '../containers/Nav'
import MyParallax from '../containers/MyParallax'
import Music from '../containers/Music';

import Footer from '../containers/Footer';

export default function Mymusic() {
  return (

    <div className='body'>
    <MyNav />
    <MyParallax />
    <Music />
    <Footer />
    
    </div>
  );
}
