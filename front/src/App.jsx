import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'

import { readWorkouts } from './services/workoutService.js'
import { readUsers } from './services/userService.js'
import { LoginForm } from './components/LoginForm.jsx'
import { RegisterForm } from './components/RegisterForm.jsx'

import { Login } from './pages/LoginPage.jsx'
import { Register } from './pages/RegisterPage.jsx'
import { NotFound } from './pages/NotFoundPage.jsx'
import { Workouts } from './pages/Workouts.jsx'
import { AuthLayout } from './pages/AuthLayout.jsx'
import { Layout } from './pages/Layout.jsx'

function App() {
    const [workouts, setWorkouts] = useState(null);
    const [users, setUsers] = useState(null);

    const getUsers = async() => await readUsers().then((data) => setUsers(data));

    useEffect(() => {
    }, [])


    return (
        <>
            <Routes>
                <Route index element={<NotFound />} />

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                <Route path="somepath" element={<Workouts/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
