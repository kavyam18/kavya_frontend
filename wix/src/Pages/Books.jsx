import {  Container, Row, Col} from 'react-bootstrap';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Footer from '../Components/Footer';
import Navpage from '../Components/Nav';

function Books() {
  return (
    <>
    <Nav></Nav>
    <Navpage/>
  <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'3%', fontSize: '40px', fontFamily:'Garamond', }}>BOOKS</h1>
   <br />
    <Container style={{ backgroundColor: '#F0F0F0', height: '60vh', width: '100vw'}}>
  <Row>
    <Col xs={6} md={5}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ padding: '40px' }}>
          <h1 style={{ fontSize: '40px', fontFamily:'-moz-initial', textAlign: 'left', marginBottom: '20px', marginTop:'40px' }}>BREAKFASTS</h1>
          <p style={{ fontSize: '15px', fontFamily:'-moz-initial', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily:'-moz-initial'}}>40$ 
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
          <h1 style={{ fontSize: '40px', fontFamily:'-moz-initial', textAlign: 'left', marginBottom: '20px', marginTop:'40px' }}>SUGAR & SPICE</h1>
          <p style={{ fontSize: '15px', fontFamily:'-moz-initial', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily:'-moz-initial'}}>34$
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
          <h1 style={{ fontSize: '50px', fontFamily:'-moz-initial', textAlign: 'left', marginTop:'40px', }}>HOLIDAY SEASON SPECIALS</h1>
          <p style={{ fontSize: '15px', fontFamily:'-moz-initial', textAlign: 'left', marginBottom: '10px' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <h1 style={{ marginBottom: '20px', fontFamily:'-moz-initial'}}>25$
          <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '150px', color: 'black ', marginLeft:'130px', borderColor: 'black', }}>Buy Now</Button></h1>
        </div>
      </div>
      </Col>
        <Col xs={6} md={7}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_750,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png" 
            alt="Your abc" style={{ width: '100%', height:'50vh', marginTop:'40px'}} />
           
          </div>
        </Col>
      </Row>
    </Container>
    <br />
    <Footer></Footer>
    </>
  );
}

export default Books;
