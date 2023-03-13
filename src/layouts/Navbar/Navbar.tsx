import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../utils/Icon';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>React Shop</h1>
			<ul>
				<li>
					<Link to="/" className="link">
						Shop
					</Link>
				</li>
				<li>Most wanted</li>
				<li>New arrival</li>
				<li>Brands</li>
			</ul>

			<ul>
				<li>
					<Link to="cart" className="link">
						<CartIcon />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
