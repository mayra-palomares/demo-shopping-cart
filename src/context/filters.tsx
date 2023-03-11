import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import Filter from '../types/Filter';
const initialFilter = new Filter();

type FilterContent = {
	filters: Filter;
	setFilters: Dispatch<SetStateAction<Filter>>;
};

export const FiltersContext = createContext<FilterContent>({} as FilterContent);

type Props = {
	children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
	const [filters, setFilters] = useState<Filter>(initialFilter);
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};
