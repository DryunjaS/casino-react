import React from 'react'
import style from './card.module.scss'
import { useNavigate } from 'react-router-dom'

const Card = ({ href }: { href: string }) => {
	const navigate = useNavigate()
	return (
		<div
			className={style.wrap}
			onClick={() => navigate(href, { replace: false })}
		>
			<img
				src='./imgs/roulette-wheel.png'
				alt='imgGame'
				className={style.imgGame}
			/>
			<button className={style.btn}>Play</button>
		</div>
	)
}

export default Card
