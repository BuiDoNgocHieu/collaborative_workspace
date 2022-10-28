import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Bootstrap</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          {" "}
          Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              {" "}
              Home
            </NavLink>
            <NavLink to="/Board" className="nav-link">
              Board{" "}
            </NavLink>
            <NavLink to="/Backlog" className="nav-link">
              Backlog
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login" onClick={() => handleLogin()}>
              {" "}
              Log in
            </button>
            <button className="btn-Signup" onClick={() => handleRegister()}>
              {" "}
              Sign up
            </button>

            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item> 
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Log Out</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
