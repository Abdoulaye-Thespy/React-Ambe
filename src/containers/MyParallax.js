import { Parallax } from 'react-parallax';
import palmier from '../images/palmier.jpg'

export default function MyParallax () {
  return (
    <Parallax className='img-parallax' bgImage={palmier} bgImageAlt="the cat" strength={600}>

    </Parallax>
  );
}