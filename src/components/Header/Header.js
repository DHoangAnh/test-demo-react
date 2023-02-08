import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">Hỏi Dân IT</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/users">User</NavLink>
            <NavLink className="nav-link" to="/admins">Admin</NavLink>
          </Nav>
          <Nav>
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item >Log In</NavDropdown.Item>
                <NavDropdown.Item >Log Out</NavDropdown.Item>
                <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
