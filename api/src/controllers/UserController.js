import User from '../models/User'

const UserController = {
	async index(request, response)
	{
		const users = await User.findAll()

		return response.json(users)
	},

	async store(request, response)
	{
		const {
			username,
			password,
			name,
			enabled,
			created_by,
			updated_by,
		} = request.body

		const user = await User.create({
			username,
			password,
			name,
			enabled,
			created_by,
			updated_by,
		})

		return response.json(user)
	} // store
} // UserController

export default UserController
