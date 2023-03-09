import React from 'react';
import { useState } from 'react';
import './Filters.css';
import { categories } from '../../types/constants';

const Filters = () => {
	const [minPrice, setMinPrice] = useState(0);

	const handleChangeMinPrice = (event) => {
		setMinPrice(event.target.value);
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor="price">Price</label>
				<input
					type="range"
					id="price"
					min="0"
					max="1000"
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</div>

			<div>
				<label htmlFor="category">Category</label>
				<select id="category">
					{Object.entries(categories).map(([key, value]) => (
						<option value={key} key={key}>
							{value}
						</option>
					))}
				</select>
			</div>
		</section>
	);
};

export default Filters;
