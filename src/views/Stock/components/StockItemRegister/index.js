import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import api from '../../../../services/api'
import errorHandler from '../../../../utils/errorHandler'

import Select from 'react-select'
import NumberFormat from 'react-number-format'

import CreateStockItemCategory from '../CreateStockItemCategory/index'

import XDKButton from '../../../../components/XDKButton'
import XDKInput from '../../../../components/XDKInput'

export default function StockItemRegister({ toastToggle }) {
	const {
		register,
		handleSubmit,
		errors,
		setError,
		setValue,
	} = useForm()

	const [expireAlert, setExpireAlert] = useState(new Date())
	const [creatingCategory, setCreatingCategory] = useState(false)
	const [categories, setCategories] = useState([])
	const [type, setType] = useState('')

	async function fetchCategories() {
		try {
			const response = await api.get('stock-item-categories')
			setCategories(response.data.payload.data)
		} catch(error) {
			errorHandler(toastToggle, error)
		} // catch
	} // fetchCategories

	useEffect(() => {
		fetchCategories()
	}, [])

	function onChangeType(event)
	{
		console.log(event)
	}

	function onSubmit(data)
	{
		switch (data.value) {
			case 'comprimento':
				setType('mm')
				break
			case 'capacidade':
				setType('mL')
				break
			case 'massa':
				setType('mg')
				break
			case 'volume':
				setType('mm³')
				break
			case 'unidade':
				setType('Unidades')
				break
			default:
				setType('')
				break
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
		>
			<XDKInput
				label="Nome"
				placeholder="Nome"
				name="name"
				type="text"
				id="txtNome"
				autoComplete="off"
				register={register({ required: true, minLenght: 3 })}
				error={errors.name}
				hint={
					(errors.name && errors.name.type === 'required' && 'Informe o nome do item.')
					|| (errors.name && errors.name.type === 'minLenght' && 'O nome deve ter pelo menos 3 caracteres!')
				} // hint
			/>
			<XDKInput
				label="Marca"
				placeholder="Marca"
				name="brand"
				type="text"
				id="txtBrand"
				autoComplete="off"
				register={register({ required: true, minLenght: 3 })}
				error={errors.name}
				hint={
					(errors.name && errors.name.type === 'required' && 'Informe a marca do item.')
					|| (errors.name && errors.name.type === 'minLenght' && 'A marca deve ter pelo menos 3 caracteres!')
				} // hint
			/>
			<label style={{ marginLeft: '18px' }}>Unidade de medida</label>
			<Select
				placeholder="Unidade de medida..."
				onChange={onChangeType}
				options={[
					{ value: 'comprimento', label: 'Comprimento' },
					{ value: 'capacidade', label: 'Capacidade' },
					{ value: 'massa', label: 'Massa' },
					{ value: 'volume', label: 'Volume' },
					{ value: 'unidade', label: 'Unidade' },
				]} // options
			/>
			<small style={{ marginLeft: '18px', marginTop: '10'}}></small>
			<br />
			<label style={{ marginLeft: '18px' }}>Categoria</label>
			<Select
				placeholder="Categoria..."
				options={categories.map((value) => ({ value: value.id, label: value.name}))}
			/>
			<XDKButton
				type="button"
				value="+ Nova categoria"
				onClick={() => setCreatingCategory(!creatingCategory)}
			/>
			{creatingCategory ? <CreateStockItemCategory toastToggle={toastToggle} /> : null}
			<small style={{ marginLeft: '18px', marginTop: '10'}}></small>
			<br />
			<NumberFormat
				thousandSeparator="."
				decimalSeparator=","
				inputmode="numeric"
				prefix={type}
				customInput={XDKInput}
				label="Alerta de validade (dias)"
				placeholder="Alerta de validade"
				autoComplete="off"
				name="expireAlert"
				id="txtExpireAlert"
				register={register({ required: true })}
				error={errors.expireAlert}
				hint={
					(errors.expireAlert && errors.expireAlert.type === 'required' && 'Informe o alerta de validade.')
				} // hint
			/>
			<NumberFormat
				thousandSeparator="."
				decimalSeparator=","
				inputmode="numeric"
				customInput={XDKInput}
				label="Alerta de poucas unidades"
				placeholder="Alerta de poucas unidades"
				autoComplete="off"
				name="lowUnitsAlert"
				id="txtLowUnitsAlert"
				register={register({ required: true })}
				error={errors.lowUnitsAlert}
				hint={
					(errors.lowUnitsAlert && errors.lowUnitsAlert.type === 'required' && 'Informe o alerta de validade.')
				} // hint
			/>
			<XDKButton
				type="submit"
				value="Salvar"
			/>
		</form>
	) // return
} // StockItemRegister

StockItemRegister.propTypes = {
	toastToggle: PropTypes.func.isRequired,
}
