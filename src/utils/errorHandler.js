export default function errorHandler(toastToggle, error) {
	if (
		error.response
		&& error.response.data
		&& error.response.data.error
	) {
		toastToggle('error', error.response.data.error)
		return
	} // if

	if (error.message) {
		toastToggle('error', error.message)
		return
	} // if

	return toastToggle('error', 'Ocorreu um erro inesperado.')
} // errorHandler
