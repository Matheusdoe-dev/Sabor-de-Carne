import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  HeaderWrapper,
  NavBrand,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Col xs="4">
            <NavBrand to="/">SC</NavBrand>
          </Col>
          <Col xs="8" style={{ alignSelf: "center" }}>
            <Nav>
              <NavMenu>
                <NavItem>
                  <NavLink to="/">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/churrascaria">Churrascaria</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu">Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sobre">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contato">Contato</NavLink>
                </NavItem>
              </NavMenu>
            </Nav>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
