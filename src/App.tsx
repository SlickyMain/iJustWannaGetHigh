import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom'

const App: React.FC = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default App