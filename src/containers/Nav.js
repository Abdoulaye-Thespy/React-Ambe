import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare}  from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function MyNav() {
    const enveloppeIcon = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const youtubeIcon = <FontAwesomeIcon icon={faYoutubeSquare} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />
    const instagramIcon = <FontAwesomeIcon icon = {faInstagramSquare} />
    const tiktokIcon = <FontAwesomeIcon icon = {faTiktok} />
    const appleplayIcon = <FontAwesomeIcon icon = {faApple} />
    const faSpotifyIcon = <FontAwesomeIcon icon={faSpotify} />

    return (
        <>
            <Navbar bg="black" expand="lg" className="mb-3">
              <Container fluid className='navbar'>
                <Navbar.Brand href="/" className='text-white'>Logo Here</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/" className='white-text montserat-font'>HOME</Nav.Link>
                      <Nav.Link href="about" className='white-text montserat-font'>ABOUT-ME</Nav.Link>
                      <Nav.Link href="music" className='white-text montserat-font'>MUSIC</Nav.Link>
                      <Nav.Link href="music" className='white-text montserat-font'>VIDEOS</Nav.Link>
                      <Nav.Link href="about" className='white-text montserat-font'>NEWSLETTER</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1" className='text-white icons-socials'>{facebookIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='text-white icons-socials'>{twitterIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='text-white icons-socials'>{instagramIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='white-text icons-socials'>{youtubeIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='white-text icons-socials'>{tiktokIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='white-text icons-socials'>{appleplayIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='white-text icons-socials'>{faSpotifyIcon}</Nav.Link>
                      <Nav.Link href="#action2" className='white-text icons-socials'>
                          {enveloppeIcon}
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </>
      );
}