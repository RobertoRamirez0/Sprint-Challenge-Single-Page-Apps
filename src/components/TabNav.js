import React, { useState } from "react";
import { NavItem, NavLink, Nav} from 'reactstrap';
import { Link } from "react-router-dom";


export default function TabNav() {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink active><Link to="/">Home</Link></NavLink>
        <NavLink><Link to="/characters">Characters</Link></NavLink>
        <NavLink><Link to="/locations">Locations</Link></NavLink>
        <NavLink><Link to="/episodes">Episodes</Link></NavLink>
      </NavItem>
    </Nav>
  )
};
