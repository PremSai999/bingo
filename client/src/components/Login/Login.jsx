import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utils/gameFuncs'
import { toast } from 'react-toastify'
import '../../App.css'

function Login() {
	const navigate = useNavigate();
    const {email, setEmail, password, setPassword} = useContext(UserContext);

    async function loginUser(event) {
		console.log( process.env.REACT_APP_SERVER_URL)
		event.preventDefault()
		const data = await login(email, password);
		if (data.user) {
            sessionStorage.setItem('token',data.user)
			sessionStorage.setItem('name',data.name)
			toast.success('Login successful')
			navigate('/')
		} else {
			toast.error('Please check your username and password')
		}
	}

	return (
		<div className='register-form'>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

export default Login