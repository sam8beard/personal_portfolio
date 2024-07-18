import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavigationBar.css'
function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-override" >
      <Container>
        <Navbar.Brand href="/personal_portfolio/">Sammy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/personal_portfolio/">Home</Nav.Link>
            {/* <Nav.Link href="/personal_portfolio/contact/">Contact Me</Nav.Link> */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://devpost.com/software/globalink" target="_blank">GlobaLink</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/alexbradshaw/Odin-Fork-Bombing-Squad" target="_blank">
                SAVY
              </NavDropdown.Item>
              <NavDropdown.Item href="">More to come!</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;