import React from 'react'
import { toast } from 'react-toastify'


import Input from '../utils/Input'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('GOod')
    }


    return (
        <main className='flex items-center m-2 translate-y-[40%]'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 mx-auto bg-card shadow rounded p-4 m-2 max-w-120 w-full'>
                <h1 className='font-semibold py-2 text-2xl text-main'>Forget password</h1>
                <Input
                    type={'text'}
                    placeholder={'Username or email'}
                />
                <span
                    onClick={() => { navigate('/sign-in') }}
                    className='text-sm text-main select-none cursor-pointer'>Password remembered?</span>
                <button
                    type='submit'
                    className='bg-main p-2 text-bg font-semibold rounded'>Submit</button>
            </form>
        </main>
    )
}
