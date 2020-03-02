import React from 'react'

const XDKButton = ({ value, type, className, onClick, disabled
}) => (
	<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`XDKButton ${className || ''}`}
	>
		{value}
	</button>
)

export default XDKButton
