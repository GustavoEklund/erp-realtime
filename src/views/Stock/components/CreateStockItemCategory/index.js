import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import errorHandler from '../../../../utils/errorHandler'

import { Create } from './styles.js'
import XDKInput from '../../../../components/XDKInput/index.js'
import XDKButton from '../../../../components/XDKButton/index.js'
import api from '../../../../services/api.js'

export default function CreateStockItemCategory({ toastToggle })
{
	const {
		register,
		handleSubmit,
		errors,
		setValue,
	} = useForm()

	async function onSubmit(data) {
		try {
			const response = await api.post('/stock-item-categories', data)

			if (response.status === 200) {
				toastToggle('success', response.data.payload.message)
				setValue('categoryName', '')
			} // if
		} catch(error) {
			errorHandler(toastToggle, error)
		} // catch
	} // onSubmit

	return (
		<Create onSubmit={handleSubmit(onSubmit)}>
			<h2>Criar nova categoria</h2>
			<XDKInput
				placeholder="Nome da categoria"
				label="Nome da categoria"
				name="categoryName"
				register={register({ required: true, minLength: 3 })}
				error={errors.categoryName}
				hint={
					(errors.categoryName && errors.categoryName.type === 'required' && 'Informe o nome da categoria.')
					|| (errors.categoryName && errors.categoryName.type === 'minLength' && 'O nome da categoria deve ter pelo menos 3 catacteres.')
				} // hint
			/>
			<XDKButton
				value="Salvar"
				type="submit"
			/>
		</Create>
	) // return
} // CreateStockItemCategory

CreateStockItemCategory.propTypes = {
	toastToggle: PropTypes.func.isRequired,
} // PropTypes
