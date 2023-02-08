import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StepOne from './Components/StepOne/StepOne'
import StepThree from './Components/StepThree/StepThree'
import StepTwo from './Components/StepTwo/StepTwo'
import AppProvider from './ContextAPI/AppProvider'

const RoutesFile = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes>
                    <Route path='/' element={<StepOne/>}/>
                    <Route path='/step2' element={<StepTwo/>}/>
                    <Route path='/step3' element={<StepThree/>}/>
                </Routes>
            </AppProvider>
        </BrowserRouter>
    )
}

export default RoutesFile