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
// import {
// 	useRequestGetProducts,
// 	useRequestAddVacuumCleaner,
// 	useRequestUpdateSmartphone,
// 	useRequestDeleteHairDryer,
// } from './hooks'
// import { ProductList, Loader } from './components'

// export const App = () => {
// 	const [refreshProducts, setRefreshProducts] = useState(false)
// 	const { isLoading } = useRequestGetProducts(refreshProducts)

// 	const { requestAddVacuumCleaner, isCreating } = useRequestAddVacuumCleaner(
// 		refreshProducts,
// 		setRefreshProducts
// 	)

// 	const { requestUpdateSmartphone, isUpdating } = useRequestUpdateSmartphone(
// 		refreshProducts,
// 		setRefreshProducts
// 	)

// 	const { requestDeleteHairDryer, isDeleting } = useRequestDeleteHairDryer(
// 		refreshProducts,
// 		setRefreshProducts
// 	)

// 	return (
// 		<div className={styles.app}>
// 			{isLoading ? <Loader /> : <ProductList />}
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

//! JSON Placeholder
// Бывает так, что нужно протестировать вид страницы с заполнением данными, причём с нормальным количеством данных, чтобы было более наглядно и похоже на конечный вид приложения. Для этого можно использовать тот же JSON Server в связке с другим пакетом, например Faker. Таких пакетов тоже немало, они предоставляют заготовленные данные — тексты, картинки и может что-то ещё. Либо генерируют случайные данные в любых количествах.
// Но есть сервисы, которые ещё больше упрощают тестирование. Они предлагают просто адрес ручки (эндпоинта), по которой мы можем ходить и получать массивы данных для тестирования. И не приходится даже устанавливать никакие пакеты. Посмотрим как пользоваться таким сервисом на примере JSONPlaceholder.
export const App = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [isCreating, setIsCreating] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts)
			})
			.finally(() => setIsLoading(false))
	}, [])

	const requestAddPost = () => {
		setIsCreating(true)

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setProducts([...products, response])
				console.log('Статья добавлена, ответ сервера: ', response)
			})
			.finally(() => setIsCreating(false))
	}

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				products.map(({ id, title, body }) => (
					<div key={id} style={{ border: '1px solid blue', backgroundColor: 'azure', color: 'brown', padding: '10px', margin: '10px 50px' }}>
						{title} - {body}
					</div>
				))
			)}
			<button disabled={isCreating} onClick={requestAddPost}>
				Добавить статью
			</button>
		</div>
	)
}
// Как понимаете, это уже не совсем аналог сервера. Это просто ручка, которая возвращает какой-то набор данных. При создании, обновлении и удалении ручка возвращает ожидаемые данные, будто бы сервер действительно что-то делал. Но по факту мы никак не влияем на серверные данные. И чтобы изобразить работу CRUD — нам нужно реализовывать его самостоятельно с использованием состояния компонента.
// Иногда может пригодится, но, на мой взгляд, сервис не особо полезный. Когда разрабатываете приложение, то нам обычно требуются не какие-то там данные, а такие, которые свойственны именно для нашего приложения. Однако, для таких случаев как набор статей или комментариев JSON Placeholder может помочь.
// Промежуточные итоги:
// JSONPlaceholder — это бесплатный онлайн-сервис, предоставляющий фейковое REST API для тестирования и прототипирования.
// Он предоставляет набор готовых ресурсов (например, пользователей, постов, комментариев).
// Сервис JSON Placeholder позволяет отправлять фейковые запросы на создание, обновление и удаление данных, но фактические данные на сервере не изменяются. Вместо этого, сервис возвращает фиктивные ответы, указывающие на успешное выполнение операции.
