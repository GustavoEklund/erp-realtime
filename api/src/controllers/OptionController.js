import Option from '../models/Option'
import User from '../models/User'

const OptionController = {
	async index(request, response)
	{
		const { user_id } = request.params

		const user = await User.findByPk(user_id, {
			include: { association: 'option' }
		}) // findByPk

		return response.json(user.option)
	},

	async store(request, response)
	{
		const { user_id } = request.params
		const { updated_by } = request.body

		const user = await User.findByPk(user_id)

		if (!user) {
			return response.status(400).json({ error: 'User not found'})
		} // if

		const option = await Option.create({
			user_id,
			updated_by,
		}) // create

		return response.json(option)
	} // store
} // OptionController

export default OptionController
