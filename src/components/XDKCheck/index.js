import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const XDKCheck = ({
	label, name, hint,
	value, id, error,
	checked, register, onChange,
	onBlur, onFocus, onClick,
}) => (
	<div className="xdk-check">
		<input
			type="checkbox"
			id={id}
			name={name}
			value={value}
			checked={checked}
			error={error ? 'bg-red-l-50' : ''}
			onClick={onClick}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			ref={register}
		/>
		<label htmlFor={id}>{ label }</label>
		<small>{ hint }</small>
	</div>
) // XDKCheck

XDKCheck.defaultProps = {
	label: '',
	name: '',
	hint: '',
	value: '',
	id: '',
	error: false,
	checked: false,
	register: () => undefined,
	onChange: () => undefined,
	onBlur: () => undefined,
	onFocus: () => undefined,
	onClick: () => undefined,
} // defaultProps

XDKCheck.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	hint: PropTypes.any,
	value: PropTypes.string,
	id: PropTypes.string,
	error: PropTypes.bool,
	checked: PropTypes.bool,
	register: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	onClick: PropTypes.func,
} // propTypes

export default XDKCheck
