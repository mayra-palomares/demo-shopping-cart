import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>
				<Link to="/" className="link">
					React Shop
				</Link>
			</h1>
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
						<MdOutlineShoppingCart />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
