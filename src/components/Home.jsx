import Carousel from 'react-bootstrap/Carousel';
import img from './image/car1.png'
import img1 from './image/car2.png'
import img2 from './image/car3.png'
import Product from './Products';

function Head () {
  return (

    <div>
<Carousel slide={false} data-bs-theme="dark" className=' mt-1'>
    <Carousel.Item >
      <img 
      style={{height:"80vh", marginLeft: "100px"}}
        className="img-fluid "
        src={img}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
      style={{height:"80vh", marginLeft: "300px"}}
        className="d-block w-500 "
        src={img1}
        alt="Second slide"
      />
      <Carousel.Caption >
        <h5 >Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{height:"80vh", marginLeft: "200px"}}
        className="me-5"
        src={img2}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Product/>
    </div>  
  )
}

export default Head