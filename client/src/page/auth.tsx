import React from 'react'
import '../index.css'

const AuthPage = () => {
	return (
		<div className='wrap_auth'>
			<form action='' className='form__auth'>
				<label>Enter your email address</label>
				<input type='email' name='' id='' />
				<label>Enter the password</label>
				<input type='password' name='' id='' />
				<button>Sign In</button>
			</form>
		</div>
	)
}

export default AuthPage
