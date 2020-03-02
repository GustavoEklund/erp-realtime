import argon2 from 'argon2'
import User from '../models/User'
import AuthController, { generateToken } from './AuthController'

function validateData(data)
{
	if (typeof data !== 'object') {
		throw TypeError('Formato de dados inválida.')
	} // if

	const { username, password, name } = data

	if (typeof username !== 'string') {
		throw TypeError('Usuário não informado.')
	} // if

	if (username.length < 3) {
		throw RangeError('O usuário deve ter pelo menos 3 caracteres.')
	} // if

	if (typeof password !== 'string') {
		throw TypeError('Senha não informada.')
	} // if

	if (password.length < 6) {
		throw RangeError('A senha deve ter pelo menos 6 caracteres.')
	} // if

	if (typeof name !== 'string') {
		throw TypeError('Nome não informado')
	} // if

	if (name.length < 3) {
		throw RangeError('O nome deve ter pelo menos 3 caracteres')
	} // if
} // validateData

const UserController = {
	async index(request, response)
	{
		const users = await User.findAll()

		return response.json(users)
	},

	async store(request, response)
	{
		try {
			validateData(request.body)

			const { user } = request
			const { username, name } = request.body

			const password = await argon2.hash(request.body.password)

			const newUser = await User.create({
				username,
				password,
				name,
				enabled: true,
				created_by: user.id,
				updated_by: user.id,
			}) // create

			return response.status(201).json({
				payload: {
					message: 'Usuário criado com sucesso!',
				} // payload
			}) // json
		} catch(error) {
			return response.status(400).json({ error: error.message })
		} // catch
	} // store
} // UserController

export default UserController
