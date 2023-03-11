import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import IProduct from '../types/Product';

const useFilters = () => {
	const { filters, setFilters } = useContext(FiltersContext);

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
