import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Portfolio() {
  const imageUrl='https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_367,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg';
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container className='row-g-12'>
        <Navbar.Brand className='col-6 fw-bold'  href="#home" style={{marginRight:'40px',fontSize:'40px'}}>WIX.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <p style={{marginLeft:'-20px',marginTop:'15px'}}>Click edit and create your own amazing website</p>
            <Nav.Link href="#home" id="opt" style={{textDecoration:'underline', marginTop:'7px'}}>read me</Nav.Link>
            <Button variant="primary" style={{borderRadius:'30px',marginLeft:'16px'}}>Edit this site</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <nav
        className="navbar navbar-expand-lg bg-body-tertiary text-center bg-white sticky-top"
        id="nav-custom"
      >
        <div className="container-fluid">
          <Link className="navbar-brand col-4 my-4" href="#">
            J.ALISSA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse col-10 d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/client-albums">
                  Client-Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    <div className="navbar-container mt-4" style={{top: 18, width: '100%', zIndex: 100 }}>
        <p><h3><center>PORTFOLIO</center></h3></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' , top:'280%', marginTop:'-2%', }}>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '800px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '17%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontStyle: 'italic'
          }}>
            EDITORIAL
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '16%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '800px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontStyle: 'italic'
          }}>
          FOOD AND SERVE
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '50%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '800px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '83%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontStyle: 'italic'
          }}>
            BAKED <span>GOODS</span>
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '50%', left: '83%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
      </div>

      <div className='IconContainer' style={{marginLeft:'600px'}} >
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '10px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />
    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    </>
  );
}

export default Portfolio;
