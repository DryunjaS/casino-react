import React, { useState } from 'react'
import TrueHeader from './TrueHeader'
import FalseHeader from './FalseHeader'

const Header = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)

	return <div>{isAuth ? <TrueHeader /> : <FalseHeader />}</div>
}

export default Header
