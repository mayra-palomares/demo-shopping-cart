import React, { createContext, ReactNode, useState } from 'react';
import Filter from '../types/Filter';
const initialFilter = new Filter();

export const FiltersContext = createContext({});

type Props = {
	children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
	const [filters, setFilters] = useState(initialFilter);
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};
