import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Web1() { 
  return (
    <div style={{backgroundColor: "pink",marginBottom:'10%',width: "100%", padding: "160px 0"}}>
        <center><br /><br />
        <h1>Connect With Our Digital Marketing Experts</h1><br /><br />
        <p>Lorem ipsum dolor sit amet consectetur adispiscing elit. Perspiciatis adipisci voluptate eveniet quasi
         molestiae blanditiis unde similique, illum consequuntur recusandae.</p><br /><br />
      </center>
     
    <div className='Container' style={{width:"50%",margin:"auto",padding:"10px", backgroundColor:"white",borderRadius:"10px"}}>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Enter Name" style={{width:"200px"}}/>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="email" placeholder="Enter Phone number"  style={{width:"200px"}}/>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  style={{width:"200px"}}/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Leave a comment here"  style={{height:"177px"}}/>
        </Col>
        <center>
      <Button variant="primary" size="lg">
        Get Started
      </Button></center>
        <br />
      </Row>
      </div>
     
      </div>
    
  )
}

