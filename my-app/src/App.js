import { useState, useEffect } from 'react'
import styles from './app.module.css'

//! useEffect
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

//! Мок бэкенда
// const PRODUCTS_MOCK = [
// 	{
// 		id: '001',
// 		name: 'Телевизор',
// 		price: 39900,
// 	},
// 	{
// 		id: '002',
// 		name: 'Смартфон',
// 		price: 18900,
// 	},
// 	{
// 		id: '003',
// 		name: 'Фен',
// 		price: 1749,
// 	},
// ]

// export const App = () => {
// 	const [products, setProducts] = useState([])
// 	const [isLoading, setIsLoading] = useState(false)

// 	useEffect(() => {
// 		setIsLoading(true)

// 		new Promise((resolve) => {
// 			setTimeout(() => {
// 				resolve({ json: () => PRODUCTS_MOCK })
// 			}, 5000)
// 		})
// 			.then((loadedData) => loadedData.json())
// 			.then((loadedProducts) => {
// 				setProducts(loadedProducts)
// 			})
// 			.finally(() => {
// 				setIsLoading(false)
// 			})
// 	}, [])

// 	return (
// 		<div className={styles.app}>
// 			{isLoading ? (
//         // https://cssloaders.github.io/
// 				<div className={styles.loader}></div>
// 			) : (
// 				products.map(({ id, name, price }) => (
// 					<div key={id}>
// 						{name} - {price} руб
// 					</div>
// 				))
// 			)}
// 		</div>
// 	)
// }

//! JSON Server. GET
// https://www.npmjs.com/package/json-server
// 1). npm install -g json-server
// 2). Create a db.json file with some data
// 3). cd my-app
// 4). json-server --watch src/db.json --port 3005
// 5). json-server --watch src/db.json --port 3005 --delay 2500 (с задержкой подгрузки данных в 2,5 секунды)

// export const App = () => {
// 	const [products, setProducts] = useState([])
// 	const [isLoading, setIsLoading] = useState(false)

// 	useEffect(() => {
// 		setIsLoading(true)

// 		fetch('http://localhost:5967/products')
// 			.then((loadedData) => loadedData.json())
// 			.then((loadedProducts) => {
// 				setProducts(loadedProducts)
// 			})
// 			.finally(() => {
// 				setIsLoading(false)
// 			})
// 	}, [])

// 	return (
// 		<div className={styles.app}>
// 			{isLoading ? (
// 				// https://cssloaders.github.io/
// 				<div className={styles.loader}></div>
// 			) : (
// 				products.map(({ id, name, price }) => (
// 					<div key={id}>
// 						{name} - {price} руб
// 					</div>
// 				))
// 			)}
// 		</div>
// 	)
// }

//! POST
// https://jsonplaceholder.typicode.com/
// export const App = () => {
// 	const [products, setProducts] = useState([])
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [isCreating, setIsCreating] = useState(false)
// 	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)

// 	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

// 	useEffect(() => {
// 		setIsLoading(true)

// 		fetch('http://localhost:3005/products')
// 			.then((loadedData) => loadedData.json())
// 			.then((loadedProducts) => {
// 				setProducts(loadedProducts)
// 			})
// 			.finally(() => {
// 				setIsLoading(false)
// 			})
// 	}, [refreshProductsFlag])

// 	const requestAddVacuumCleaner = () => {
// 		setIsCreating(true)
// 		fetch('http://localhost:3005/products', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json; charset=utf-8' },
// 			body: JSON.stringify({
// 				name: 'Новый пылесос',
// 				price: 4690,
// 			}),
// 		})
// 			.then((rawResponse) => rawResponse.json())
// 			.then((response) => {
// 				console.log('Пылесос добавлен! Ответ сервера:', response)
// 				refreshProducts()
// 			})
// 			.finally(() => setIsCreating(false))
// 	}

// 	return (
// 		<div className={styles.app}>
// 			{isLoading ? (
// 				// https://cssloaders.github.io/
// 				<div className={styles.loader}></div>
// 			) : (
// 				products.map(({ id, name, price }) => (
// 					<div key={id}>
// 						{name} - {price} руб
// 					</div>
// 				))
// 			)}
// 			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
// 				Добавить пылесос
// 			</button>
// 		</div>
// 	)
// }

//! PUT, PATCH, DELETE
// export const App = () => {
// 	const [products, setProducts] = useState([])
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [isCreating, setIsCreating] = useState(false)
// 	const [isUpdating, setIsUpdating] = useState(false)
// 	const [isDeleting, setIsDeleting] = useState(false)
// 	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)

// 	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

// 	useEffect(() => {
// 		setIsLoading(true)

// 		fetch('http://localhost:3005/products')
// 			.then((loadedData) => loadedData.json())
// 			.then((loadedProducts) => {
// 				setProducts(loadedProducts)
// 			})
// 			.finally(() => {
// 				setIsLoading(false)
// 			})
// 	}, [refreshProductsFlag])

// 	const requestAddVacuumCleaner = () => {
// 		setIsCreating(true)
// 		fetch('http://localhost:3005/products', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json; charset=utf-8' },
// 			body: JSON.stringify({
// 				name: 'Новый пылесос',
// 				price: 4690,
// 			}),
// 		})
// 			.then((rawResponse) => rawResponse.json())
// 			.then((response) => {
// 				console.log('Пылесос добавлен! Ответ сервера:', response)
// 				refreshProducts()
// 			})
// 			.finally(() => setIsCreating(false))
// 	}

// 	const requestUpdateSmartphone = () => {
// 		setIsUpdating(true)
// 		fetch('http://localhost:3005/products/002', {
// 			method: 'PUT',
// 			headers: { 'Content-Type': 'application/json; charset=utf-8' },
// 			body: JSON.stringify({
// 				name: 'Смартфон',
// 				price: 17900,
// 			}),
// 		})
// 			.then((rawResponse) => rawResponse.json())
// 			.then((response) => {
// 				console.log('Смартфон обновлён! Ответ сервера:', response)
// 				refreshProducts()
// 			})
// 			.finally(() => setIsUpdating(false))
// 	}

// 	const requestDeleteHairDryer = () => {
// 		setIsDeleting(true)
// 		fetch('http://localhost:3005/products/003', {
// 			method: 'DELETE',
// 		})
// 			.then((rawResponse) => rawResponse.json())
// 			.then((response) => {
// 				console.log('Фен удалён! Ответ сервера:', response)
// 				refreshProducts()
// 			})
// 			.finally(() => setIsDeleting(false))
// 	}

// 	return (
// 		<div className={styles.app}>
// 			{isLoading ? (
// 				// https://cssloaders.github.io/
// 				<div className={styles.loader}></div>
// 			) : (
// 				products.map(({ id, name, price }) => (
// 					<div key={id}>
// 						{name} - {price} руб
// 					</div>
// 				))
// 			)}
// 			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
// 				Добавить пылесос
// 			</button>
// 			<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
// 				Обновить смартфон
// 			</button>
// 			<button disabled={isDeleting} onClick={requestDeleteHairDryer}>
// 				Удалить фен
// 			</button>
// 		</div>
// 	)
// }

//! Пользовательские хуки. Добавление товара
import {
	useRequestGetProducts,
	useRequestAddVacuumCleaner,
	useRequestUpdateSmartphone,
	useRequestDeleteHairDryer,
} from './hooks'

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false)
	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag)

	const { products, isLoading } = useRequestGetProducts(refreshProductsFlag)
	const { isCreating, requestAddVacuumCleaner } =
		useRequestAddVacuumCleaner(refreshProducts)
	const { isUpdating, requestUpdateSmartphone } =
		useRequestUpdateSmartphone(refreshProducts)
	const { isDeleting, requestDeleteHairDryer } =
		useRequestDeleteHairDryer(refreshProducts)

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
			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
				Добавить пылесос
			</button>
			<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
				Обновить смартфон
			</button>
			<button disabled={isDeleting} onClick={requestDeleteHairDryer}>
				Удалить фен
			</button>
		</div>
	)
}
