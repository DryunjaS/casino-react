// Routes.tsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './page/main'
import AuthPage from './page/auth'
import GamePage from './page/game'

const MyRoutes = () => {
	return (
		<Routes>
			<Route path='/main' element={<MainPage />} />
			<Route path='/game/roullete' element={<GamePage />} />
			<Route path='/about' element={<AuthPage />} />
		</Routes>
	)
}

export default MyRoutes
