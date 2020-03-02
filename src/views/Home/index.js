import React from 'react'
import { logout } from '../../services/auth'

function Home() {
	return (
		<div>
			Home
			<br />
			<br />
			<button type="button" onClick={() => logout()}>Logout</button>
		</div>
	) // return
} // Home

export default Home
