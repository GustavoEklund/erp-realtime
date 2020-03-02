import React from 'react'

const XDKRadio = ({ name, id, label, className }) => (
    <>
        <input 
            type="radio" 
            name={ name } 
            id={ id || '' }
        />
        <label htmlFor={ id || ''} className={ className || '' }>{ label }</label>
    </>
) // XDKRadio

export default XDKRadio
