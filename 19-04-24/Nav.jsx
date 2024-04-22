import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'black' }}>Home</Nav.Link>
            {/* Add more Nav.Link components here if needed */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
