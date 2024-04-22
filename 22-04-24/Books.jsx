import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Books() {
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
          <Nav.Link  href='portfolio' eventKey="link-2" style={{ color: 'black' }}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='about'  eventKey="link-3" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  href='books' eventKey="link-4" style={{ color: 'black' }}>Books</Nav.Link>
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
  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'3%', fontSize: '40px', fontFamily:'Garamond', }}>BOOKS</h1>
   <br />
    <Container style={{ backgroundColor: '#F0F0F0', height: '60vh', width: '100vw'}}>
  <Row>
    <Col xs={6} md={5}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '60px', fontFamily: 'Garamond', textAlign: 'left', marginBottom: '20px', marginTop:'40px' }}>BREAKFASTS</h1>
          <p style={{ fontSize: '19px', fontFamily: 'Garamond', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily: 'Garamond'}}>40$ 
          <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '150px', color: 'black ', marginLeft:'130px', borderColor: 'black', }}>Buy Now</Button></h1>
        </div>
      </div>
    </Col>
    <Col xs={6} md={7}>
      <div style={{ position: 'relative'}}>
        <img src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_750,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png" alt="Your abc" style={{ width: '100%', height:'50vh' ,marginTop:'40px'}} />
      </div>
    </Col>
  </Row>
</Container>
<br />

    <Container style={{ backgroundColor: '#F0F0F0', height: '60vh', width: '100vw'}}>
      <Row>
      <Col xs={6} md={5}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '60px', fontFamily: 'Garamond', textAlign: 'left', marginBottom: '20px', marginTop:'40px' }}>SUGAR & SPICE</h1>
          <p style={{ fontSize: '19px', fontFamily: 'Garamond', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily: 'Garamond'}}>34$
          <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '150px', color: 'black ', marginLeft:'130px', borderColor: 'black', }}>Buy Now</Button></h1>
        </div>
      </div>
        </Col>
        <Col xs={6} md={7}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_750,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png" alt="Your abc" style={{ width: '100%', height:'50vh', marginTop:'40px'}} />
          </div>
        </Col>
      </Row>
    </Container>
<br />
    <Container style={{ backgroundColor: '#F0F0F0', height: '60vh', width: '100vw'}}>
      <Row>
      <Col xs={6} md={5}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '60px', fontFamily: 'Garamond', textAlign: 'left', marginTop:'40px', }}>HOLIDAY SEASON SPECIALS</h1>
          <p style={{ fontSize: '19px', fontFamily: 'Garamond', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily: 'Garamond'}}>25$
          <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '150px', color: 'black ', marginLeft:'130px', borderColor: 'black', }}>Buy Now</Button></h1>
        </div>
      </div>
      </Col>
        <Col xs={6} md={7}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_750,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png" alt="Your abc" style={{ width: '100%', height:'50vh', marginTop:'40px'}} />
           
          </div>
        </Col>
      </Row>
    </Container>
    <br />

    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div> <br />

    <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='xyz'>Wix</a></p>

    </>
  );
}

export default Books;
