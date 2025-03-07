import React, { useState } from "react";
import styled from "styled-components";
import { MAINLOGO } from "../images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src={MAINLOGO} alt="logo" />    
      </Logo>

      <MenuItems menuOpen={menuOpen}>
        <MenuItem className="active">Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>

      <HireMeButton>HIRE ME</HireMeButton>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: black;
  color: white;
  position: relative;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;

  .dot {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-left: 4px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 24px;
  font-size: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
    background: black;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 16px 0;
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;

  &.active {
    background: white;
    color: black;
    padding: 8px 16px;
    border-radius: 20px;
  }

  &:hover {
    color: gray;
  }
`;

const HireMeButton = styled.a`
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  font-size: 24px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
