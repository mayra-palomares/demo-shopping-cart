import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import IProduct from '../types/IProduct';

const useFilters = () => {
	const context = useContext(FiltersContext);

	if (context === undefined) {
		throw new Error('useFilters must be used within a FiltersProvider');
	}

	const { filters, setFilters } = context;

	const filterProducts = (products: IProduct[]): IProduct[] => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category)
			);
		});
	};

	return { filterProducts, filters, setFilters };
};

export default useFilters;
