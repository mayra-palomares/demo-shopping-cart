import React, { useId } from 'react';
import './Filters.css';
import { categories } from '../../types/constants';
import useFilters from '../../hooks/useFilters';

const Filters = () => {
	const { filters, setFilters } = useFilters();
	const minPriceId = useId();
	const categoryId = useId();

	const handleChangeMinPrice = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const value = event.target.value;
		setFilters((prevState) => ({
			...prevState,
			minPrice: +value,
		}));
	};

	const handleChangeCategory = (
		event: React.ChangeEvent<HTMLSelectElement>
	): void => {
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
					value={filters.minPrice}
				/>
				<span>${filters.minPrice}</span>
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
