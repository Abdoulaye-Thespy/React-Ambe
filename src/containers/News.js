import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Headers';
import Button from 'react-bootstrap/Button';

export default function News() {
    return (
     <>
       <Container className='news-section' >
         <Header value="about" />
         <Row>
            <Col>
              <img
                className="d-block w-100 images-on-news"
                src='https://images.unsplash.com/photo-1668448388988-a901c54d954e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
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