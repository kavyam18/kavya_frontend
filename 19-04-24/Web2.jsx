import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardsProject() {
  return (
    <div>
      <Container className='row-g-12'>
      <Row  className="justify-content-center">
        <Col xs={12} md={12} lg={12} className="text-center mt-4">
          <p id="team" style={{ color: "blue" }}>Team</p>
        </Col>
      </Row>
    </Container>
     <header><h1 className='text-center'>Our Headworking <span style={{color: 'blue'}}>Team</span></h1></header>
     <Container className='d-flex mt-5'>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Walter White</Card.Title>
                  <Card.Text>
                    Chief Executive Officer
                  </Card.Text>
              </Card.Body>
          </Card>

        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Sarah Jhonson</Card.Title>
                  <Card.Text>
                    Product Maneger
                  </Card.Text>
              </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>William Anderson</Card.Title>
                  <Card.Text>
                  CEO
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Amenda Jepson</Card.Title>
                  <Card.Text>
                    Accountent
                  </Card.Text>
              </Card.Body>
          </Card>
        </Col>
      </Row>
     </Container>

    </div>
  )
}


