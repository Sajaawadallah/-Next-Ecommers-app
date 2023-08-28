import React from 'react'

const Input = ({ inputType, inputName, inputPlaceholder, inputValue }) => {
    return (
        <div>
            <input type={inputType} name={inputName} placeholder={inputPlaceholder} value={inputValue} />
        </div>
    )
}

export default Input
