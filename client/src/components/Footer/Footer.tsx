import React from 'react'
import { Link } from 'react-router-dom'
import style from './footer.module.scss'

const Footer = () => {
	return (
		<div className={style.footer}>
			<nav className={style.nav}>
				<Link to='/about'>Аbout the project</Link>
				<Link to='/contacts'>Сontacts</Link>
			</nav>
		</div>
	)
}

export default Footer
