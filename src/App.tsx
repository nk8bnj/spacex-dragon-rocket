import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import RocketPage from './pages/RocketPage/RocketPage'

import './App.scss'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/rockets/:rocketId' element={<RocketPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App
