import React, { useState } from 'react'
import { toast } from 'react-toastify'


import Input from '../utils/Input'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()
    const [part, setPart] = useState(1)


    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('GOod')
    }


    return (
        <main className='flex items-center m-2 translate-y-[40%]'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 mx-auto bg-card shadow rounded p-4 m-2 max-w-120 w-full'>
                <h1 className='font-semibold py-2 text-2xl text-main'>Sign up</h1>

                {part === 1 && <>
                    <Input
                        type={'text'}
                        placeholder={'Full name'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Username'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                    />
                </>}
                {part === 2 && <>
                    <Input
                        type={'text'}
                        placeholder={'Password'}
                    />

                    <Input
                        type={'password'}
                        placeholder={'Confirm password'}
                    />
                </>}
                <span
                    onClick={() => { navigate('/sign-in') }}
                    className='text-sm text-main select-none cursor-pointer'>Have an account?</span>

                {part === 3 ?
                    <button
                        type='submit'
                        className='bg-main p-2 text-bg font-semibold rounded select-none cursor-pointer'>
                        Submit
                    </button>
                    :
                    <div
                        className='bg-main p-2 text-bg font-semibold rounded text-center select-none cursor-pointer'
                        onClick={() => setPart(part + 1)}>
                        Next
                    </div>}
            </form>
        </main>
    )
}
