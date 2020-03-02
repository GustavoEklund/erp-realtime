import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { login } from '../../services/auth'

import XDKInput from '../../components/XDKInput'
import XDKButton from '../../components/XDKButton'
import XDKToast from '../../components/XDKToast'

function Login() {
	const {
		register,
		handleSubmit,
		errors,
		setError,
	} = useForm()

	const [toast, setToast] = useState({ isShowing: false, type: '', message: '' })
	const [redirect, setRedirect] = useState(false)

	// Esconder ou exibir o toast
	const toastToggle = (
		toggleType = toast.type,
		toggleMessage = toast.message,
	) => setToast({
		isShowing: !toast.isShowing,
		type: toggleType,
		message: toggleMessage,
	}) // toastToggle

	const changeToastMessage = (type, message) => setToast({
		isShowing: true,
		message,
		type,
	}) // changeToastMessage

	const authenticate = async (data) => {
		try {
			if (toast.isShowing) {
				changeToastMessage('loading', 'Autenticando...')
			} else {
				toastToggle('loading', 'Autenticando...')
			} // else

			const response = await api.post('/authentication', {
				username: data.username,
				password: data.password,
			}) // post

			if (response.request.response.error || response.status !== 200) {
				setError('password', 'wrong', 'Usuário ou senha incorretos!')
				setError('username', 'wrong', 'Usuário ou senha incorretos!')
				throw Error(response.request.response.error)
			} // if

			// Armazenando o token de autenticação
			login(response.data.payload.accessToken)

			// Feedback de estado para o usuário
			toastToggle('loading', 'Iniciando a sessão...')
			setTimeout(() => changeToastMessage('loading', 'Redirecionando...'), 1500)
			setRedirect(true)
		} catch (error) {
			toastToggle('error', error.response.data.error)
		} // catch
	} // authenticate

	useEffect(() => () => clearTimeout(changeToastMessage), [])

	const onSubmit = (data) => authenticate(data)

	return redirect ? <Redirect to="/inicio" /> : (
		<form onSubmit={handleSubmit(onSubmit)}>
			<XDKInput
				name="username"
				label="Usuário"
				type="text"
				placeholder="Usuário"
				id="txtUsername"
				autoComplete="username"
				register={register({ required: true })}
				error={errors.username}
				hint={(errors.username && errors.username.type === 'required' && 'Informe o usuário!')}
			/>
			<XDKInput
				name="password"
				label="Senha"
				type="password"
				placeholder="Senha - 1º acesso CPF"
				id="txtPassword"
				register={register({ required: true })}
				autoComplete="current-password"
				error={errors.username}
				hint={
					(errors.password && errors.password.type === 'required' && 'Informe a senha!')
					|| (errors.password && errors.password.type === 'wrong' && errors.password.message)
				} // hint
			/>
			<XDKButton
				type="submit"
				value={(<>Entrar&nbsp;</>)}
			/>
			<XDKToast
				isShowing={toast.isShowing}
				hide={() => toastToggle()}
				type={toast.type}
				message={toast.message}
				timeout={10000}
			/>
		</form>
	) // Return
} // Login

export default Login
