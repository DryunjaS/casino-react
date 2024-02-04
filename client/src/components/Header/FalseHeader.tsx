import React from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.scss'

const FalseHeader = () => {
	return (
		<div className={style.header}>
			<nav className={style.nav}>
				<Link to='/main' id={style.logo_main}>
					<div id={style.text}>
						<h1 className={style.h1}>
							CA<span id={style.offset}>SI</span>NO
						</h1>
					</div>
				</Link>
				<Link to='/auth'>
					<button className={style.reg}>Sign In</button>
				</Link>
			</nav>
		</div>
	)
}

export default FalseHeader
