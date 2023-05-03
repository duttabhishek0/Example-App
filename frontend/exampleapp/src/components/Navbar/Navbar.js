import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FavoriteUniversity from '../FavoriteUniversity'

function ColorSchemesExample() {
  return (
    <>
     
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >University List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">All Universities</Nav.Link>
            <Nav.Link href="/Favourites">Favourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;