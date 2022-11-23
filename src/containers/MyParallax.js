import { Parallax } from 'react-parallax';
import Ambe from '../images/Ambe.jpeg'

export default function MyParallax () {
  return (
    <Parallax className='img-parallax' bgImage={Ambe} bgImageAlt="the cat" strength={600}>

    </Parallax>
  );
}