import { ReactNode } from 'react'
import Header from './Header/HeaderPage'
import Footer from './Footer/Footer'

const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Wrapper
