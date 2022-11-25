import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Headers';
import Button from 'react-bootstrap/Button';
import Ambe from '../images/Ambeportrait.jpeg'

export default function News() {
    return (
     <>
       <Container className='news-section' >
         <Header value="about" />
         <Row xs={1} md={1} lg={2}>
            <Col>
              <img
                className="d-block w-100 images-on-news"
                src={Ambe}
                alt="First slide"
                />
            </Col>
            <Col>
              <div className='about-resume'>
                  <h1 className='text-white montserat-font'>WHO'S AMBE</h1>
                  <p className='text-white montserat-font' align="center">
                  Ambe Tenbong, better known by his artistic name “Ambe” is a Cameroonian Musician who hails from the northwest region of Cameroon. Ambe has been in the limelight of the Cameroonian and African music industries for over a decade. At the dawn of his musical career in the mid-2000s, he was called Denzyl. He has played a significant role in the promotion of the Anglophone music Industry in Cameroon from his musical debut. 
                  </p>
                  <a href='/about'>  <Button variant="outline-light" className='continue-reading montserat-font'>Continue Reading</Button></a>
              </div>
               
            </Col>
         </Row>
         <Row>
             <Col>
                <div align="center" className='button-about-me'>
                    <a href='/about'><Button variant="outline-danger">READ MORE ABOUT <i>AMBE</i></Button></a>
                </div>
             </Col>
         </Row>
      </Container>
     </>
    );
}