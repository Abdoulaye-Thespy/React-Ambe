import Carousel from 'react-bootstrap/Carousel';

export default function MyCaroussel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 images-on-caroussel"
          src='https://images.unsplash.com/photo-1668448388988-a901c54d954e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 images-on-caroussel"
          src='https://images.unsplash.com/photo-1668502915240-bfdb9e7ff272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 images-on-caroussel"
          src="https://images.pexels.com/photos/14185268/pexels-photo-14185268.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}