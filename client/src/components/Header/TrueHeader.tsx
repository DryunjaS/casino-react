import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.scss'
import store from '../../storage/store'
import { observer } from 'mobx-react'

const TrueHeader = observer(() => {
	const [nameUser, setNameUser] = useState<string | null>('Андрей')
	const [imgUser, setImgUser] = useState<string | null>(null)
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
				<div className={style.zero}></div>
				<div className={style.balans}>
					<img src='/imgs/money.png' alt='money' className={style.imgBalans} />
					<div className={style.balans}>{store.balans}</div>
				</div>
				<Link to='/profile' className={style.user}>
					<p className={style.userText}>{nameUser}</p>
					<img
						src={imgUser ?? '/imgs/imgUser.png'}
						alt='profile'
						className={style.imgUser}
					/>
				</Link>
				<img src='/imgs/imgOut.png' alt='Output' className={style.imgOut} />
			</nav>
		</div>
	)
})

export default TrueHeader
