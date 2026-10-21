import React from 'react'

export default function Input({ type, placeholder, name, value, className, onClick, onChange, error }) {
    return (
        <div className='flex flex-col'>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onClick={onClick}
                onChange={onChange}
                className={`${className} border-2 border-highlight/50 p-2 rounded focus:border-highlight`}
            />
            {error && <span className='text-sm text-danger p-1'>* {error}</span>}
        </div>
    )
}
