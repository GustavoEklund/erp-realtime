import StockItemCategory from '../models/StockItemCategory'
import jwt from 'jsonwebtoken'

const StockItemCategoriesController = {
	async index(request, response)
	{
		return response.json({ null: null })
	}, // index

	async findAll(request, response)
	{
		const stockItemCategories = await StockItemCategory.findAll()

		if (!stockItemCategories || stockItemCategories.length < 1) {
			return response.status(400).json({ error: 'Nenhuma categoria encontrada.' })
		} // if

		return response.status(200).json({ payload: { data: stockItemCategories }})
	}, // findAll

	async store(request, response)
	{
		try {
			const { categoryName } = request.body

			if (!categoryName) {
				throw Error('Informe o nome da categoria.')
			} // if

			if (categoryName.length < 3) {
				throw Error('O nome da categoria deve ter pelo menos 3 catacteres.')
			} // if

			const stockItemCategory = await StockItemCategory.create({
				name: categoryName,
				enabled: true,
				created_by: request.user.id,
				updated_by: request.user.id,
			}) // create

			return response.status(200).json({ payload: { message: 'Categoria criada com sucesso!' }})
		} catch(error) {
			return response.status(401).json({ error: error.message })
		} // catch
	} // store
} // StockItemCategoriesController

export default StockItemCategoriesController
