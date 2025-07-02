import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'

import { readWorkouts } from './services/workoutService.js'
import { readUsers } from './services/userService.js'
import { LoginForm } from './components/LoginForm.jsx'
import { RegisterForm } from './components/RegisterForm.jsx'

import { Login } from './pages/LoginPage.jsx'
import { Register } from './pages/RegisterPage.jsx'
import { NotFound } from './pages/NotFoundPage.jsx'

function App() {
    const [workouts, setWorkouts] = useState(null);
    const [users, setUsers] = useState(null);

    const getWorkouts = async () => await readWorkouts().then((data) => setWorkouts(data));

    const getUsers = async() => await readUsers().then((data) => setUsers(data));

    useEffect(() => {
        getWorkouts();
        getUsers();
    }, [])


    return (
        <>
            <Routes>
                <Route index element={<NotFound />} />
                <Route path="somepath" element={<Somelement/>} />

                <Route path="/auth">
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            /*
            <LoginForm/>
            <RegisterForm/>
            <div className="card">
                {users &&
                    users.map((users, idx) => {
                        return <p key={users.id}>{users.username}</p>
                    })
                }
            </div>
            <div className="card">
                {workouts &&
                    workouts.map((workout, idx) => {
                        return <p key={workout.id}>{workout.name}</p>
                    })
                }
            </div>
            */
        </>
    )
}

export default App
