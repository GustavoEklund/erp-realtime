import React, { useState, useEffect, useCallback } from 'react'
import api from '../../services/api'
import errorHandler from '../../utils/errorHandler'
//import { useForm } from 'react-hook-form'

import StockItemRegister from './components/StockItemRegister/index'

import { Table } from './styles'
import XDKToast from '../../components/XDKToast'
import XDKButton from '../../components/XDKButton'

export default function Stock()
{
	const [stockItems, setStockItems] = useState([])
	const [registerStockItem, setRegisterStockItem] = useState(false)
	const [toast, setToast] = useState({ isShowing: false, type: '', message: '' })

	// Esconder ou exibir o toast
	const toastToggle = useCallback((
		toggleType = toast.type,
		toggleMessage = toast.message,
	) => setToast({
		isShowing: !toast.isShowing,
		type: toggleType,
		message: toggleMessage,
	}), [toast.type, toast.message, toast.isShowing]) // toastToggle

	const changeToastMessage = (type, message) => setToast({
		isShowing: true,
		message,
		type,
	}) // changeToastMessage

	const getStockItems = useCallback(async () => {
		try {
			const response = await api.get('stock-items')
			setStockItems(response.request.payload.data)
		} catch(error) {
			errorHandler(toastToggle, error)
		} // catch
	}, [toastToggle]) // getStockItems

	useEffect(() => {
		getStockItems()
	}, [])

	return (
		<div>
			<XDKButton
				type="button"
				value="+ Cadastrar"
				onClick={() => setRegisterStockItem(!registerStockItem)}
			/>
			{registerStockItem ? (
				<StockItemRegister toastToggle={toastToggle} />
			) : null }
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Marca</th>
						<th>Tipo</th>
						<th>Qntd.</th>
						<th>Categoria</th>
					</tr>
				</thead>
				<tbody>
					{stockItems.map(() => (
						<tr>
							<td>1</td>
							<td>Hambúrger</td>
							<td>Friboi</td>
							<td>unidade</td>
							<td>20</td>
							<td>Carnes</td>
						</tr>
					))}
				</tbody>
			</Table>
			<XDKToast
				isShowing={toast.isShowing}
				hide={() => toastToggle()}
				type={toast.type}
				message={toast.message}
				timeout={6000}
			/>
		</div>
	) // return
} // stock
