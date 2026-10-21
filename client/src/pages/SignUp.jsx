import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


import { useNavigate } from 'react-router-dom'


import serverName from '../functions/serverName'
import Input from '../utils/Input'


export default function SignUp() {
    const navigate = useNavigate()
    const [part, setPart] = useState(0)

    const [formData, setFormData] = useState({
        fullName: '', username: '', email: '', password: '', confirmPassword: '', verificationCode: ''
    })


    const [formDataError, setFormDataError] = useState({
        fullName: '', username: '', email: '', password: '', confirmPassword: '', verificationCode: ''
    })

    const fillUpFormData = (e) => {
        if (!e.target.value)
            setFormDataError(prev => ({
                ...prev,
                [e.target.name]: `Fill up this field!`
            }))
        else
            setFormDataError(prev => ({
                ...prev,
                [e.target.name]: ''
            }))



        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    const checkFormData = () => {
        const formFilds = ['fullName', 'username', 'email',
            formData.password && 'password', formData.confirmPassword && 'confirmPassword',
            formData.verificationCode && 'verificationCode'].filter(Boolean)

        let noError = true

        formFilds.forEach(item => {
            if (!formData[item]) {
                setFormDataError(prev => ({
                    ...prev,
                    [item]: `Fill up this field!`
                }))

                noError = false
            } else
                setFormDataError(prev => ({
                    ...prev,
                    [item]: ''
                }))
        })

        return noError
    }


    const checkUser = async () => {
        if (!checkFormData())
            return

        try {
            const response = await axios.post(serverName + '/find-user', formData, { withCredentials: true })

            console.log(response)
            toast.warning(response.data.message)
            if (response.status === 200)
                setFormDataError(prev => ({
                    ...prev,
                    email: 'This email is already registered!',
                    username: 'This username is already registered!'
                }))
            else if (response.status === 201)
                setFormDataError(prev => ({
                    ...prev,
                    email: 'This email is already registered!'
                }))
            else if (response.status === 202)
                setFormDataError(prev => ({
                    ...prev,
                    username: 'This username is already registered!'
                }))
        } catch (error) {
            if (error.status === 400) {
                console.log(error.response)
                setPart(1)
                return true
            } else
                console.log(error)
        }
    }


    const handleSignUp = async (e) => {
        e.preventDefault()
        if (checkUser())
            try {
                const response = await axios.post(serverName + '/sign-up', formData, { withCredentials: true })

                console.log(response.message)
                toast.success(response.message)
            } catch (error) {
                console.log(error?.response?.data?.message)
            }

    }

    return (
        <main className='flex items-center m-2 translate-y-[40%]'>
            <form
                onSubmit={handleSignUp}
                className='flex flex-col gap-2 mx-auto bg-card shadow rounded p-4 m-2 max-w-120 w-full'>
                <h1 className='font-semibold py-2 text-2xl text-main'>Sign up</h1>


                {part === 0 && <>
                    <Input
                        type={'text'}
                        placeholder={'Full name'}
                        name={'fullName'}
                        value={formData.fullName}
                        error={formDataError.fullName}
                        onChange={fillUpFormData}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Email'}
                        name={'email'}
                        value={formData.email}
                        error={formDataError.email}
                        onChange={fillUpFormData}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Username'}
                        name={'username'}
                        value={formData.username}
                        error={formDataError.username}
                        onChange={fillUpFormData}
                    />
                </>}


                {part === 1 && <>
                    <Input
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        value={formData.password}
                        error={formDataError.password}
                        onChange={fillUpFormData}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Confirm password'}
                        name={'confirmPassword'}
                        value={formData.confirmPassword}
                        error={formDataError.confirmPassword}
                        onChange={fillUpFormData}
                    />
                </>}


                <span
                    onClick={() => { navigate('/sign-in') }}
                    className='text-sm text-main select-none cursor-pointer'>
                    Have an account?
                </span>


                {part === 0 &&
                    <div
                        onClick={checkUser}
                        className='bg-main p-2 text-bg font-semibold rounded text-center'>
                        Continue
                    </div>
                }


                {part === 1 &&
                    <button
                        type='submit'
                        className='bg-main p-2 text-bg font-semibold rounded'>
                        Sign up
                    </button>
                }

            </form>
        </main>
    )
}
