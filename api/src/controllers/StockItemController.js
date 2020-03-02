import StockItem from '../models/StockItem'

const StockItemController = {
	async index(request, response)
	{
		return response.json({ null: null })
	},

	async findAll(request, response)
	{
		const stockItems = await StockItem.findAll()

		if (!stockItems || stockItems.length < 1) {
			return response.status(400).json({ error: 'Nenhum item encontrado.' })
		} // if

		return response.status(200).json({ payload: { data: stockItems }})
	},

	async store(request, response)
	{
		const { user_id } = request.params
		const { updated_by } = request.body

		const user = await User.findByPk(user_id)

		if (!user) {
			return response.status(400).json({ error: 'User not found' })
		} // if

		const option = await Option.create({
			user_id,
			updated_by,
		}) // create

		return response.json(option)
	} // store
} // StockItemController

export default StockItemController
