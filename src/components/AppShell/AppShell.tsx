import { FC, ReactNode } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

interface AppShellProps {
  children: ReactNode;
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-success">
        <Container>
          <Navbar.Brand className="text-light">Edabit-Clone</Navbar.Brand>

          <Navbar.Toggle
            style={{
              border: "none",
              outlineColor: "white",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "3rem",
              }}
            >
              &#8801;
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" as={NavLink} to="/exercises">
                Exercises
              </Nav.Link>
              <Nav.Link className="text-white" as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="container py-5">{children}</main>
    </>
  );
};
