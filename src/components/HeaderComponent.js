import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/staffs">
                  <span className="fa fa-home fa-lg"></span> Nhân viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/departments">
                  <span className="fa fa-info fa-lg"></span> Phòng ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salarys">
                  <span className="fa fa-list fa-lg"></span> Bảng Lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
