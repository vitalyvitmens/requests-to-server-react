import { useState, useEffect } from 'react'
import styles from './app.module.css'

// export const App = () => {
// 	const [products, setProducts] = useState([])

// 	//! https://mocki.io/
// 	//! Создай своё api используя сайт mocki.io добавь свой json массив в окно вкладки Free API Editor
// 	// [
// 	//   {
// 	//     "id": "001",
// 	//     "name": "Телевизор",
// 	//     "price": 39900
// 	//   },
// 	//   {
// 	//     "id": "002",
// 	//     "name": "Смартфон",
// 	//     "price": 18900
// 	//   },
// 	//   {
// 	//     "id": "003",
// 	//     "name": "Фен",
// 	//     "price": 1749
// 	//   }
// 	// ]
//   const siteUrl = 'https://mocki.io/v1/820032a8-aaa7-4681-a4de-3cb0af50bc51'

// 	useEffect(() => {
// 		fetch(siteUrl)
// 			.then((loadedData) => loadedData.json())
// 			.then((loadedProducts) => {
// 				setProducts(loadedProducts)
// 			})
// 	}, [siteUrl])

// 	return (
// 		<div className={styles.app}>
// 			{products.map(({ id, name, price }) => (
// 				<div key={id}>
// 					{name} - {price} руб
// 				</div>
// 			))}
// 		</div>
// 	)
// }

// export const App = (siteUrl) => {
// 	const onClickHandler = () => {}

// 	useEffect(() => {
// 		document.addEventListener('click', onClickHandler)

// 		return () => document.removeEventListener('click', onClickHandler)
// 	}, [siteUrl])

// 	return <div className={styles.app}></div>
// }

// export const App = () => {
// 	const [counter, setCounter] = useState(0)

// 	useEffect(() => {
// 		console.log('Первый call back:', counter)

// 		return () => console.log('Второй call back:', counter)
// 	}, [counter])

// 	return (
// 		<div className={styles.app}>
// 			<button onClick={() => setCounter(counter + 1)}>+ 1</button>
// 		</div>
// 	)
// }

const PRODUCTS_MOCK = [
	{
		id: '001',
		name: 'Телевизор',
		price: 39900,
	},
	{
		id: '002',
		name: 'Смартфон',
		price: 18900,
	},
	{
		id: '003',
		name: 'Фен',
		price: 1749,
	},
]

export const App = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		new Promise((resolve) => {
			setTimeout(() => {
				resolve({ json: () => PRODUCTS_MOCK })
			}, 5000)
		})
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<div className={styles.app}>
			{isLoading ? (
        // https://cssloaders.github.io/
				<div className={styles.loader}></div>
			) : (
				products.map(({ id, name, price }) => (
					<div key={id}>
						{name} - {price} руб
					</div>
				))
			)}
		</div>
	)
}
