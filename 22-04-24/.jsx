import React from 'react';
import Image2 from './Image2.jpg'; 
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import { Navbar, Nav } from 'react-bootstrap';
import {  Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';


function Portfolio() {
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
    <div className="nav-container d-flex mt-4" style={{ marginLeft:'-15px' }}>
        <h2 style={{color:'black', marginLeft:'60px',}}>J. ALISSA</h2>
      </div>
      <div>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
        <Nav.Link href='/' eventKey="link-1" style={{ color: 'black' }} >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='portfolio' eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='about' eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href='books' eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href='' eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href='clientalbum' eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='contact' eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
          
        </Nav>
      </div>
    <div className="navbar-container mt-4" style={{top: 18, width: '100%', zIndex: 100 }}>
        <p><h3><center>PORTFOLIO</center></h3></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' , top:'280%', marginTop:'10%', }}>
        <div className='Image' style={{
          backgroundImage: `url(${Image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'50px',
          width: '26%',
          height: '600px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '17%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '34px',
            fontStyle: 'italic'
          }}>
            EDITORIAL
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '65%', left: '16%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${Image3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'50px',
          width: '26%',
          height: '600px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '34px',
            fontStyle: 'italic'
          }}>
          FOOD AND SERVE
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '65%', left: '50%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
        <div className='Image' style={{
          backgroundImage: `url(${Image4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'50px',
          width: '26%',
          height: '600px',
        }}>
          <p style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '82%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontSize: '30px',
            fontStyle: 'italic'
          }}>
            BAKED GOODS
          </p><br></br>
          <Button variant="primary" className="image-button" 
            style={{ position: 'absolute', top: '65%', left: '83%', 
            transform: 'translate(-50%, -50%)',padding: '10px 20px',backgroundColor: 'transparent', border: 'outlined',
            borderRadius: '5px',color: 'white',cursor: 'pointer', borderColor:'black',
            fontSize: '16px', }}>View</Button>
        </div>
      </div>
      <div className='IconContainer'style={{marginLeft:'45%'}}>
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
