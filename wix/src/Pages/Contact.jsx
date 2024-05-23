import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import Navpage from '../Components/Nav';

const Contact = () => {
 return (
    <>
    <Nav></Nav>
    <Navpage/>
    <Container className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'99%',height:'80%'}}>
        <div className='' style={{flexDirection:'row',backgroundColor:'light-grey',width:'97%'}}>
        <img src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_538,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg"
         alt="" style={{height:"110vh", width:"190%"}}  /> 
            </div>
            <div style={{marginLeft:"35%", marginTop:"6%",fontFamily:'-moz-initial'}}>
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
<Footer></Footer>
    </>
  );
}
export default Contact