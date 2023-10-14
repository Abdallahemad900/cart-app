
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from './image/car1.png'

function AppNav (){
    const cart = useSelector(state => state.cart)
    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary justify-content-center">
        <Container>
        <Link to="/" className="d-inline-block navbar-brand"> 
  <img style={{width:"70px "}}
              alt=""
              src={img}
              width="30"
              height="30"
              className="d-inline-block "
            />{' '}
            carZone
  </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Link to="/" className="nav-link">Home</Link>

              <Link to="/product" className="nav-link">Products</Link>
              <Link to="/cart" className="nav-link">Cart - {cart.length}</Link>
              <Link to="/td" className="nav-link">GLTF</Link>
              <Link to="/fb" className="nav-link">FBX</Link>
              <Link to="/women" className="nav-link">Women</Link>
              <Link to="/anime" className="nav-link">anime</Link>
              <Link to="/shoe" className="nav-link">Shoes Config</Link>


            </Nav>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    )
}
export default AppNav ;
