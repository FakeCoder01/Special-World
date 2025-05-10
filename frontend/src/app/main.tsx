import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/shared/styles/index.scss'

import App from './App'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter basename='/Special-World'>
			<App />
		</BrowserRouter>
	</Provider>
)
