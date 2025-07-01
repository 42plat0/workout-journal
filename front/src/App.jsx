import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'
import { readWorkouts } from './services/workoutService.js'
import { readUsers } from './services/userService.js'
import { MyForm } from './components/MyForm.jsx'
import { LoginForm } from './components/LoginForm.jsx'


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
            <MyForm/>
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
        </>
    )
}

export default App
