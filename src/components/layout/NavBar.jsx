import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../common/CartWidget";

const Navbar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#home">American Vintage</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
      <CartWidget/>
    </NavbarBS>
  );
};

export default Navbar;
