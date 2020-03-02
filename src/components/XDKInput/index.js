import React from 'react'
import { Input } from './styles'
import PropTypes from 'prop-types'

const XDKInput = ({
	label, name, placeholder,
	hint, type, id,
	error, autoComplete,
	onChange, onBlur, onFocus,
	register, className, value,
}) => (
	<Input>
		<label htmlFor={id}>{ label }</label>
		<input
			type={type || 'text'}
			placeholder={placeholder}
			id={id}
			value={value}
			name={name}
			ref={register}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			autoComplete={autoComplete}
			className={`XDKInput ${className || ''} ${error && 'error'}`}
		/>
		<small>{ hint }</small>
	</Input>
) // Input

XDKInput.defaultProps = {
	label: '',
	name: '',
	placeholder: '',
	hint: '',
	type: 'text',
	id: '',
	error: false,
	autoComplete: 'off',
	onChange: () => undefined,
	onBlur: () => undefined,
	onFocus: () => undefined,
	className: '',
} // defaultProps

XDKInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	hint: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object,
	]),
	type: PropTypes.string,
	id: PropTypes.string,
	error: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object,
	]),
	autoComplete: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	register: PropTypes.func.isRequired,
	className: PropTypes.string,
	value: PropTypes.string,
}

export default XDKInput
