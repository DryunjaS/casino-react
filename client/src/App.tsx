import { BrowserRouter } from 'react-router-dom'
import MainPage from './page/main'
import MyRoutes from './Routes'

import './index.css'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<MyRoutes />
			</div>
		</BrowserRouter>
	)
}

export default App
