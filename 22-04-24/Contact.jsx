import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () => {
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
          <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='clientalbum' eventKey="link-6" style={{ color: 'black' }}>ClientAlbum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='contact' eventKey="link-7" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
          
        </Nav>
      </div>
    <br></br>
    
    <Container className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'99%',height:'80%'}}>
        <div className='' style={{flexDirection:'row',backgroundColor:'light-grey',width:'97%'}}>
        <img src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_538,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg"
         alt="" style={{height:"110vh", width:"190%"}}  /> 
            </div>
            <div style={{marginLeft:"35%", marginTop:"6%"}}>
            <h2> GET IN TOUCH</h2><br/>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. <br/><br/>

                Tel: 123-456-7890  |  Email: info@mysite.com
            </p><br/>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Last Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email"/>
        <Form.Label>Subject*</Form.Label>
        <Form.Control type="text"/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button className="btn" style={{backgroundColor:"black",borderColor:"black",borderRadius:"0", marginLeft:"69%",height:"30px",width:"80px",padding:"1px"}}>Submit</Button>
    </Form><br/>
        <p>Stay Up-To-Date with New Posts</p>
        <Form>
        <Form.Label>Email*</Form.Label><br/>
        <input type="mail" name="mail" style={{width:"220px", height:"35px"}}/>
        <Button className="btn" style={{backgroundColor:"black", borderColor:"black",borderRadius:"0", marginLeft:"2px", height:"40px",width:"130px", padding:"1px"}}>Subscribe Now</Button>
        </Form>
    </div>      
</Container>
<br />
    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
    <div>
        <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
      </div>
    </>
  );
}
export default Contact