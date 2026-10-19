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
                <h1 className='font-semibold py-2 text-2xl text-main'>Sign in</h1>
                <Input
                    type={'text'}
                    placeholder={'Username or email'}
                />
                <Input
                    type={'password'}
                    placeholder={'Password'}
                />
                <span
                    onClick={() => { navigate('/forgot-password') }}
                    className='text-sm text-main select-none cursor-pointer'>Forgot password?</span>
                <span
                    onClick={() => { navigate('/sign-up') }}
                    className='text-sm text-main select-none cursor-pointer'>Create account?</span>
                <button
                    type='submit'
                    className='bg-main p-2 text-bg font-semibold rounded'>Sign in</button>
            </form>
        </main>
    )
}
