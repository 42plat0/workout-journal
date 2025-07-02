import { useState, useEffect } from "react";

import { readWorkouts } from "../services/workoutService";

export function Workouts(){
    const [workouts, setWorkouts] = useState(null);
    
    const getWorkouts = async () => await readWorkouts().then((data) => setWorkouts(data));

    useEffect(() => {
        getWorkouts();
    }, [])

    {workouts &&
        workouts.map((workout, idx) => {
            return <p key={workout.id}>{workout.name}</p>
        })
    }

}

