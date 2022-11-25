import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/esm/Button';

export default function Footer() {
    return (
     <>
       <Container className='footer'>
          <div className='footer-list-div'>
             <ul className='footer-list'>
                <li className='text-white'>
                   ABOUT
                </li>
                <li className='text-white'>
                   MUSIC
                </li>
                <li className='text-white'>
                   VIDEO
                </li>
             </ul>
          </div>
       <p className='text-white'>©  Ambe | PRIVACY & COOKIE POLICY</p>
      </Container>
     </>
    );
}