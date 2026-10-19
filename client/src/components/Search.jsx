import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';

export default function Search() {
    return (
        <div className='w-full flex border-2 border-subtext/50 bg-subtext/50 rounded-lg overflow-hidden text-subtext'>
            <input
                type="text"
                placeholder='Search here...'
                className='p-1 px-2 font-medium text-lg bg-bg w-full'
            />
            <button className='px-8 text-bg text-xl'><FaSearch /></button>
        </div>
    )
}
