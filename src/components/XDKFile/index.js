import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const XDKFile = ({
	label, name,
	hint, value, id,
	error, onChange,
	onBlur, onFocus, register,
	placeholder,
}) => (
	<>
		<label htmlFor={id}>{ label }</label>
		<input
			type="file"
			value={value}
			id={id}
			name={name}
			ref={register}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			accept="image/*"
			placeholder={placeholder}
			className={`file-input ${error ? 'bg-red-l-50' : ''}`}
		/>
		<small>{ hint }</small>
	</>
) // XDKFile

XDKFile.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	hint: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object,
	]),
	value: PropTypes.string,
	id: PropTypes.string,
	error: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object,
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	register: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
} // propTypes

XDKFile.defaultProps = {
	label: '',
	hint: '',
	value: '',
	id: '',
	error: false,
	onChange: () => undefined,
	onBlur: () => undefined,
	onFocus: () => undefined,
	placeholder: '',
} // defaultProps

export default XDKFile
