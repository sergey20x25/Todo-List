import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <Navbar expand="sm" bg="dark" variant="dark">
    <Navbar.Brand>Todo List</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavLink to="/" exact className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
