import React from 'react'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import routers from './routers/routers'

export default function App() {
  return <>
    <ToastContainer />
    <RouterProvider router={routers} />
  </>
}