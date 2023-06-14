import { useRequestGetProducts } from '../../hooks'

export const ProductList = (refreshProducts) => {
	const { products } = useRequestGetProducts(refreshProducts)

	return products.map(({ id, name, price }) => (
		<div key={id}>
			{name} - {price} руб
		</div>
	))
}
