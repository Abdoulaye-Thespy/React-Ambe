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
         <Row>
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
                  Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.Content goes here.
                  </p>
                  <Button variant="outline-light" className='continue-reading montserat-font'>Continue Reading</Button>
              </div>
               
            </Col>
         </Row>
         <Row>
             <Col>
                <div align="center" className='button-about-me'>
                <Button variant="outline-danger">READ MORE ABOUT <i>AMBE</i></Button>
                </div>
             </Col>
         </Row>
      </Container>
     </>
    );
}