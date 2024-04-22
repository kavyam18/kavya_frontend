import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ClientAlbum() {
  const imageUrl='https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_358,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg';
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
        <h2 style={{color:'grey', marginLeft:'60px'}}>J. ALISSA</h2>
        <div style={{marginLeftleft:'85px'}}>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
        <Nav.Link href='/' eventKey="link-1" style={{ color: 'black' ,marginLeft:'400px'}} >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='portfolio' eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='about' eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='books' eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='clientalbum' eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href='contact' eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>
      </div>
  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'3%', fontSize: '50px', fontFamily:'Garamond', marginLeft:'2%'}}>CLIENT ALBUMS</h1>
   <br />
      <div style={{ display: 'flex', justifyContent: 'center' , top:'280%', marginTop:'-2%',width:'93%',marginLeft:'2%' }}>
        <div className='Image' style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'50px',
          margin:'20px', 
          width: '30%',
          height: '400px',
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
            GREEN EDITORIAL
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
          height: '400px',
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
          BREAD BAKING RECEPIES
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
          height: '400px',
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
            FRENCH <br /> COOKBOC <br />
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

export default ClientAlbum;
