import jwt from 'jsonwebtoken'
import argon2 from 'argon2'
import User from '../models/User'

const dotenv = require('dotenv')

async function generateAccessToken(user)
{

	const { id, username, name } = user

	const accessToken = jwt.sign({ id, username, name }, process.env.ACCESS_TOKEN_SECRET, {
		issuer: 'https://www.ranchocoyote.com',
		subject: `${user.id}`,
		audience: 'https://www.ranchocoyote.com',
	}) // sign

	const refreshToken = jwt.sign({ id, username, name }, process.env.REFRESH_TOKEN_SECRET, {
		issuer: 'https://www.ranchocoyote.com',
		subject: `${user.id}`,
		audience: 'https://www.ranchocoyote.com',
	}) // sign

	return { accessToken, refreshToken}
}

const AuthController = {
	async authenticateToken(request, response, next)
	{
		const authHeader = request.headers['authorization']
		const token = authHeader && authHeader.split(' ')[1]

		if (token === null) {
			return response.status(401).json({ error: 'Usuário não autenticado.' })
		} // if

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
			if (error) {
				return response.status(403).json({ error: 'Credenciais de autenticação inválidas.'})
			} // if

			request.user = user
			next()
		}) // verify
	}, //authenticateToken

	async authenticateUser(request, response) {
		try {
			const { username, password } = request.body

			const user = await User.findAll({
				attributes: ['id', 'username', 'password', 'name'],
				where: { username, enabled: true }
			}) // findAll

			if (!user[0]) {
				throw TypeError('Usuário ou senha inválidos.')
			} // if

			if (!await argon2.verify(user[0].dataValues.password, password)) {
				throw TypeError('Usuário ou senha inválidos.')
			} // if

			const tokens = await generateAccessToken(user[0].dataValues)

			return response.status(200).json({
				payload: {
					message: 'Usuário atutenticado!',
					...tokens,
				} // payload
			}) // json
		} catch(error) {
			return response.status(401).json({ error: error.message || 'Ocorreu um erro inesperado.' })
		} // catch
	}, // authenticateUser
}



export default AuthController
