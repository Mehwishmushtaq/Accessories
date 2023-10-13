import { useContext, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { DataContainer } from "../../App";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DrawerNav from '../DrawerNav/DrawerNav';

const NavBar = () => {
  const { CartItem, setCartItem } = useContext(DataContainer);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const noBoxShadowStyle = {
    boxShadow: 'none',
  };
  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  useEffect(() => {
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  },)
  return (
    <>
      <Navbar
        fixed="top"
        expand="md"
        style={noBoxShadowStyle}
        className={isFixed ? "navbar fixed" : "navbar shadow-none"}
      >
        <DrawerNav />
        <Container className="navbar-container col-12">
          <Navbar.Brand to="/" className="col-3 justify-content-start">
            <ion-icon name="bag"></ion-icon>
            <h1 className="logo">Gadget Glamour</h1>
          </Navbar.Brand>

          <InputGroup className="col-3">
            <Form.Control
              placeholder="Search Gadgets"
              aria-label="Search Gadgets"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search Here
            </Button>
          </InputGroup>
          {/* Media cart and toggle */}
          <div className="d-flex">
            <div className="media-cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
              <Link aria-label="Go to Cart Page" to='/cart' className='cart' data-num={CartItem.length}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                setExpand(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav col-4">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item className="expanded-cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                <Link aria-label="Go to Cart Page" to='/cart' className='cart' data-num={CartItem.length}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="m-0" />
      <Navbar
        expand="sm"
        className={isFixed ? "navbar fixed" : "navbar"}
      >
        <Container className="navbar-container">
          {/* Media cart and toggle */}
          <div className="d-flex">
            <div className="media-cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
              <Link aria-label="Go to Cart Page" to='/cart' className='cart' data-num={CartItem.length}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="nav-icon">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                setExpand(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <Link aria-label="Go to Home Page" className="navbar-link row" to="/" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Home</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to Featured products Page" className="navbar-link row" to="/featured products" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Products</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to All products Page" className="navbar-link row" to="/all products" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Products</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to Contact Us Page" className="navbar-link row" to="/contact us" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Contact</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to About Us Page" className="navbar-link row" to="/about us" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">About</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to Cart Page" className="navbar-link row" to="/cart" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Cart</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link aria-label="Go to Home Page" className="navbar-link row" to="/" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Home</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to Featured products Page" className="navbar-link row" to="/featured products" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Products</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link aria-label="Go to All products Page" className="navbar-link row" to="/all products" onClick={() => setExpand(false)}>
                  <img src="http://localhost:3000/static/media/car-holder.3dc9e70c3f3b0411c1ac.jpg" className="nav-img" alt='' />
                  <span className="nav-link-label">Products</span>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
