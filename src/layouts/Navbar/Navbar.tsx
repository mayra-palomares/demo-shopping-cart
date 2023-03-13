import React from 'react';
import { CartIcon } from '../../utils/Icon';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>React Shop</h1>
			<ul>
				<li>Shop</li>
				<li>Most wanted</li>
				<li>New arrival</li>
				<li>Brands</li>
			</ul>

			<ul>
				<li>
					<CartIcon />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
