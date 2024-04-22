import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image1 from './Image1.jpg'; 
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';


function Home() {
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
      
      <div className='Image' style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding:'80px',
        marginLeft:'2%',
        marginRight:'30%',
        width: '95%',
        height: '800px',
        overflowY: 'scroll',
      }}>
        <p style={{ 
        position: 'absolute', 
        top: '30%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '64px',
        fontStyle: 'itallic'
      }}>
        THE ART OF FOOD
      </p><br></br>
      <p style={{ 
        position: 'absolute', 
        top: '40%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '24px',
        fontStyle: 'times new roman' 
      }}>
        P H O T O G R A P H Y
      </p><br></br>
      <button style={{ 
        position: 'absolute', 
        bottom: '390px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        backgroundColor: 'transparent', 
        border: 'outlined',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
      }}>
       View More
      </button>
      </div>
      <div className='IconContainer' style={{marginLeft:'45%'}}>
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '20px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '20px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '20px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />

    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    
    </>
  );
}

export default Home;
