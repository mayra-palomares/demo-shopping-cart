import ProductList from './components/ProductList/ProductList';
import { products } from './mocks/products.json';

function App() {
	return <ProductList products={products} />;
}

export default App;
