import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NaviBar = () => {
    return (
      <Navbar className="fontvariantsc mx-auto my-3 mb-5">
				<Navbar.Collapse>
					<Nav className="justify-content-center mx-auto">
						<NavLink exact to="/" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Home
						</NavLink>
						<NavLink to="/champions" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Champions
						</NavLink>
						<NavLink to="/teambuilder" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Team Builder
						</NavLink>
						<NavLink to="/tierlist" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Tier List
						</NavLink>
					</Nav>
				</Navbar.Collapse>
		</Navbar>
    )
}

export default NaviBar;