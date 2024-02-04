import React, { useState } from 'react'
import '../index.css'
import Card from '../components/Cards/Card'
import ListBanl from '../components/ListBank/ListBanl'
import Wrapper from '../components/Wrapper'

const MainPage = () => {
	const [hrefArr, setHrefArr] = useState<string[]>(['/game/roullete'])

	return (
		<Wrapper>
			<div className='main'>
				<div className='fildGame'>
					{hrefArr.map((el) => (
						<Card href={el} key={el} />
					))}
				</div>
				<div className='fildBank'>
					<ListBanl />
				</div>
			</div>
		</Wrapper>
	)
}

export default MainPage
