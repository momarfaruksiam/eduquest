import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';

export default function Search() {
    return (
        <div className='w-full flex border border-b-2 border-main bg-main/50 rounded overflow-hidden text-subtext'>
            <input
                type="text"
                placeholder='Search here...'
                className='p-1 px-2 font-medium text-lg bg-bg w-full'
            />
            <button className='px-8 text-bg text-xl'><FaSearch /></button>
        </div>
    )
}
