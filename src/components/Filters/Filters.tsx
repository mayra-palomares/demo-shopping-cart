import React, { useId } from 'react';
import { useState } from 'react';
import './Filters.css';
import { categories } from '../../types/constants';
import useFilters from '../../hooks/useFilters';

const Filters = () => {
	const [_, setFilters] = useFilters();
	const [minPrice, setMinPrice] = useState(0);
	const minPriceId = useId();
	const categoryId = useId();

	const handleChangeMinPrice = (event) => {
		const value = event.target.value;
		setMinPrice(value);
		setFilters((prevState) => ({
			...prevState,
			minPrice: value,
		}));
	};

	const handleChangeCategory = (event) => {
		const value = event.target.value;
		setFilters((prevState) => ({
			...prevState,
			category: value,
		}));
	};

	return (
		<section className="filters">
			<div>
				<label htmlFor={minPriceId}>Price</label>
				<input
					type="range"
					id={minPriceId}
					min="0"
					max="1000"
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryId}>Category</label>
				<select id={categoryId} onChange={handleChangeCategory}>
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
