import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="header-item-container">
        <Navbar.Brand href="#home" className="app-name">
          Ecami
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/user" className="nav-link">
              User
            </NavLink>
            <NavLink to="/Admin" className="nav-link">
              Admin
            </NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/user">User</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <div className="header-button-container">
              <button className="header-login-button">Login</button>
              <button className="header-register-button">Register</button>
            </div>
            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Settings and securities</NavDropdown.Item>
              <NavDropdown.Item>Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
