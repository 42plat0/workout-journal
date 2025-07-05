import { Routes, Route } from 'react-router'

import { Login } from './pages/LoginPage.jsx'
import { Register } from './pages/RegisterPage.jsx'
import { Logout } from './pages/LogoutPage.jsx'
import { NotFound } from './pages/NotFoundPage.jsx'
import { Workouts } from './pages/Workouts.jsx'
import { AuthLayout } from './pages/AuthLayout.jsx'
import { Layout } from './pages/Layout.jsx'
import { ProtectedRoute } from './pages/ProtectedPage.jsx'
import { WorkoutForm } from './components/WorkoutForm.jsx'

export const Router = () => {
    return(
        <Routes>
            // Public
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="logout" element={<Logout />} />
            </Route>

            // Content page
            <Route path="/" element={<Layout />}>
                // Home
                <Route index element={
                    <ProtectedRoute>
                        <Workouts />
                    </ProtectedRoute>
                }/>
                <Route path="workout">
                    <Route path="create" element={
                        <ProtectedRoute>
                            <WorkoutForm/>
                        </ProtectedRoute>
                    }/>
                </Route>

                // Default 404
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )

} 
