import { Navbar as NavbarBS, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import CartWidget from "../common/CartWidget";

const Navbar = () => {
  const {type} = useParams();

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
            <NavDropdown title="Productos">
              <NavLink to="/productos/remera" className={`nav-link ${type === "remera" && "active"}`}>
                Remeras
              </NavLink>
              <NavLink to="/productos/buzo" className={`nav-link ${type === "buzo" && "active"}`}>
                Buzos
              </NavLink>
              <NavLink to="/productos/pantalon" className={`nav-link ${type === "pantalon" && "active"}`}>
                Pantalones
              </NavLink>
              <NavLink to="/productos/zapatilla" className={`nav-link ${type === "zapatilla" && "active"}`}>
                Zapatillas
              </NavLink>
            </NavDropdown>
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
